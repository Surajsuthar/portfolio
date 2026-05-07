"use client";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";

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
		<div className="flex flex-col gap-4">
			<h1 className="text-4xl md:text-5xl font-bold">Hey, I'm Suraj</h1>
			<p className="text-muted-foreground">
				Builder focused on shipping scalable, production-ready systems with
				1.5+ years of hands-on experience. I love working on databases,
				distributed systems, and the engineering details that keep software
				reliable.
			</p>
			<div className="flex flex-wrap items-center gap-2 text-sm">
				<span className="text-muted-foreground">Core stack</span>
				{["TypeScript", "Python", "Go"].map((language) => (
					<span
						key={language}
						className="rounded-md border border-border px-2 py-1 text-xs text-foreground"
					>
						{language}
					</span>
				))}
			</div>
			<div className="flex items-center gap-4">
				<button
					onClick={handleCopy}
					type="button"
					className="hover:text-muted-foreground transition-colors"
					aria-label="Copy email"
				>
					<Mail className="h-5 w-5" />
				</button>
				<a
					href="https://github.com/Surajsuthar"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-muted-foreground transition-colors"
				>
					<Github className="h-5 w-5" />
				</a>
				<a
					href="https://www.linkedin.com/in/surajmal-suthar-26a297203/"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-muted-foreground transition-colors"
				>
					<Linkedin className="h-5 w-5" />
				</a>
				<a
					href="https://x.com/Suraj__0067"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-muted-foreground transition-colors"
				>
					<Twitter className="h-5 w-5" />
				</a>
				<a
					href="https://drive.google.com/file/d/1laF72Ei3AgopH0sXhBZopyevZbN9Ycvi/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-muted-foreground transition-colors"
				>
					<Download className="h-5 w-5" />
				</a>
			</div>
		</div>
	);
}
