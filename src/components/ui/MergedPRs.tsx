import { ExternalLink, GitMerge } from "lucide-react";
import type { MergedPR } from "@/lib/github";

function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	return date.toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}

export function MergedPRs({ prs }: { prs: MergedPR[] }) {
	if (prs.length === 0) {
		return (
			<p className="text-sm text-muted-foreground">
				No merged pull requests found.
			</p>
		);
	}

	return (
		<div className="flex flex-col gap-8">
			{prs.map((pr) => (
				<div
					key={pr.id}
					className="pb-2"
				>
					<div className="flex items-start justify-between gap-4">
						<div className="flex min-w-0 items-start gap-3">
							<GitMerge className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
							<div className="min-w-0">
								<h3 className="line-clamp-2 text-sm font-medium leading-6">
									{pr.title}
								</h3>
								<p className="mt-1 text-xs leading-6 text-muted-foreground">
									<span className="font-medium text-foreground/70">
										{pr.repoFullName}
									</span>
									{" · "}#{pr.number}
								</p>
							</div>
						</div>
						<div className="flex shrink-0 items-center gap-2">
							<span className="text-xs text-muted-foreground whitespace-nowrap">
								{formatDate(pr.merged_at)}
							</span>
							<a
								href={pr.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="View pull request on GitHub"
							>
								<ExternalLink className="h-4 w-4" />
							</a>
						</div>
					</div>
					{pr.labels.length > 0 && (
						<p className="ml-7 mt-3 text-xs leading-6 text-muted-foreground">
							{pr.labels.map((label) => label.name).join(" / ")}
						</p>
					)}
				</div>
			))}
		</div>
	);
}
