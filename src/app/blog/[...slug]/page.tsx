import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogView } from "@/components/ui/BlogView";
import Footer from "@/components/ui/footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itssuraj.dev";

type Props = {
	params: { slug: string[] };
};

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: [post.slug],
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug.join("/");
	const post = getPostBySlug(slug);

	if (!post) return {};

	return {
		title: `${post.title} | Suraj`,
		description: post.description,
		keywords: post.tags,
		authors: [{ name: "Suraj", url: SITE_URL }],
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			publishedTime: post.date,
			authors: ["Suraj"],
			tags: post.tags,
			url: `${SITE_URL}/blog/${post.slug}`,
			siteName: "It's Suraj",
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			creator: "@suraj",
		},
		alternates: {
			canonical: `${SITE_URL}/blog/${post.slug}`,
		},
	};
}

export default function BlogPostPage({ params }: Props) {
	const slug = params.slug.join("/");
	const post = getPostBySlug(slug);

	if (!post) notFound();

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			"@type": "Person",
			name: "Suraj",
			url: SITE_URL,
		},
		publisher: {
			"@type": "Person",
			name: "Suraj",
			url: SITE_URL,
		},
		keywords: post.tags.join(", "),
		url: `${SITE_URL}/blog/${post.slug}`,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${SITE_URL}/blog/${post.slug}`,
		},
	};

	return (
		<main className="min-h-screen flex flex-col">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="flex-1 w-full max-w-[650px] mx-auto px-6 pt-6 md:pt-10 pb-12">
				<Link
					href="/"
					className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
				>
					← back
				</Link>
				<BlogView post={post} />
			</div>
			<div className="w-full max-w-[650px] mx-auto px-6">
				<Footer />
			</div>
		</main>
	);
}
