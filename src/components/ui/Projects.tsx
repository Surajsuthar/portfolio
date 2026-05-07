import { ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Dev Notify",
		description:
			"Build a web application that helps developers stay updated on issues from their starred repositories on GitHub. The platform should aggregate and track issue activity in real time, providing notifications and a centralized dashboard to improve developer productivity and awareness.",
		link: "https://devnotify.in",
		tag: null,
		github: "https://github.com/Surajsuthar/dev-notify",
		tech: ["Next.js", "TypeScript", "GitHub API", "Tailwind CSS"],
	},
	{
		id: 2,
		title: "Passion Farms",
		description:
			"Built a scalable full-stack e-commerce platform with real-time inventory tracking and secure payment integration using Stripe. Designed and implemented REST APIs, optimized database queries for product and order management, and delivered a responsive, high-performance user experience using Next.js.",
		link: "https://beta.passionfarms.org",
		github: null,
		tag: "freelance",
		tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
	},
	{
		id: 5,
		title: "Video Transcoder",
		description:
			"Build a video transcoding service with real-time encoding and streaming capabilities. The system should support transcoding into 480p, 720p, 1080p, and 4K resolutions, with all jobs handled asynchronously to ensure a smooth and responsive user experience.",
		github: "https://github.com/Surajsuthar/video-transcoder",
		tag: null,
		link: null,
		tech: ["Python", "FastAPI", "Celery", "Redis", "FFmpeg", "Minio"],
	},
	{
		id: 6,
		title: "Record-me",
		description:
			"Developed an open-source screen recording and video messaging platform as an alternative to Loom. Built features for recording, storing, and sharing videos with secure JWT-based authentication, enabling private hosting and full ownership without relying on third-party subscriptions.",
		link: null,
		github: "https://github.com/Surajsuthar/record-me",
		tag: null,
		tech: ["Next.js", "MongoDB", "Clerk", "Prisma", "Electron"],
	},
	{
		id: 7,
		title: "Coding Challenges",
		description:
			"Built a collection of low-level system tools and algorithmic implementations including a custom grep tool, JSON parser, web server, Redis-like server, compression tool (Huffman coding), and CLI utilities. Focused on understanding core computer science concepts, building from scratch, and optimizing for performance and clean design.",
		github: "https://github.com/Surajsuthar/coding-challages",
		link: null,
		tag: "practice",
		tech: ["Python", "Systems Design", "Algorithms", "CLI Tools"],
	},
];

const wipProjects = [
	{
		id: 1,
		title: "noCap",
		description:
			"Building an AI-assisted note and idea capture app focused on fast writing, clean organization, and lightweight collaboration workflows.",
		link: "https://no-cap-gray.vercel.app/",
		github: null,
		tag: "WIP",
		tech: ["Next.js", "TypeScript", "AI SDK", "Tailwind CSS"],
	},
	{
		id: 2,
		title: "Vidara",
		description:
			"Developing a video-focused product for uploading, processing, and sharing media with a smoother creator workflow and reliable backend jobs.",
		link: null,
		github: "https://github.com/Surajsuthar/vidara",
		tag: "WIP",
		tech: ["Next.js", "Python", "FastAPI", "FFmpeg"],
	},
	{
		id: 3,
		title: "envalut",
		description:
			"Building a CLI secret manager for storing, organizing, and retrieving environment secrets from the terminal with a simple developer workflow.",
		link: null,
		github: null,
		tag: "WIP",
		tech: ["Go", "CLI", "Encryption", "Developer Tools"],
	},
];

interface Prop {
	id: number;
	title: string;
	description: string;
	github: string | null;
	link: string | null;
	tag: string | null;
	tech: string[];
}

function ProjectInfo({
	id,
	title,
	description,
	github,
	link,
	tag,
	tech,
}: Prop) {
	return (
		<div
			key={id}
			className="group p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
		>
			<div className="flex items-start justify-between gap-2">
				<div className="flex items-center gap-2">
					<h3 className="font-semibold">{title}</h3>
					{tag && (
						<span className="text-xs px-2 py-0.5 bg-muted rounded-md text-muted-foreground">
							{tag}
						</span>
					)}
				</div>
				<div className="flex items-center gap-2">
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="View on GitHub"
						>
							<Github className="h-4 w-4" />
						</a>
					)}
					{link && (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="View live demo"
						>
							<ExternalLink className="h-4 w-4" />
						</a>
					)}
				</div>
			</div>
			<p className="mt-1 text-sm text-muted-foreground">{description}</p>
			<p className="mt-2 text-xs text-muted-foreground">{tech.join(" / ")}</p>
		</div>
	);
}

export default function Projects() {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				{projects.map((project) => (
					<ProjectInfo key={project.id} {...project} />
				))}
			</div>

			<section className="border-t border-border pt-5">
				<div className="mb-3 flex items-center justify-between gap-3">
					<h2 className="text-sm font-medium text-muted-foreground">
						Work in Progress
					</h2>
					<span className="text-xs text-muted-foreground">
						Currently building
					</span>
				</div>
				<div className="flex flex-col gap-2">
					{wipProjects.map((project) => (
						<ProjectInfo key={project.id} {...project} />
					))}
				</div>
			</section>
		</div>
	);
}
