---
title: "Understanding Database ACID Properties"
description: "A deep dive into database transactions and ACID properties — Atomicity, Consistency, Isolation (with read phenomena and isolation levels), and Durability."
date: "2026-02-07"
tags: ["Database", "SQL", "Backend", "System Design"]
---

# Understanding Database ACID Properties

Every backend developer eventually hits a moment where data goes wrong — a payment deducted but never credited, an inventory count that doesn't add up, or two users booking the same seat. These aren't just bugs. They're symptoms of misunderstanding how databases handle concurrent operations. To truly build reliable systems, you need to understand **transactions** and the **ACID** guarantees that protect your data.

## What is a Transaction?

A transaction is a **logical unit of work** that consists of one or more database operations (reads, writes, updates, deletes) executed as a single, indivisible sequence. Either every operation in the transaction succeeds, or none of them take effect.

Think of it like this: when you transfer money from Account A to Account B, two things must happen — a debit from A and a credit to B. These two operations together form a transaction. You never want just one of them to happen.

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;  -- Debit from A
UPDATE accounts SET balance = balance + 500 WHERE id = 2;  -- Credit to B

COMMIT;
```

If anything goes wrong between the two statements — a server crash, a constraint violation, a power failure — the database **rolls back** the entire transaction, leaving both accounts untouched.

### Transaction Lifecycle

A transaction moves through well-defined states:

```
BEGIN → Active → [Partially Committed] → Committed
                         ↓
                       Failed → Aborted (Rolled Back)
```

1. **Active** — The transaction is executing its operations
2. **Partially Committed** — All operations have executed, but changes are not yet permanently written
3. **Committed** — Changes are permanently saved to disk
4. **Failed** — An error occurred during execution
5. **Aborted** — All changes from the failed transaction are undone

Without transactions, you're essentially hoping nothing goes wrong between individual statements — and in production, things always go wrong.

---

## ACID Properties

ACID is the set of four guarantees that a reliable database provides for every transaction. The acronym stands for **Atomicity**, **Consistency**, **Isolation**, and **Durability**. These aren't abstract theory — they're the reason your bank account doesn't lose money and your e-commerce orders don't duplicate.

---

## A — Atomicity

Atomicity means a transaction is **all or nothing**. There is no such thing as a partial transaction. If even one operation within a transaction fails, the entire transaction is rolled back as if it never happened.

### Why Atomicity Matters

Consider an e-commerce checkout:

```sql
BEGIN TRANSACTION;

-- Step 1: Deduct item from inventory
UPDATE products SET stock = stock - 1 WHERE id = 42;

-- Step 2: Create the order
INSERT INTO orders (user_id, product_id, quantity, total)
VALUES (7, 42, 1, 29.99);

-- Step 3: Charge the customer
UPDATE wallets SET balance = balance - 29.99 WHERE user_id = 7;

COMMIT;
```

Without atomicity, imagine the server crashes right after Step 1. The inventory is reduced, but no order exists and the customer was never charged. You've lost a unit of stock into thin air.

With atomicity, the database guarantees: **if the COMMIT doesn't complete, all three changes are rolled back.** The stock stays the same, no order is created, and the wallet is untouched.

### How Databases Implement Atomicity

Databases use a mechanism called the **Write-Ahead Log (WAL)**, also known as a redo/undo log. Before any change is applied to the actual data, the database first writes the intended change to a log file on disk. If a crash occurs:

- **Uncommitted transactions** are rolled back using the undo log — every modification is reversed
- **Committed transactions** that haven't been flushed to the data files are replayed using the redo log

This is why atomicity isn't just application-level error handling — it survives **process crashes, power failures, and hardware faults**.

### Atomicity in Practice

```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;

-- Suppose a CHECK constraint exists: balance >= 0
-- If account 1 only has 800, this fails.
-- The database rolls back the ENTIRE transaction.

UPDATE accounts SET balance = balance + 1000 WHERE id = 2;

COMMIT;
```

The second account never receives money it shouldn't. The constraint violation in the first statement causes the whole transaction to abort. This is atomicity at work — protecting data integrity even when operations partially succeed.

---

## C — Consistency

Consistency guarantees that a transaction takes the database from **one valid state to another valid state**. It ensures that all rules, constraints, and invariants defined on the database are respected before and after every transaction.

### What "Valid State" Means

A database is in a valid state when all of the following hold true:

- **Primary key constraints** — No duplicate primary keys exist
- **Foreign key constraints** — Every reference points to an existing row
- **CHECK constraints** — All column values satisfy defined conditions (e.g., `balance >= 0`)
- **UNIQUE constraints** — No duplicate values in unique columns
- **NOT NULL constraints** — Required fields are never empty
- **Application-level invariants** — Business rules hold true (e.g., total debits = total credits)

### Example: Consistency in a Banking System

Suppose you have a rule: **the total money across all accounts must always equal the same amount** (money doesn't appear or disappear).

```sql
-- Initial state: Account A = 1000, Account B = 500
-- Total = 1500

BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 200 WHERE id = 'A';
UPDATE accounts SET balance = balance + 200 WHERE id = 'B';
COMMIT;

-- Final state: Account A = 800, Account B = 700
-- Total = 1500 ✓ Consistent
```

If a transaction tried to debit 200 from A without crediting B, the total would be 1300 — an inconsistent state. The database (through atomicity + constraints) prevents this.

### Consistency is a Shared Responsibility

Unlike the other three properties, consistency is **not solely the database's job**. The database enforces structural constraints (foreign keys, checks, unique), but **application-level consistency** depends on the developer writing correct transaction logic. If you forget to include the credit step in a transfer, no constraint can save you. The database trusts you to define transactions that make semantic sense.

---

## I — Isolation

Isolation determines how and when changes made by one transaction become visible to other concurrent transactions. In a system where hundreds of transactions execute simultaneously, isolation prevents them from stepping on each other's toes.

Without proper isolation, concurrent transactions can produce bizarre results — reading data that was never committed, seeing partial updates, or getting different results from the same query within a single transaction.

### Read Phenomena (Problems Without Proper Isolation)

These are the specific anomalies that can occur when isolation is insufficient:

#### 1. Dirty Read

A transaction reads data that has been **modified by another transaction that hasn't committed yet**.

```
Transaction A:                         Transaction B:
─────────────                          ─────────────
BEGIN;
UPDATE accounts
  SET balance = 200
  WHERE id = 1;
                                       BEGIN;
                                       SELECT balance FROM accounts
                                         WHERE id = 1;
                                       -- Reads 200 (uncommitted!)
ROLLBACK;
-- Balance is back to 1000
                                       -- Transaction B used 200,
                                       -- but that value never existed
```

Transaction B made a decision based on data that **never actually existed** in the committed database. This is extremely dangerous for financial or critical systems.

#### 2. Non-Repeatable Read

A transaction reads the same row twice and gets **different values** because another transaction modified and committed the row in between.

```
Transaction A:                         Transaction B:
─────────────                          ─────────────
BEGIN;
SELECT balance FROM accounts
  WHERE id = 1;
-- Reads 1000
                                       BEGIN;
                                       UPDATE accounts
                                         SET balance = 500
                                         WHERE id = 1;
                                       COMMIT;

SELECT balance FROM accounts
  WHERE id = 1;
-- Reads 500 (different!)
COMMIT;
```

Transaction A sees the balance change from 1000 to 500 within the same transaction. If A was calculating something based on the assumption that the balance is stable, the result could be incorrect.

#### 3. Phantom Read

A transaction executes the same query twice and gets a **different set of rows** because another transaction inserted or deleted rows that match the query condition.

```
Transaction A:                         Transaction B:
─────────────                          ─────────────
BEGIN;
SELECT COUNT(*) FROM orders
  WHERE status = 'pending';
-- Returns 5
                                       BEGIN;
                                       INSERT INTO orders (status)
                                         VALUES ('pending');
                                       COMMIT;

SELECT COUNT(*) FROM orders
  WHERE status = 'pending';
-- Returns 6 (phantom row appeared!)
COMMIT;
```

The difference from a non-repeatable read: phantom reads involve **new rows appearing or disappearing**, not existing rows changing values.

### Isolation Levels

SQL databases define four standard isolation levels, each offering a different trade-off between **correctness** and **performance**. Higher isolation = more correctness but more locking and lower throughput.

#### 1. Read Uncommitted (Lowest Isolation)

- **Allows:** Dirty reads, non-repeatable reads, phantom reads
- **Behavior:** Transactions can see uncommitted changes from other transactions
- **Use case:** Almost never used in practice. Only suitable for approximate analytics where accuracy doesn't matter (e.g., rough row counts on a dashboard)

```sql
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
```

#### 2. Read Committed

- **Prevents:** Dirty reads
- **Allows:** Non-repeatable reads, phantom reads
- **Behavior:** A transaction only sees data that has been committed. Each SELECT statement sees the most recently committed version at the time the statement executes
- **Use case:** **Default level in PostgreSQL and Oracle.** Good enough for most applications

```sql
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

In practice, this means each `SELECT` within a transaction might see different committed data if other transactions commit between them.

#### 3. Repeatable Read

- **Prevents:** Dirty reads, non-repeatable reads
- **Allows:** Phantom reads (in standard SQL; PostgreSQL also prevents phantoms at this level)
- **Behavior:** Once a transaction reads a row, it will always see the same values for that row throughout the transaction, regardless of what other transactions commit
- **Use case:** **Default level in MySQL/InnoDB.** Good for financial calculations where you need stable data within a transaction

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

**Implementation note:** PostgreSQL implements this using **MVCC (Multi-Version Concurrency Control)** — each transaction sees a snapshot of the database as it existed when the transaction began. MySQL/InnoDB also uses MVCC but with some behavioral differences around phantom reads.

#### 4. Serializable (Highest Isolation)

- **Prevents:** Dirty reads, non-repeatable reads, phantom reads
- **Behavior:** Transactions execute as if they ran one after another in sequence — complete isolation. The database ensures the result is equivalent to some serial execution order
- **Use case:** Critical financial transactions, booking systems where double-booking is unacceptable

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

**The cost:** Serializable isolation significantly impacts performance. The database uses heavier locking (or aborts conflicting transactions in MVCC-based systems), reducing throughput. Only use it where absolute correctness is non-negotiable.

### Isolation Levels Summary

| Isolation Level    | Dirty Read | Non-Repeatable Read | Phantom Read |
|--------------------|------------|---------------------|--------------|
| Read Uncommitted   | Possible   | Possible            | Possible     |
| Read Committed     | Prevented  | Possible            | Possible     |
| Repeatable Read    | Prevented  | Prevented           | Possible*    |
| Serializable       | Prevented  | Prevented           | Prevented    |

*PostgreSQL prevents phantom reads at Repeatable Read level due to its MVCC implementation.

### Choosing the Right Isolation Level

- **Read Committed** is the right default for most web applications. It prevents dirty reads without excessive locking.
- **Repeatable Read** is worth using for reporting queries, financial calculations, or any logic that reads the same data multiple times within a transaction.
- **Serializable** should be reserved for critical sections where correctness trumps performance — booking a seat, processing a payment, or updating a shared counter.

Start with the lowest level that gives you correct results, and only increase isolation when you can demonstrate a real concurrency bug.

---

## D — Durability

Durability guarantees that once a transaction is committed, **it stays committed** — even if the system crashes, loses power, or the hardware fails immediately after. The committed data is permanently written to non-volatile storage.

### How Durability Works

When you execute `COMMIT`, the database doesn't just update data in memory and call it done. Here's what actually happens:

1. **WAL Flush** — The transaction's changes are written to the Write-Ahead Log (WAL) on disk. The `COMMIT` only returns success **after** this disk write completes.
2. **Checkpointing** — Periodically, the database flushes dirty pages from memory to the actual data files on disk.
3. **Recovery** — If a crash occurs after commit but before checkpointing, the database replays the WAL on startup to reconstruct the committed changes.

```
Transaction commits
      ↓
WAL written to disk (fsync) ← This is the durability guarantee
      ↓
COMMIT returns success to client
      ↓
[Later] Data files updated via checkpoint
```

The key insight: **durability is tied to the WAL hitting the disk**, not to the data files being updated. This is why WAL-based databases can be both durable and fast.

### Durability vs. Performance

Calling `fsync` on every commit is expensive — it forces the OS to flush its write buffer to physical disk. Some databases offer tunable durability:

- **PostgreSQL:** `synchronous_commit = on` (default) guarantees durability. Setting it to `off` improves performance but risks losing the last few transactions in a crash.
- **MySQL:** `innodb_flush_log_at_trx_commit = 1` (default) flushes on every commit. Setting it to `2` flushes to OS cache (faster but less durable).

For most applications, the default settings are correct. Only relax durability when you're processing data that can be safely regenerated — like cache warming or batch imports.

### Durability Beyond a Single Machine

On a single machine, durability protects against process crashes and power failures. But what about disk failures? Production databases use additional strategies:

- **Replication** — Synchronous replicas ensure data exists on multiple machines before confirming commit
- **RAID** — Hardware-level disk redundancy
- **Backups** — Point-in-time recovery from WAL archives

True durability in production is a combination of database guarantees and infrastructure design.

---

## ACID in the Real World

Understanding ACID isn't just academic — it directly impacts how you design systems:

- **Use transactions** for any operation involving multiple related writes. Don't rely on application code to manually coordinate individual statements.
- **Choose the right isolation level.** Defaulting to Serializable everywhere kills performance. Defaulting to Read Uncommitted everywhere introduces data corruption.
- **Understand your database.** PostgreSQL, MySQL, SQL Server, and Oracle all implement ACID slightly differently. Read the documentation for your specific database.
- **Test concurrent scenarios.** ACID bugs don't appear in single-user testing. Use tools like `pgbench` or write concurrent test scripts to verify your transaction logic holds under load.

ACID properties are the foundation of every reliable data system. Master them, and you'll build systems that handle failures gracefully instead of corrupting data silently.
