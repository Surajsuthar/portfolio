import Link from "next/link";
import type { ReactNode } from "react";

export function PageShell({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<main className="min-h-screen">
			<div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
				<Link
					href="/"
					className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
				>
					home
				</Link>
				<h1 className="mt-12 text-3xl font-semibold lowercase">{title}</h1>
				<div className="mt-10">{children}</div>
			</div>
		</main>
	);
}
