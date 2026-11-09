import React from "react";
import { Badge } from "./ui/badge";

const Skills = () => {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex flex-col gap-y-3">
                    {DATA.groups.map((group) => (
                        <div key={group.title} className="flex flex-col gap-y-2">
                            <h3 className="text-sm font-semibold text-primary/70">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <Badge
                                        className="bg-primary-foreground text-primary hover:bg-secondary hover:shadow-sm"
                                        key={skill}
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

const DATA = {
    groups: [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "WebSocket"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Go", "Hono", "Express", "MongoDB", "PostgreSQL", "Prisma", "Redis"],
        },
        {
            title: "Infra & Observability",
            skills: ["Docker", "Linux & Self-Hosting", "Hetzner / DigitalOcean", "OpenTelemetry", "Grafana", "SigNoz", "Vercel"],
        },
        {
            title: "AI & Automation",
            skills: ["MCP", "AI Agents", "Langchain", "Pinecone", "Playwright"],
        },
    ],
};
