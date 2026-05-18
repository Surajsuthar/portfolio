import { MergedPRs } from "@/components/ui/MergedPRs";
import { PageShell } from "@/components/ui/PageShell";
import { getMergedPRs } from "@/lib/github";

export default async function OpenSourcePage() {
	const mergedPRs = await getMergedPRs();

	return (
		<PageShell title="open source">
			<MergedPRs prs={mergedPRs} />
		</PageShell>
	);
}
