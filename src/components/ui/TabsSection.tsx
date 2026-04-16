"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { BlogPost } from "@/lib/blog";
import type { MergedPR } from "@/lib/github";
import { BlogList } from "./BlogList";
import { Experience } from "./exprience";
import Projects from "./Projects";
import { MergedPRs } from "./MergedPRs";

interface TabsSectionProps {
	posts: BlogPost[];
	mergedPRs: MergedPR[];
}

export function TabsSection({ posts, mergedPRs }: TabsSectionProps) {
	return (
		<Tabs defaultValue="experience" className="w-full">
			<TabsList className="w-full justify-start bg-transparent rounded-none h-auto p-0 gap-4">
				<TabsTrigger
					value="experience"
					className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-2"
				>
					Experience
				</TabsTrigger>
				<TabsTrigger
					value="projects"
					className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-2"
				>
					Projects
				</TabsTrigger>
				<TabsTrigger
					value="open-source"
					className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-2"
				>
					Open Source
				</TabsTrigger>
				<TabsTrigger
					value="blog"
					className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-2"
				>
					Blog
				</TabsTrigger>
			</TabsList>
			<TabsContent value="experience" className="mt-6">
				<Experience />
			</TabsContent>
			<TabsContent value="projects" className="mt-6">
				<Projects />
			</TabsContent>
			<TabsContent value="open-source" className="mt-6">
				<MergedPRs prs={mergedPRs} />
			</TabsContent>
			<TabsContent value="blog" className="mt-6">
				<BlogList posts={posts} />
			</TabsContent>
		</Tabs>
	);
}
