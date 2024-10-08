

import AboutMe from "@/components/aboutMe";
import Skills from "@/components/skills";
import Projects from "@/components/projectOverview"
import WorkAndEducation from "@/components/workAndEducation";


export default function Home() {
  return (
    <div className="relative lg:w-7/12 w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 md:p-20 overflow-x-hidden">
      <main className="flex flex-col gap-8 px-2 row-start-2 items-center md:items-start w-full overflow-hidden">
        <AboutMe />
        <WorkAndEducation />
        <Skills />
        <Projects />

      </main>
    </div>
  );
}
