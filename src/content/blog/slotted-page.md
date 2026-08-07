---
title: "Understanding Slotted Pages: The Backbone of B-Trees"
description: "Slotted pages are the backbone of B-trees, providing a flexible way to store variable-length records on disk."
date: "2026-08-07"
tags: ["Database", "Btree"]
---

# Slotted Pages: The Backbone of B-Trees

If you've ever wondered how SQLite or Postgres actually lay out data on disk, the answer starts with a deceptively simple structure: the **slotted page**. Every B-tree node — every leaf, every internal node — is just a slotted page underneath.

## Why Pages Exist in the First Place

Disk and memory don't exchange data byte-by-byte — they exchange it in fixed-size blocks called **pages**, typically 4 KB or 8 KB. Postgres defaults to 8 KB pages; SQLite defaults to 4 KB. This isn't an arbitrary choice: it matches the OS's own page size and disk I/O granularity, so a single page read/write maps cleanly onto a single I/O operation.

A B-tree is built on top of these fixed-size pages — each node of the tree *is* one page. But records are variable-length (a row with a long text field takes more space than one with just an integer), while the page itself is fixed-size. Slotted pages solve exactly this mismatch: they let a fixed-size block hold a variable number of variable-length records, while keeping metadata and actual data cleanly separated.

## Leaf vs. Interior Pages

A B-tree has two kinds of pages:

- **Leaf pages** store the actual data (the real rows/records).
- **Interior pages** store keys and child pointers, used purely for navigation down to the leaves.

For an interior page holding `n` keys, there are always `n + 1` child pointers — one pointer for "less than key[0]", one for each "between key[i] and key[i+1]", and one for "greater than key[n-1]".

## Anatomy of a Slotted Page

Every slotted page (say, 4096 bytes) is divided into three regions:

1. **Header** — a fixed-size struct storing metadata: page type, number of slots, etc.
2. **Cell pointer array** — a variable-size array of offsets, one per cell, kept in **sorted key order**. Because it's sorted, you can binary-search it directly to find a key.
3. **Cell content area** — the actual cell data (keys, payloads, child pointers).

```
4096-byte Slotted Page overview

0                                                                            4095
┌────────┬──────────────────────────────┬──────────────────────────────────────┐
│ Header │      Cell Pointer Array      │             Cell Content Area        │
│ (8 B)  │   grows left ───────────▶    │   ◀──────────── grows right-to-left  │
└────────┴──────────────────────────────┴──────────────────────────────────────┘
         ▲                              ▲                                      ▲
      bytes 0..7                  u16 offsets                       variable-size cells
```

The two variable-size regions grow **toward each other** from opposite ends of the page. The cell pointer array grows rightward (left to right) as new cells are added; the cell content area grows leftward (right to left) as new cell data is written. The page is full when the two regions collide — this is what a "page split" responds to in B-tree insertion.

## The 8-Byte Header

```
offset 0      1        3        5          7
┌──────┬──────────┬─────────┬────────────┬──────┐
│ type │ freeblock│ ncells  │ content    │ frag │
│  u8  │ head u16 │  u16    │ start u16  │  u8  │
└──────┴──────────┴─────────┴────────────┴──────┘
```

| Field | Size | Meaning |
|---|---|---|
| `type` | 1 byte | Page type — leaf or interior. |
| `freeblock` | u16 | Offset to the **head of a linked list of freeblocks**. `0` means no freeblocks exist. |
| `ncells` | u16 | Number of cells (slots) currently on the page. |
| `content_start` | u16 | Offset where the cell content area currently begins. |
| `frag` | 1 byte | Count of fragmented free bytes (unusable free space too small to be a freeblock). |

Header size differs by page type: **8 bytes** for leaf pages, **12 bytes** for interior pages — interior pages carry an extra 4-byte **right-most child pointer**, since with `n` keys you need `n + 1` children, and the last one has no key to its right to be paired with.

### `freeblock`, not "free bytes"

This is the field people most often misread. `freeblock` is **not** a count of free bytes on the page — it's a **pointer (offset)** to the first node of a linked list of deleted, reclaimed cell slots. When a cell is deleted, its space isn't immediately compacted; instead it's turned into a freeblock:

```
freeblock node layout (stored at the freed offset itself)
┌────────────────┬──────────┐
│next_offset u16 │ size u16 │
└────────────────┴──────────┘
```

Each freeblock stores the offset of the *next* freeblock and its own size, forming an intrusive linked list threaded through the page's free space. When allocating space for a new cell, the allocator first walks this list looking for a big-enough freeblock before falling back to carving new space off `content_start`. This is the same first-fit/best-fit allocation problem you'd see in a memory allocator — just scoped to a single page.

### Freeblocks vs. fragmentation

Both track wasted space, but differently:
- **Freeblocks** are reclaimable chunks big enough to be reused for a future cell (tracked via the linked list).
- **`frag`** counts small leftover gaps *too tiny* to be worth tracking as a freeblock (e.g., 1–3 stray bytes between cells). These only get reclaimed during a full **defragmentation** pass, where all live cells are compacted toward one end of the content area and the freeblock list is reset.

## What a Cell Actually Contains

The cell pointer array just stores offsets — the interesting part is what lives at those offsets, and it differs by page type:

- **Leaf page cell** → the actual record: typically `[payload size][key/rowid][payload bytes]` (with large payloads spilling into overflow pages when they don't fit on one page).
- **Interior page cell** → `[child pointer][key]` — no payload at all, just enough to route a search toward the correct child.

This is why interior pages can pack far more entries per page than leaf pages: they carry pointers and keys only, never the actual row data.

## Why Binary Search Works Here

Because the cell pointer array is kept sorted by key, looking up a key on a page is a binary search over the pointer array — `O(log n)` comparisons — even though the actual cells it points to are scattered non-contiguously across the content area. Insertion only needs to shift pointers in the array (cheap), not move the cell data itself (expensive), which is exactly why the indirection through a pointer array exists in the first place.

## Further Reading

- Turso's B-tree implementation (Rust): https://github.com/tursodatabase/turso/blob/main/core/storage/btree.rs
- My own from-scratch implementation: https://github.com/Surajsuthar/database-component-/blob/main/src/storage/btree/page.rs
