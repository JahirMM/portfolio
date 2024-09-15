import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="lg:col-start-1 lg:col-end-3">
        <h1 className="text-white text-5xl font-bold pb-10 text-pretty">
          Hola, Soy Jahir Machuca
        </h1>
        <h2 className="text-xl opacity-80 text-wrap">
          Ingeniero en Computación e Informática con un enfoque en el{" "}
          <span className="text-secondaryColour">desarrollo web</span>,
          especializado en el{" "}
          <span className="text-secondaryColour">frontend</span> y en constante{" "}
          <span className="text-secondaryColour">aprendizaje del backend</span>.
        </h2>
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
          bg-photoColor
          relative 
          flex justify-center items-end 
          rounded-[20px] 
          h-[350px] w-[300px]
          after:content-['']
          after:w-[7px] after:h-[7px]
          after:absolute after:top-0 after:left-[47.5px]
          after:bg-photoColor after:shadow-[1.4px_-1.4px_#03081d]
          after:rounded-tr-[5px]
          before:content-[''] 
          before:w-[7px] before:h-[7px]
          before:absolute before:top-0 before:right-[47.6px]
          before:bg-photoColor before:shadow-[-1.4px_-1.4px_#03081d]
          before:rounded-tl-[5px] 
          before:z-[10]
          "
        >
          <img
            src="https://th.bing.com/th/id/OIP.5cw3LIrosr-qbOb7iTEb1gHaHa?rs=1&pid=ImgDetMain"
            alt="jahir photo"
            className="size-4/5"
          />
          <div className="absolute top-0 translate-y-[-50%] translate-x-0 p-[5px] px-[10px] rounded-[15px] border-[5px] border-[#010720] bg-gradient-to-r from-[#212963] to-[#101B49] text-[14px] font-bold">
            Disponible para trabajar
            <span className="absolute top-0 translate-y-[-4px]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#001FFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#354BE9]"></span>
              </span>
            </span>
          </div>
        </picture>
      </div>
    </div>
  );
};

export default Hero;
