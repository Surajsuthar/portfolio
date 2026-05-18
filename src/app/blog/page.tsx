import { BlogList } from "@/components/ui/BlogList";
import { PageShell } from "@/components/ui/PageShell";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
	const posts = getAllPosts();

	return (
		<PageShell title="blog">
			<BlogList posts={posts} />
		</PageShell>
	);
}
