import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react"
import Meteors from "@/components/magicui/meteors";
import { FloatDock } from "@/components/floatDock";
import Contact from "@/components/contact";

// Load Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

// Metadata configuration for Next.js
export const metadata: Metadata = {
  title: "Indrajit Sahani - Web Developer & Software Engineer",
  description:
    "Indrajit sahani's personal portfolio website for showcasing thier achievements like winning Hackathons, freelancing as a Full Stack Web Developer or Professional Experiences and pursuing a Computer science at Guru Gobind Singh Indraprastha University.",
  keywords:
    "Indrajit Sahani, Indrajit,sahani,Indrajit delhi,Indrajit new delhi,Indrajit sahani delhi, full stack developer, full stack web developer, freelance web developer, software engineer, React developer, Next.js developer, AI developer, full stack AI developer, JavaScript developer, TypeScript developer, hackathon winner, freelancing developer,Indrajit sahani delhi,Indrajit odisha, software engineer portfolio, React portfolio, JavaScript portfolio, Guru Gobind Singh Indraprastha University, AI project developer, AI PDF question answering website, web developer India",
  authors: [{ name: "Indrajit Sahani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indrajitsahani.com",
    siteName: "Indrajit Sahani Portfolio",
    title: "Indrajit Sahani - Web Developer & Software Engineer",
    description: "Explore Indrajit Sahani's portfolio featuring his achievements, freelancing as a Full Stack Web Developer, and more.",

  },
  twitter: {
    card: "summary_large_image",
    site: "@sahani_indrajit",
    creator: "@sahani_indrajit",
    title: "Indrajit Sahani - Full Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Indrajit Sahani, a Full Stack Web Developer and Software Engineer with experience in AI development and freelance projects.",


  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",

  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Indrajit Sahani",
              url: "https://indrajitsahani.com",
              sameAs: [
                "https://linkedin.com/in/indrajitsahani",
                "https://github.com/sahaniindrajit",
                "https://x.com/sahani_indrajit",
                "https://sahaniindrajit.hashnode.dev/"
              ],
              jobTitle: "Founder",
              worksFor: {
                "@type": "Organization",

              },
              knowsAbout: [
                "Web Development",
                "React",
                "Nextjs",
                "JavaScript",
                "TypeScript",
                "AI Development",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Guru Gobind Singh Indraprastha University",
              },
              description:
                "I am a passionate Web Developer with a focus on creating innovative digital solutions. With experience in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js, I have a solid foundation in full-stack development. I am also exploring the possibilities of Artificial Intelligence and stay updated on the latest technologies. I enjoy engaging in personal projects and share my knowledge and learning through blog posts and online platforms.",
            }),
          }}
        />
        <link rel="canonical" href="https://indrajitsahani.com" />
      </head>
      <body
        className={`${bricolageGrotesque.className} bg-black antialiased z-50 overflow-x-hidden`}
      >
        <Meteors number={50} />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>

        <FloatDock />
        <Contact />
        <Analytics />
      </body>
    </html>
  );
}