"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "@/lib/blog";

function formatDate(dateStr: string) {
	return new Date(dateStr).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

function getReadingTime(content: string) {
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / 200);
	return `${minutes} min read`;
}

export function BlogView({ post }: { post: BlogPost }) {
	return (
		<article>
			<header className="mb-8">
				<h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
				<p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
					<span>{formatDate(post.date)}</span>
					<span className="opacity-40">·</span>
					<span>{getReadingTime(post.content)}</span>
				</p>
				<div className="flex flex-wrap gap-2 mt-3">
					{post.tags.map((tag) => (
						<span key={tag} className="text-xs px-2 py-1 bg-muted rounded-md">
							{tag}
						</span>
					))}
				</div>
			</header>
			<div className="prose-custom">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{post.content}
				</ReactMarkdown>
			</div>
		</article>
	);
}
