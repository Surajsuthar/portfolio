"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Experience } from "./exprience"
import Projects from "./Projects"
import { BlogList } from "./BlogList"
import { BlogView } from "./BlogView"
import type { BlogPost } from "@/lib/blog"
import { ArrowLeft } from "lucide-react"

export function TabsSection({ posts }: { posts: BlogPost[] }) {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

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
                    value="blog"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-2"
                    onClick={() => setSelectedPost(null)}
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
            <TabsContent value="blog" className="mt-6">
                {selectedPost ? (
                    <div>
                        <button
                            onClick={() => setSelectedPost(null)}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to posts
                        </button>
                        <BlogView post={selectedPost} />
                    </div>
                ) : (
                    <BlogList posts={posts} onSelect={setSelectedPost} />
                )}
            </TabsContent>
        </Tabs>
    )
}
