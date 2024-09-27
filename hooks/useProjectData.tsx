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

export const useProjectData: ProjectProps[] = [
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