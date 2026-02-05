import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Dev Notify",
        description: "Web application that helps developers stay updated on issues from their starred GitHub repositories.",
        link: "https://devnotify.in",
        github: "https://github.com/Surajsuthar/dev-notify",
        tech: ["Next.js", "TypeScript", "GitHub API", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "Passion Farms",
        description: "Modern e-commerce platform for a cannabis brand with real-time inventory and secure checkout.",
        link: "https://beta.passionfarms.org",
        github: null,
        tag: "freelance",
        tech: ["Next.js", "Node.js", "MongoDB", "Stripe"]
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
        id: 4,
        title: "Appoint",
        description: "Appointment booking system with real-time scheduling, smart reminders, and calendar integration.",
        link: null,
        github: "https://github.com/Surajsuthar/appoint",
        tech: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
        id: 5,
        title: "Record-me",
        description: "Platform for users to share insightful content, fostering a community of engaged writers and readers.",
        link: null,
        github: "https://github.com/Surajsuthar/record-me",
        tech: ["React", "Express", "MongoDB", "JWT"]
    },
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
