// Define the props for the ProjectCard
interface ProjectProps {
    image: string;
    video: string;
    name: string;
    trending: boolean;
    techStack: string[];
    shortDesc: string;
    date: string;
    Github: string;
    LiveLink: string;
}

export const useProjectData: ProjectProps[] = [
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
        image: "https://utfs.io/f/799t8sfip0HkmKlNAN7zMWKcpFxiROB9SmH7Pj063VroGtk1",
        video: "https://utfs.io/f/799t8sfip0Hkmo5W497zMWKcpFxiROB9SmH7Pj063VroGtk1",
        name: "PDF-Talk: AI-Powered PDF Question-Answering Web App",
        trending: true,
        techStack: ["Next.js", "Node.js", "Next-Auth", "MongoDB", "Langchain", "Pinecone", "Hugging Face"],
        shortDesc: "PDF-Talk is a web application that allows users to upload PDF documents and ask questions about their content, leveraging AI for accurate answers.",
        date: "October 2024",
        Github: "https://github.com/sahaniindrajit/Pdf-talk",
        LiveLink: "https://pdf-talk-opal.vercel.app/",
    }, {
        image: "https://utfs.io/f/799t8sfip0HkAlKW1LqFHcp9J3yhxjOTltCYgBZbEdnruPkR",
        video: "https://utfs.io/f/799t8sfip0Hkzml2768gqP6cHd8K1fowuLUZaAXYrCv3xFDI",
        name: "ManageFiasco: A Modern Task Management System with Kanban Board",
        trending: true,
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
        trending: true,
        techStack: ["JavaScript", "Node.js", "React", "Express.js", "Spotify API", "YouTube Data API"],
        shortDesc: "A platform that seamlessly converts Spotify playlists to YouTube playlists, enabling users to easily transfer and enjoy their music across platforms with just a few clicks.",
        date: "August 2024",
        Github: "https://github.com/sahaniindrajit/Spotify-playlist-to-YouTube-Backend",
        LiveLink: "https://sahaniindrajit.hashnode.dev/import-spotify-playlist-to-youtube-account-with-nodejs",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkFNI2TmWvjKuEoX7hU1ZiIMsldc0tDNwBLY4q",
        video: "https://utfs.io/f/799t8sfip0Hk0S1VWAhUnhTQeA4ZF8PUkl1KDxC5m0yzbsvt",
        name: "Toupe Payment [Implementing database transation]",
        trending: false,
        techStack: ["React", "Node.js", "Express", "MongoDB", "Zod"],
        shortDesc: "A secure Toupe Payment system built with React, MongoDB, Zod, Node.js, and Express, implementing reliable database transactions for seamless payment processing.",
        date: "August 2024",
        Github: "https://github.com/sahaniindrajit/Toupe-payment-app-",
        LiveLink: "https://toupe-payment-app.onrender.com/",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkmMmSqZ7zMWKcpFxiROB9SmH7Pj063VroGtk1",
        video: "https://utfs.io/f/799t8sfip0Hk46NIWI9dMPhqbTxercYDVHm62ClfQzvG1ua8",
        name: "Weather website",
        trending: false,
        techStack: ["Javascript", "HTML", "CSS"],
        shortDesc: "A responsive Weather Website built with JavaScript, HTML, and CSS that displays real-time weather updates for any location.",
        date: "May 2024",
        Github: "https://github.com/sahaniindrajit/Task-Manager",
        LiveLink: "https://66c0f34351ea82b7156ba272--nimble-begonia-1ed2b3.netlify.app/",
    },
    {
        image: "https://utfs.io/f/799t8sfip0Hkblat8LmoeE3mUn2v0NDM7KAa5JyCu9kZb1Fs",
        video: "https://utfs.io/f/799t8sfip0HkVretvS6AYgl9LNoIScM8dJrv6ZjQ4qFP5t3a",
        name: "Rock-Paper-scissor",
        trending: false,
        techStack: ["Javascript", "HTML", "CSS"],
        shortDesc: "A Rock-Paper-Scissors game created with JavaScript, HTML, and CSS, where users can play against a bot with real-time results and score tracking.",
        date: "May 2024",
        Github: "https://github.com/sahaniindrajit/Rock-paper-scissor",
        LiveLink: "https://66c0f258c24898d365946c0a--monumental-gumdrop-e6cbda.netlify.app/",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkP2t4pUtCMNs5WypuJKC7TOV2GxZrahnmeUcL",
        video: "https://utfs.io/f/799t8sfip0Hk5XuBx9K7BW6qS4YKdQkjRJ1yzTwiroICp8AG",
        name: "Sticky Notes",
        trending: false,
        techStack: ["Javascript", "HTML", "CSS"],
        shortDesc: "A simple Sticky Notes app created with JavaScript, HTML, and CSS, allowing users to add, edit, and delete notes dynamically.",
        date: "May 2024",
        Github: "https://github.com/sahaniindrajit/sticky-notes",
        LiveLink: "https://master--shimmering-melba-866446.netlify.app/",
    },
    {
        image: "https://utfs.io/f/799t8sfip0HkVwMBuQ6AYgl9LNoIScM8dJrv6ZjQ4qFP5t3a",
        video: "https://utfs.io/f/799t8sfip0Hk7wfIS2ip0HkjJYu92evrTqyfcog5WVQsRCZz",
        name: "Tic-Tac-Toe",
        trending: false,
        techStack: ["Javascript", "HTML", "CSS"],
        shortDesc: "A basic Tic-Tac-Toe game built with JavaScript, HTML, and CSS, featuring a 3x3 grid and two-player functionality.",
        date: "April 2024",
        Github: "https://github.com/sahaniindrajit/Tic-Tac-Toe",
        LiveLink: "https://master--keen-moxie-629d01.netlify.app/",
    },
];