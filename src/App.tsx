import SectionContainer from "@/components/SectionContainer";
import Experience from "@/components/Experience";
import Projects from "@/components/projects/Projects";
import DownloadCV from "@/components/DownloadCV";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

import BriefCase from "@/icons/BriefCase";
import Code from "@/icons/Code";

function App() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative z-40">
        <SectionContainer customClass="py-20 md:py-36" id="top">
          <Hero />
        </SectionContainer>
        <SectionContainer customClass="mb-20" id="experiencia">
          <div className="flex flex-col items-start gap-5 mb-20 sm:flex-row sm:items-center">
            <h2 className="flex items-center text-4xl font-bold text-gray-800 gap-x-4 dark:text-white">
              <BriefCase className="size-7" />
              Experiencia
            </h2>
           <DownloadCV/>
          </div>
          <Experience />
        </SectionContainer>
        <SectionContainer customClass="mb-20" id="proyectos">
          <h2 className="flex items-center mb-20 text-4xl font-bold text-gray-800 gap-x-4 dark:text-white">
            <Code className="size-8" />
            Proyectos
          </h2>
          <Projects />
        </SectionContainer>
        <SectionContainer id="sobre-mi">
          <h2 className="flex items-center mb-20 text-4xl font-bold text-gray-800 gap-x-4 dark:text-white">
            <Code className="size-8" />
            Sobre mí
          </h2>
          <AboutMe />
        </SectionContainer>
      </div>
    </>
  );
}

export default App;
