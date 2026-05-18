"use client";

import type { ReactNode } from "react";
import type { BlogPost } from "@/lib/blog";
import type { MergedPR } from "@/lib/github";
import { BlogList } from "./BlogList";
import { Experience } from "./exprience";
import { MergedPRs } from "./MergedPRs";
import Projects from "./Projects";

interface TabsSectionProps {
	posts: BlogPost[];
	mergedPRs: MergedPR[];
}

export function TabsSection({ posts, mergedPRs }: TabsSectionProps) {
	return (
		<div className="flex w-full flex-col gap-12">
			<Section id="experience" title="Experience" eyebrow="Work">
				<Experience />
			</Section>
			<Section id="projects" title="Projects" eyebrow="Selected builds">
				<Projects />
			</Section>
			<Section id="open-source" title="Open Source" eyebrow="Merged work">
				<MergedPRs prs={mergedPRs} />
			</Section>
			<Section id="blog" title="Blog" eyebrow="Writing">
				<BlogList posts={posts} />
			</Section>
		</div>
	);
}

function Section({
	id,
	title,
	eyebrow,
	children,
}: {
	id: string;
	title: string;
	eyebrow: string;
	children: ReactNode;
}) {
	return (
		<section
			id={id}
			className="scroll-mt-8 border-t border-border pt-7"
		>
			<div className="mb-4">
				<p className="sr-only">{eyebrow}</p>
				<h2 className="text-base font-semibold lowercase">{title}</h2>
			</div>
			{children}
		</section>
	);
}
