import Header from "./components/Header";
import SectionContainer from "./components/SectionContainer";
import Hero from "./components/Hero";
import BriefCase from "./icons/BriefCase";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* cuadrillas por defecto */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* cuadrillas con mi color*/}
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[#010720] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
      {/* degradado en la parte de arriba*/}
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      {/* degradado en la parte de arriba pero con mi color */}
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#010720] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

      <Header />
      <main className="relative z-40">
        <SectionContainer customClass="py-20 md:py-36">
          <Hero />
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-4xl font-bold mb-20 flex items-center gap-x-2">
            <BriefCase className="size-7" />
            Experiencia
          </h2>
          <Experience />
        </SectionContainer>
        <SectionContainer>
          <h2 className="text-4xl font-bold mb-20 flex items-center gap-x-2">
            <BriefCase className="size-7" />
            Experiencia
          </h2>
          <div>contenido</div>
        </SectionContainer>
      </main>
    </>
  );
}

export default App;
