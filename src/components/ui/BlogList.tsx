"use client"

import type { BlogPost } from "@/lib/blog"

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
}

export function BlogList({
    posts,
    onSelect,
}: {
    posts: BlogPost[]
    onSelect: (post: BlogPost) => void
}) {
    if (posts.length === 0) {
        return (
            <p className="text-muted-foreground text-sm">No posts yet. Stay tuned!</p>
        )
    }

    return (
        <div className="flex flex-col gap-2">
            {posts.map((post) => (
                <button
                    key={post.slug}
                    onClick={() => onSelect(post)}
                    className="text-left group p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <h3 className="font-semibold">{post.title}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {formatDate(post.date)}
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-muted rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </button>
            ))}
        </div>
    )
}
