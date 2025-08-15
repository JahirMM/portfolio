import SectionContainer from "@/components/SectionContainer";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/Experience";
import DownloadCV from "@/components/DownloadCV";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

import BriefCase from "@/icons/BriefCase";
import Code from "@/icons/Code";

function App() {
  return (
    <>
      <div className="">
        <SectionContainer customClass="pt-8 h-screen" id="top">
          <Hero />
        </SectionContainer>
        <SectionContainer customClass="mb-20" id="experiencia">
          <div className="flex flex-col items-start gap-5 mb-20 sm:flex-row sm:items-center">
            <h2 className="flex items-center text-4xl font-bold text-gray-800 gap-x-4 dark:text-white">
              <BriefCase className="size-7" />
              Experiencia
            </h2>
            <DownloadCV />
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
