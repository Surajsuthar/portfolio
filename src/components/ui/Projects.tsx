import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Dev Notify",
        description: "Build a web application that helps developers stay updated on issues from their starred repositories on GitHub. The platform should aggregate and track issue activity in real time, providing notifications and a centralized dashboard to improve developer productivity and awareness.",
        link: "https://devnotify.in",
        github: "https://github.com/Surajsuthar/dev-notify",
        tech: ["Next.js", "TypeScript", "GitHub API", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Passion Farms",
        description: "Built a scalable full-stack e-commerce platform with real-time inventory tracking and secure payment integration using Stripe. Designed and implemented REST APIs, optimized database queries for product and order management, and delivered a responsive, high-performance user experience using Next.js.",
        link: "https://beta.passionfarms.org",
        github: null,
        tag: "freelance",
        tech: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 5,
      title: "Video Transcoder",
      description: "Build a video transcoding service with real-time encoding and streaming capabilities. The system should support transcoding into 480p, 720p, 1080p, and 4K resolutions, with all jobs handled asynchronously to ensure a smooth and responsive user experience.",
      github: "https://github.com/Surajsuthar/video-transcoder",
      link: null,
      tech: ["Python", "FastAPI", "Celery", "Redis", "FFmpeg", "Minio"]
    },
    {
        id: 5,
        title: "Record-me",
        description: "Developed an open-source screen recording and video messaging platform as an alternative to Loom. Built features for recording, storing, and sharing videos with secure JWT-based authentication, enabling private hosting and full ownership without relying on third-party subscriptions.",
        link: null,
        github: "https://github.com/Surajsuthar/record-me",
        tech: ["Next.js", "MongoDB", "Clerk", "Prisma", "Electron"]
    },
    {
        id: 3,
        title: "Handle-it",
        description: "AI-powered content creation platform that generates posts and publishes them across social media accounts.",
        link: null,
        github: "https://github.com/Surajsuthar/handle-it",
        tech: ["Next.js", "OpenAI", "Node.js", "PostgreSQL"]
    },
    {
        id: 7,
        title: "Coding Challenges",
        description: "Built a collection of low-level system tools and algorithmic implementations including a custom grep tool, JSON parser, web server, Redis-like server, compression tool (Huffman coding), and CLI utilities. Focused on understanding core computer science concepts, building from scratch, and optimizing for performance and clean design.",
        github: "https://github.com/Surajsuthar/coding-challages",
        link: null,
        tag: "practice",
        tech: ["Python", "Systems Design", "Algorithms", "CLI Tools"]
    }
]

export default function Projects() {
    return (
        <div className="flex flex-col gap-2">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group p-4 -mx-4 rounded-lg hover:bg-muted/50 transition-all duration-200 hover:translate-x-1"
                >
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{project.title}</h3>
                            {project.tag && (
                                <span className="text-xs px-2 py-0.5 bg-muted rounded-md text-muted-foreground">
                                    {project.tag}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label="View on GitHub"
                                >
                                    <Github className="h-4 w-4" />
                                </a>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
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
                    <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                        {project.tech.join(" / ")}
                    </p>
                </div>
            ))}
        </div>
    )
}
