"use client";
import Link from "next/link";
import { toast } from "sonner";

const sectionLinks = [
	{ href: "/experience", label: "experience" },
	{ href: "/projects", label: "projects" },
	{ href: "/open-source", label: "open source" },
	{ href: "/blog", label: "blog" },
	{ href: "/paper", label: "research paper" },
];

export default function Hero() {
	const email = "surajsuthar0067@gmail.com";

	const handleCopy = () => {
		navigator.clipboard
			.writeText(email)
			.then(() => {
				toast("Email copied!");
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
			});
	};

	return (
		<section id="home" className="flex min-h-screen items-center">
			<div className="flex flex-col gap-5">
				<div>
					<h1 className="text-4xl font-semibold tracking-normal md:text-5xl">
						Hey!👋
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">Backend engineer</p>
				</div>
				<p className="max-w-xl text-[15px] leading-7 text-foreground">
					hey, I&apos;m Suraj Suthar. i build backend systems, APIs, and
					products that are reliable enough to live in production.
				</p>
				<p className="max-w-xl text-[15px] leading-7 text-muted-foreground">
					I&apos;m also exploring database internals and trying to understand
					how storage, indexing, and query execution work under the hood. i like
					working close to databases, queues, APIs, and the boring details that
					make software easier to run and maintain.
				</p>
				<p className="max-w-xl text-[15px] leading-7 text-muted-foreground">
					i usually work with TypeScript, Python, Go, C/C++, and Postgres.
				</p>
				<p className="max-w-xl text-[15px] leading-7">
					Hire me! I am Looking for a Database/Backend Engineer Position.
				</p>
				<nav
					aria-label="Home sections"
					className="flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm"
				>
					{sectionLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-sm">
					<button
						onClick={handleCopy}
						type="button"
						className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
						aria-label="Copy email"
					>
						send email
					</button>
					<a
						href="https://github.com/Surajsuthar"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
					>
						github
					</a>
					<a
						href="https://x.com/Suraj__0067"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
					>
						x/twitter
					</a>
				</div>
			</div>
		</section>
	);
}
