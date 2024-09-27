import { Code, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedGradientText from "./magicui/animated-gradient-text";
import { cn } from "@/lib/utils";


// ProjectCard component to display individual project details
export default function ProjectCard({
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

