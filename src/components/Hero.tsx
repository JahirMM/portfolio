import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";
import World from "../icons/World";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="lg:col-start-1 lg:col-end-3">
        <h1 className="text-white text-5xl font-bold pb-10">Hola, Soy Jahir</h1>
        <h2 className="text-xl opacity-80 text-wrap">
          Ingeniero en Computación e Informática graduado en la Universidad
          Andrés Bello con un enfoque en el{" "}
          <span className="text-secondaryColour">desarrollo web</span>,
          especializado en el{" "}
          <span className="text-secondaryColour">frontend</span> y en constante{" "}
          <span className="text-secondaryColour">aprendizaje del backend</span>.
        </h2>
        <div className="flex items-center gap-x-2 mt-8 text-white/60">
          <World className="size-5" />
          <span>Santiago - chile</span>
        </div>
        <nav className="flex gap-4 mt-8 text-sm flex-wrap">
          <SocialLink href="https://www.linkedin.com/in/jahir-machuca-martinez">
            <LinkedIn className="size-5" />
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/JahirMM">
            <Github className="size-5" />
            GitHub
          </SocialLink>
          <SocialLink href="jahirmachuca45@gmail.com">
            <Mail className="size-5" />
            Contáctame
          </SocialLink>
        </nav>
      </div>
      <div className="flex justify-center lg:col-start-3 lg:col-end-4">
        <picture
          className="
          bg-secondaryColour/80 
          relative 
          flex justify-center items-end 
          rounded-[20px] 
          h-[350px] w-[300px]"
        >
          <img
            src="https://th.bing.com/th/id/OIP.5cw3LIrosr-qbOb7iTEb1gHaHa?rs=1&pid=ImgDetMain"
            alt="jahir photo"
            className="size-4/5"
          />
          <div className="absolute top-0 translate-y-[-50%] translate-x-0 p-[2px] px-[10px] rounded-[15px] border-[5px] border-[#010720] bg-gray-700 text-[14px] font-bold">
            Disponible para trabajar
          </div>
        </picture>
      </div>
    </div>
  );
};

export default Hero;
