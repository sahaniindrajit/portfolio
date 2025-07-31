"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconFileInfo,
    IconBrandBlogger,
} from "@tabler/icons-react";

export function FloatDock() {
    const links = [
        {
            title: "Reume",
            icon: (
                <IconFileInfo stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://drive.google.com/file/d/1DTAsrrfTlJaWglK5PHIutfIyu6HgFZ9n/view?usp=sharing",
            target: "_blank",
        },

        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/sahaniindrajit",
        },
        {
            title: "Blog",
            icon: (
                <IconBrandBlogger stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://sahaniindrajit.hashnode.dev/",
        },

        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://linkedin.com/in/indrajitsahani",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/sahani_indrajit",
        },

    ];
    return (
        <div className="flex items-center justify-center h-[10rem] fixed bottom-0 left-0 w-full">
            <FloatingDock
                items={links}
            />
        </div>

    );
}
