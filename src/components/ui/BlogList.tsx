"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
	if (posts.length === 0) {
		return (
			<p className="text-muted-foreground text-sm">No posts yet. Stay tuned!</p>
		);
	}

	return (
		<div className="flex flex-col gap-8">
			{posts.map((post) => (
				<Link
					key={post.slug}
					href={`/blog/${post.slug}`}
					className="block text-left transition-colors hover:text-muted-foreground"
				>
					<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
						<h3 className="text-sm font-medium">{post.title}</h3>
						<span className="text-sm text-muted-foreground whitespace-nowrap">
							{formatDate(post.date)}
						</span>
					</div>
					<p className="mt-3 text-sm leading-6 text-muted-foreground">
						{post.description}
					</p>
					<p className="mt-3 text-xs leading-6 text-muted-foreground">{post.tags.join(" / ")}</p>
				</Link>
			))}
		</div>
	);
}
