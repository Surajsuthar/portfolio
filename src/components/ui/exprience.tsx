const experiences = [
    {   
        id: 1,
        title: "Associate Backend Engineer",
        company: "Roboto Studio",
        type: "Remote (London)",
        period: "September 2025 - Present",
        description: "I worked extensively with Sanity CMS to develop a programmatic headless CMS. My role involved designing content models, creating custom schemas, writing GROQ queries, and building backend integrations that powered dynamic and scalable applications. Focused on performance, clean architecture, and developer-friendly CMS workflows.",
        tech: ["Next.js", "Sanity", "CMS", "REST APIs", "PostgreSQL", "VERCEL"]
    },
    {
        id: 2,
        title: "Freelance E-commerce Developer",
        company: "Freelance",
        type: "Remote",
        period: "May 2025 - August 2025",
        description: "Developed modern e-commerce solutions using cutting-edge technologies. Built scalable web applications with focus on performance, user experience, and seamless payment integrations. Delivered end-to-end solutions from design to deployment.",
        tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Stripe", "PostgreSQL", "Prisma ORM","Tailwind CSS","AWS"]
    },
    {
        id: 3,
        title: "Backend Developer",
        company: "Techno Softwares Jaipur",
        type: "on-site",
        period: "Oct 2024 - May 2025",
        description: "Designed and maintained RESTful APIs for scalable web applications. Worked with MongoDB and SQL databases for efficient data management. Integrated third-party APIs to expand application capabilities.",
        tech: ["Node.js", "MongoDB", "MYSQL", "REST APIs", "Sequelize ORM"]
    }
]

export function Experience() {
    return (
        <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
                <div
                    key={exp.id}
                    className="pb-2"
                >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h3 className="text-sm font-medium">{exp.title}</h3>
                            <p className="text-muted-foreground text-sm">
                                {exp.company} · {exp.type}
                            </p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {exp.period}
                        </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {exp.description}
                    </p>
                    <p className="mt-3 text-xs leading-6 text-muted-foreground">{exp.tech.join(" / ")}</p>
                </div>
            ))}
        </div>
    )
}
