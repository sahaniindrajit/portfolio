
import React from "react";
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
                    <a className="transition duration-200 flex items-center justify-center space-x-2 text-xl font-medium text-white hover:text-gray-300 border border-gray-600 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                            <span className="text-xs">🗃️</span>
                            <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-500" />
                            <span className="inline-block bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent animate-pulse text-center">
                                View All Projects
                            </span>
                        </div>
                    </a>


                </Link>

            </div>
        </section >
    );
};

export default Projects;