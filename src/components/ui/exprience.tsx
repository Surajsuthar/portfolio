const experiences = [
    {   
        id: 1,
        title: "Associate Backend Engineer",
        company: "Roboto Studio",
        type: "Remote (London)",
        period: "September 2025 - Present",
        description: "I worked extensively with Sanity CMS to develop a programmatic headless CMS. My role involved designing content models, creating custom schemas, writing GROQ queries, and building backend integrations that powered dynamic and scalable applications. Focused on performance, clean architecture, and developer-friendly CMS workflows. Developed and integrated a headless CMS solution using Next.js and Sanity CMS, designing flexible content models and custom schemas for dynamic content delivery without redeployments. Built seamless backend integrations between Next.js and Sanity, enabling real-time content updates across 3+ production applications. Optimized GROQ queries and content-access patterns, reducing content-fetch latency by approximately 35% and improving page-load performance. Contributed and maintained a scalable Next.js + Sanity template (150+ GitHub stars) by building reusable backend workflows and integration, content models, and integration patterns that accelerated project onboarding.",
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
        description: "Designed and maintained RESTful APIs for scalable web applications. Worked with MongoDB and SQL databases for efficient data management. Integrated third-party APIs to expand application capabilities. Developed and maintained scalable RESTful APIs using Node.js and Express with Typescipt, powering high-traffic client applications with 99.9% uptime. Authored comprehensive REST API documentation with Swagger and Postman, enabling seamless integration for frontend teams and reducing onboarding time.Designed database schemas and optimized queries in MySQL, implementing indexing strategies and Redis caching that improved data retrieval performance by up to 30%. Third-party booking APIs integration, managing end-to-end communication, request/response mapping, provider- specific data formats, and complete booking workflows.",
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
