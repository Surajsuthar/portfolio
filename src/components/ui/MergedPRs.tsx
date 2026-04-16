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
		<div className="flex flex-col gap-2">
			{prs.map((pr) => (
				<div
					key={pr.id}
					className="group p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
				>
					<div className="flex items-start justify-between gap-2">
						<div className="flex items-start gap-2 min-w-0">
							<GitMerge className="h-4 w-4 mt-0.5 text-purple-500 shrink-0" />
							<div className="min-w-0">
								<h3 className="font-semibold text-sm leading-snug line-clamp-2">
									{pr.title}
								</h3>
								<p className="text-xs text-muted-foreground mt-0.5">
									<span className="font-medium text-foreground/70">
										{pr.repoFullName}
									</span>
									{" · "}#{pr.number}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2 shrink-0">
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
						<div className="flex flex-wrap gap-1.5 mt-2 ml-6">
							{pr.labels.map((label) => (
								<span
									key={label.name}
									className="text-xs px-2 py-0.5 rounded-full"
									style={{
										backgroundColor: `#${label.color}22`,
										color: `#${label.color}`,
										border: `1px solid #${label.color}44`,
									}}
								>
									{label.name}
								</span>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
