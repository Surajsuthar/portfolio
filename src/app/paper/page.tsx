import { PageShell } from "@/components/ui/PageShell";

const papers = [
	{
		title:
			"Evolution of Buffer Management in Database Systems: From Classical Algorithms to Machine Learning and Disaggregated Memory",
		href: "https://arxiv.org/pdf/2512.22995",
		status: "done",
		note: "Read only the last part.",
	},
	{
		title: "Principles of Database Buffer Management",
		href: "https://dl.acm.org/doi/pdf/10.1145/1994.2022",
		status: "done",
	},
	{
		title: "Architecture of a Database System",
		href: "https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf",
		status: "ongoing",
	},
	{
		title:
			"A Mechanism for Managing the Buffer Pool in a Relational Database System Using the Hot Set Model",
		href: "https://www.vldb.org/conf/1982/P257.PDF",
		status: "to read",
	},
];

export default function PaperPage() {
	return (
		<PageShell title="papers i read">
			<ul className="space-y-6">
				{papers.map((paper) => (
					<li key={paper.href} className="border-b pb-6 last:border-b-0">
						<a
							href={paper.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[15px] font-medium leading-7 underline underline-offset-4 transition-colors hover:text-muted-foreground"
						>
							{paper.title}
						</a>
						<div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
							<span>{paper.status}</span>
							{paper.note ? <span>{paper.note}</span> : null}
						</div>
					</li>
				))}
			</ul>
		</PageShell>
	);
}
