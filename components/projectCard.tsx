import { Code, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Define the props for the ProjectCard
interface ProjectProps {
    image: string;
    name: string;
    trending: boolean;
    techStack: string[];
    shortDesc: string;
    date: string;
    Github: string;
    LiveLink: string;
}

// ProjectCard component to display individual project details
function ProjectCard({
    i,
    name,
    image,
    date,
    shortDesc,
    tags,
    Github,
    trending,
    LiveLink,
}: {
    i: number;
    name: string;
    image: string;
    date: string;
    shortDesc: string;
    tags: string[];
    Github: string;
    trending: boolean;
    LiveLink: string;
}) {
    return (
        <>
            <div className="max-w-sm mb-10 hover:shadow-md flex flex-col justify-between mx-auto border border-primary/10 duration-100 rounded-md py-4 px-3">
                <div>
                    <div>
                        <Image
                            width={900}
                            height={900}
                            className="rounded-lg"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start">
                        {trending && (
                            <AnimatedGradientText className="mt-3 w-fit text-xs">
                                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-primary/30" />{" "}
                                <span
                                    className={cn(
                                        `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                                    )}
                                >
                                    #{++i} Trending
                                </span>
                            </AnimatedGradientText>
                        )}
                        <div className="font-semibold text-sm mt-2 ">{name}.</div>
                    </div>
                    <div className="text-xs text-primary/70 mb-2 mt-1">{date}</div>
                    <div className="text-xs text-primary/70">
                        <div>{shortDesc}</div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap gap-2 my-4">
                        {tags.map((e: string) => {
                            return (
                                <div
                                    key={e}
                                    className="text-xs text-primary rounded-md bg-secondary px-2 py-1"
                                >
                                    {e}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-2">
                        <Link target="_blank" className="flex gap-2" href={LiveLink}>
                            <div className="bg-secondary hover:bg-secondary/80 flex gap-2 items-center  text-primary w-fit px-3 py-1.5  rounded-md  text-xs">
                                {" "}
                                <Globe size={16} /> Website
                            </div>
                        </Link>

                        <Link target="_blank" className="flex gap-2" href={Github}>
                            <div className="bg-secondary hover:bg-secondary/80 flex gap-2 items-center  text-primary w-fit px-3 py-1.5  rounded-md  text-xs">
                                {" "}
                                <Code size={16} />
                                Code
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

// Projects component to list all projects
const Projects = () => {
    const data: ProjectProps[] = [
        {
            image:
                "https://utfs.io/f/799t8sfip0HkeA0VvRwDaSMPvRwsdh5IzCNoKf4TBqZl03V8",
            name: "ManageFiasco : A Modern Task Management System with Kanban Board",
            trending: true,
            techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Shadcn UI", "Recoil"],
            shortDesc:
                "ManageFiasco is a modern task management system featuring a Kanban board for efficient task organization and progress tracking.",
            date: "September 2024",
            Github: "https://github.com/sahaniindrajit/Task-Manager",
            LiveLink: "https://managefiasco.vercel.app/",
        },
        {
            image: "https://utfs.io/f/799t8sfip0HkeA0VvRwDaSMPvRwsdh5IzCNoKf4TBqZl03V8",
            name: "Spotify playlist to YouTube Playlist Converter",
            trending: true,
            techStack: ["JavaScript", "Node.js", "React", "Express.js", "Spotify API", "YouTube Data API"],
            shortDesc:
                "A platform that seamlessly converts Spotify playlists to YouTube playlists,enabling users to easily transfer and enjoy their music across platforms with just a few clicks.",
            date: "August 2024",
            Github: "https://github.com/sahaniindrajit/Spotify-playlist-to-YouTube-Backend",
            LiveLink: "https://sahaniindrajit.hashnode.dev/import-spotify-playlist-to-youtube-account-with-nodejs",
        },

    ];

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