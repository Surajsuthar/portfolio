import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itssuraj.dev";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "It's Suraj",
		template: "%s | Suraj",
	},
	description:
		"Suraj's personal portfolio — software engineer, writer, and builder. Read blog posts on backend engineering, databases, and system design.",
	keywords: [
		"Suraj",
		"software engineer",
		"backend",
		"system design",
		"database",
		"blog",
		"portfolio",
	],
	authors: [{ name: "Suraj", url: SITE_URL }],
	creator: "Suraj",
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: SITE_URL,
		siteName: "It's Suraj",
		title: "It's Suraj",
		description:
			"Suraj's personal portfolio — software engineer, writer, and builder.",
	},
	twitter: {
		card: "summary_large_image",
		title: "It's Suraj",
		description:
			"Suraj's personal portfolio — software engineer, writer, and builder.",
		creator: "@suraj",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Toaster className="toast" />
				<Analytics />
			</body>
		</html>
	);
}
