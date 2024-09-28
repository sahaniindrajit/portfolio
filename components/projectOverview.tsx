
import React from "react";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectCard from "./projectCard";
import { useProjectData } from "@/hooks/useProjectData";



// Projects component to list all projects
const Projects = () => {
    const data = useProjectData;

    return (
        <section id="projects">
            <div className="space-y-12 mb-8 w-full pt-12">
                {/* Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-1 text-sm">
                            My Projects
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Check out my latest work
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I&apos;ve worked on a variety of projects, from simple websites to
                            complex web applications. Here are a few of my favorites.
                        </p>
                    </div>
                </div>
                {/* Project Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {data
                        .filter((project) => project.trending)
                        .map((project, idx) => (
                            <ProjectCard
                                key={idx}
                                i={idx}
                                name={project.name}
                                image={project.image}
                                video={project.video}
                                date={project.date}
                                shortDesc={project.shortDesc}
                                tags={project.techStack}
                                Github={project.Github}
                                trending={project.trending}
                                LiveLink={project.LiveLink}
                            />
                        ))}
                </div>

                <Link href="/projects" legacyBehavior>


                    <a className="transition duration-200 flex items-center justify-start space-x-2 text-xl font-medium">

                        <AnimatedGradientText className=" w-fit text-xs">
                            🗃️ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-primary/30" />{" "}
                            <span
                                className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                )}
                            >
                                View All Projects
                            </span>
                        </AnimatedGradientText>

                    </a>
                </Link>

            </div>
        </section >
    );
};

export default Projects;