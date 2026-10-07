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
		title: "Evict-Bench",
		description:
			"C++ benchmark suite for database buffer-pool eviction policies: FIFO, Random, LRU, MRU, CLOCK, LFU, LFU-Aging, LRU-K, 2Q, PostgreSQL-style Clock Sweep, InnoDB midpoint LRU, ARC, LIRS, CLOCK-Pro, CAR, TinyLFU, and DBMIN-style query-aware replacement.",
		link: "https://github.com/Surajsuthar/Evict-Bench",
		tag: "Database",
		github: "https://github.com/Surajsuthar/Evict-Bench",
		tech: ['c++', 'benchmark', 'database'],
	},
	{
		id: 3,
		title: "Storage Engine Components",
		description:
			"Built slotted pages, B-Tree, in-memory data structures (Skip List, Incremental Hash Table, Radix Tree), LSM Tree with MemTable, and performance benchmarks in Rust. ",
		link: null,
		github: "https://github.com/Surajsuthar/database-component-",
		tag: null,
		tech: ["Rust", "B-Tree", "LSM Tree", "MemTable", "Skip List", "Radix Tree"],
	},
	{
		id: 4,
		title: "rsearch",
		description:
			"Local full-text search over a directory tree. Point it at a folder, it builds a BM25-ranked inverted index, and drops you into a vim-style TUI to search it.",
		link: null,
		github: "https://github.com/Surajsuthar/rsearch",
		tag: null,
		tech: ["Rust", "BM25", "Inverted Index", "TUI"],
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
		title: "refDb",
		description:
			"RefDB is an educational distributed sql database project focused on building a small but sophisticated storage engine around a classic Log-Structured Merge Tree (LSM) index. with queey enine and raft consensus algorithm.",
		github: "https://github.com/Surajsuthar/refDb",
		tag: null,
		link: null,
		tech: ["Rust", "SQL"],
	},
	{
		id: 7,
		title: "Record-me",
		description:
			"Developed an open-source screen recording and video messaging platform as an alternative to Loom. Built features for recording, storing, and sharing videos with secure JWT-based authentication, enabling private hosting and full ownership without relying on third-party subscriptions.",
		link: null,
		github: "https://github.com/Surajsuthar/record-me",
		tag: null,
		tech: ["Next.js", "MongoDB", "Clerk", "Prisma", "Electron"],
	},
	{
		id: 8,
		title: "Coding Challenges",
		description:
			"Built a collection of low-level system tools and algorithmic implementations including a custom grep tool, JSON parser, web server, Redis-like server, compression tool (Huffman coding), and CLI utilities. Focused on understanding core computer science concepts, building from scratch, and optimizing for performance and clean design.",
		github: "https://github.com/Surajsuthar/coding-challages",
		link: null,
		tag: "practice",
		tech: ["Python", "Systems Design", "Algorithms", "CLI Tools"],
	},
	{
		id: 9,
		title: "Passion Farms",
		description:
			"Built a scalable full-stack e-commerce platform with real-time inventory tracking and secure payment integration using Stripe. Designed and implemented REST APIs, optimized database queries for product and order management, and delivered a responsive, high-performance user experience using Next.js.",
		link: "https://beta.passionfarms.org",
		github: null,
		tag: "freelance",
		tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
	},
	{
		id: 11,
		title: "Vidara",
		description: "Multi model AI Images and video generation for social media marking, reels short video form",
		link: null,
		github: "https://github.com/Surajsuthar/vidara",
		tag: "WIP",
		tech: ["Next.js", "Python", "FastAPI", "FFmpeg"],
	}
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
			className="pb-2"
		>
			<div className="flex items-start justify-between gap-4">
				<div className="flex items-center gap-2">
					<h3 className="text-sm font-medium">{title}</h3>
					{tag && (
						<span className="text-xs text-muted-foreground">
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
			<p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
			<p className="mt-3 text-xs leading-6 text-muted-foreground">{tech.join(" / ")}</p>
		</div>
	);
}

export default function Projects() {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-8">
				{projects.map((project) => (
					<ProjectInfo key={project.id} {...project} />
				))}
			</div>
		</div>
	);
}
