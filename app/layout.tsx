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
  title: "Indrajit Sahani - Full-Stack Engineer",
  description:
    "Indrajit Sahani is a full-stack engineer at Enrich Labs who owns Sendkit end to end: product engineering, infrastructure, observability, email deliverability, and AI integrations. B.Tech IT at Guru Gobind Singh Indraprastha University.",
  keywords:
    "Indrajit Sahani, Indrajit,sahani,Indrajit delhi,Inderjeet sahani,Indrajeet sahani,Inderjit sahani, Indrajit new delhi,Indrajit sahani delhi, full stack developer, full stack web developer, freelance web developer, software engineer, React developer, Next.js developer, full stack AI developer, JavaScript developer, TypeScript developer, hackathon winner, freelancing developer,Indrajit sahani delhi,Indrajit odisha, software engineer portfolio, React portfolio, Guru Gobind Singh Indraprastha University, web developer India",
  authors: [{ name: "Indrajit Sahani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://indrajitsahani.com",
    siteName: "Indrajit Sahani Portfolio",
    title: "Indrajit Sahani - Full-Stack Engineer",
    description: "Full-stack engineer building and running production systems: infra, observability, email deliverability, and AI tooling.",

  },
  twitter: {
    card: "summary_large_image",
    site: "@sahani_indrajit",
    creator: "@sahani_indrajit",
    title: "Indrajit Sahani - Full-Stack Engineer",
    description:
      "Full-stack engineer building and running production systems: infra, observability, email deliverability, and AI tooling.",


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
              jobTitle: "Full-Stack Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Enrich Labs",
                url: "https://www.enrich.so/",
              },
              knowsAbout: [
                "Web Development",
                "React",
                "Nextjs",
                "JavaScript",
                "TypeScript",
                "AI Development",
                "Go",
                "Node.js",
                "Infrastructure",
                "Observability",
                "Email Deliverability",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Guru Gobind Singh Indraprastha University",
              },
              description:
                "Full-stack engineer at Enrich Labs, owning Sendkit end to end across product engineering, infrastructure, observability, email deliverability, and AI integrations (CLI and MCP). Works with TypeScript, Node.js, Go, Next.js, MongoDB, PostgreSQL, Redis, Docker, and OpenTelemetry.",
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