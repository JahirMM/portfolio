import Header from "./components/Header";
import SocialLink from "./components/SocialLink";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";
import World from "./icons/World";

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
      <main className="relative z-50">
        <section className="grid grid-cols-3 gap-x-10 mx-auto py-44 lg:w-[740px]">
          <div className="col-start-1 col-end-3">
            <h1 className="text-white text-5xl font-bold pb-10">
              Hola, Soy Jahir
            </h1>
            <h2 className="text-2xl opacity-80 text-wrap">
              Ingeniero en Computación e Informática graduado en la Universidad
              Andrés Bello con un enfoque en el{" "}
              <span className="text-secondaryColour">desarrollo web</span>,
              especializado en el{" "}
              <span className="text-secondaryColour">frontend</span> y en
              constante{" "}
              <span className="text-secondaryColour">
                aprendizaje del backend
              </span>
              .
            </h2>
            <nav className="flex justify-between items-center mt-8 text-sm">
              <div className="flex gap-x-2">
                <SocialLink href="https://www.linkedin.com/in/jahir-machuca-martinez">
                  <LinkedIn className="w-5 h-5" />
                  LinkedIn
                </SocialLink>
                <SocialLink href="https://github.com/JahirMM">
                  <Github className="w-5 h-5" />
                  GitHub
                </SocialLink>
              </div>
              <div className="flex items-center gap-x-2 text-white/60">
                <World className="h-5 w-5" />
                <span>Santiago - chile</span>
              </div>
            </nav>
          </div>
          <div className="bg-secondaryColour col-start-3 col-end-4 relative flex justify-center items-end rounded-[20px]">
            <img
              src="https://th.bing.com/th/id/OIP.5cw3LIrosr-qbOb7iTEb1gHaHa?rs=1&pid=ImgDetMain"
              alt="jahir photo"
              className="w-4/5 h-4/5"
            />
            <div className="absolute top-0 translate-y-[-50%] translate-x-0 p-[2px] px-[10px] rounded-[15px] border-[5px] border-[#010720] bg-red-500 text-[14px]">
              Disponible para trabajar
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
