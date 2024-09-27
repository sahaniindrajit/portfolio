import React from 'react'
import ProjectCard from "@/components/projectCard";
import { useProjectData } from "@/hooks/useProjectData";



function Project() {
    const data = useProjectData;

    return (
        <>
            <div className="relative lg:w-7/12 w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 md:p-20 overflow-x-hidden">
                <main className="flex flex-col gap-8 px-2 row-start-2 items-center md:items-start w-full overflow-hidden">


                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-1 text-sm">
                                My Projects
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Check out all of my work
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Explore all the projects I&apos;ve worked on, from the very beginning to where I am today. Each project represents a step in my journey as a developer.
                            </p>
                        </div>
                    </div>
                    {/* Project Cards */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
                        {data.map((project, idx) => (
                            <ProjectCard
                                key={idx}
                                i={idx}
                                name={project.name}
                                image={project.image}
                                date={project.date}
                                shortDesc={project.shortDesc}
                                tags={project.techStack}
                                Github={project.Github}
                                trending={project.trending}
                                LiveLink={project.LiveLink}
                            />
                        ))}
                    </div>
                </main>

            </div>

        </>

    )
}

export default Project