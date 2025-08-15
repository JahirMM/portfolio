import SectionTicker from "@/components/projects/SectionTicke";
import SectionContainer from "@/components/SectionContainer";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/Experience";
import DownloadCV from "@/components/DownloadCV";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";

function App() {
  return (
    <>
      <div className="">
        <SectionContainer customClass="pt-8" id="top">
          <Hero />
        </SectionContainer>
        <SectionTicker label="Experiencia" />
        <SectionContainer customClass="" id="experiencia">
          <DownloadCV />
          <Experience />
        </SectionContainer>
        <SectionTicker label="Mis Proyectos" />
        <SectionContainer customClass="" id="proyectos">
          <Projects />
        </SectionContainer>
        <SectionTicker label="Sobre Mí" />
        <SectionContainer id="sobre-mi">
          <AboutMe />
        </SectionContainer>
      </div>
    </>
  );
}

export default App;
