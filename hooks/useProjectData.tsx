// Define the props for the ProjectCard
interface ProjectProps {
    image?: string;
    video?: string;
    name: string;
    trending: boolean;
    techStack: string[];
    shortDesc: string;
    date: string;
    Github?: string;
    LiveLink?: string;
}

export const useProjectData: ProjectProps[] = [
    {
        name: "Sendkit CLI: Command-Line Client for Sendkit",
        trending: true,
        techStack: ["TypeScript", "Node.js", "CLI", "REST API", "npm"],
        shortDesc: "Co-maintainer of @sendkit-ai/cli, the official command-line client for Sendkit. Lets users and AI agents manage campaigns, mailboxes, and leads straight from the terminal.",
        date: "2026",
        LiveLink: "https://www.npmjs.com/package/@sendkit-ai/cli",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkYs7sIkZdc2RHv1Ka0miDQE3pg9ZMh4VJwC5l",
        video: "https://utfs.io/f/799t8sfip0HkKLdv68siMOmqvkaoXpjZVHRFfTB3gChYr76t",
        name: "SketchSync: Real-Time Collaborative Whiteboard",
        trending: true,
        techStack: ["React.js", "Node.js", "React-Konva", "Web socket", "Express.js"],
        shortDesc: "SketchSync - A dynamic and intuitive whiteboard collaboration app that lets teams sketch, brainstorm, and share ideas in real time. Designed for creativity and seamless syncing, SketchSync enhances productivity with smooth drawing tools and live collaboration features.",
        date: "December 2024",
        Github: "https://github.com/sahaniindrajit/sketchsync",
        LiveLink: "https://sketchsync.onrender.com",
    },
    {
        name: "NotionLedger: Telegram Expense Tracker",
        trending: true,
        techStack: ["Go", "Telegram Bot API", "Notion API", "Docker"],
        shortDesc: "A personal Telegram bot written in Go for logging expenses, with Notion as the database. Supports automatic category matching, weekly and monthly summaries, pie charts, and editing recent entries.",
        date: "October 2026",
        Github: "https://github.com/sahaniindrajit/NotionLeager",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkmKlNAN7zMWKcpFxiROB9SmH7Pj063VroGtk1",
        video: "https://utfs.io/f/799t8sfip0Hkmo5W497zMWKcpFxiROB9SmH7Pj063VroGtk1",
        name: "PDF-Talk: AI-Powered PDF Question-Answering Web App",
        trending: true,
        techStack: ["Next.js", "Node.js", "Next-Auth", "MongoDB", "Langchain", "Pinecone", "Hugging Face"],
        shortDesc: "PDF-Talk is a web application that allows users to upload PDF documents and ask questions about their content, leveraging AI for accurate answers.",
        date: "October 2024",
        Github: "https://github.com/sahaniindrajit/Pdf-talk",
        LiveLink: "https://pdf-talk-opal.vercel.app/",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkAlKW1LqFHcp9J3yhxjOTltCYgBZbEdnruPkR",
        video: "https://utfs.io/f/799t8sfip0Hkzml2768gqP6cHd8K1fowuLUZaAXYrCv3xFDI",
        name: "ManageFiasco: A Modern Task Management System with Kanban Board",
        trending: false,
        techStack: ["Next.js", "Node.js", "Prisma", "Zod", "Express", "MongoDB", "Shadcn UI", "Recoil"],
        shortDesc: "ManageFiasco is a modern task management system featuring a Kanban board for efficient task organization and progress tracking.",
        date: "September 2024",
        Github: "https://github.com/sahaniindrajit/Task-Manager",
        LiveLink: "https://managefiasco.vercel.app/",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkPYGYFCMNs5WypuJKC7TOV2GxZrahnmeUcLqw",
        video: "https://utfs.io/f/799t8sfip0HkKP91LIsiMOmqvkaoXpjZVHRFfTB3gChYr76t",
        name: "Spotify playlist to YouTube Playlist Converter",
        trending: false,
        techStack: ["JavaScript", "Node.js", "React", "Express.js", "Spotify API", "YouTube Data API"],
        shortDesc: "A platform that seamlessly converts Spotify playlists to YouTube playlists, enabling users to easily transfer and enjoy their music across platforms with just a few clicks.",
        date: "August 2024",
        Github: "https://github.com/sahaniindrajit/Spotify-playlist-to-YouTube-Backend",
        LiveLink: "https://sahaniindrajit.hashnode.dev/import-spotify-playlist-to-youtube-account-with-nodejs",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkFNI2TmWvjKuEoX7hU1ZiIMsldc0tDNwBLY4q",
        video: "https://utfs.io/f/799t8sfip0Hk0S1VWAhUnhTQeA4ZF8PUkl1KDxC5m0yzbsvt",
        name: "Toupe Payment [Implementing database transactions]",
        trending: false,
        techStack: ["React", "Node.js", "Express", "MongoDB", "Zod"],
        shortDesc: "A secure Toupe Payment system built with React, MongoDB, Zod, Node.js, and Express, implementing reliable database transactions for seamless payment processing.",
        date: "August 2024",
        Github: "https://github.com/sahaniindrajit/Toupe-payment-app-",
        LiveLink: "https://toupe-payment-app.onrender.com/",
    },
];
