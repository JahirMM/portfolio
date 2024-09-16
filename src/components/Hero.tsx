import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";
import Mail from "../icons/Mail";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="lg:col-start-1 lg:col-end-3">
        <h1 className="text-gray-800 text-5xl font-bold pb-10 text-pretty dark:text-white">
          Hola, Soy Jahir Machuca
        </h1>
        <h2 className="text-black text-xl text-wrap dark:opacity-80 dark:text-white">
          Ingeniero en Computación e Informática con un enfoque en el{" "}
          <span className="text-secondaryColorLightTheme font-bold">
            desarrollo web
          </span>
          , especializado en el{" "}
          <span className="text-secondaryColorLightTheme font-bold">
            frontend
          </span>{" "}
          y en constante{" "}
          <span className="text-secondaryColorLightTheme font-bold">
            aprendizaje del backend
          </span>
          .
        </h2>
        <nav className="flex gap-4 mt-8 text-sm flex-wrap text-black dark:text-white">
          <SocialLink href="https://www.linkedin.com/in/jahir-machuca-martinez">
            <LinkedIn className="size-5" />
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/JahirMM">
            <Github className="size-5" />
            GitHub
          </SocialLink>
          <SocialLink href="mailto:jahirmachuca45@gmail.com">
            <Mail className="size-5" />
            Contáctame
          </SocialLink>
        </nav>
      </div>
      <div className="flex justify-center lg:col-start-3 lg:col-end-4">
        <picture
          className="
          bg-photoColorLightTheme
          relative 
          flex justify-center items-end 
          rounded-[20px] 
          h-[350px] w-[300px]
          dark:bg-photoColorDarkTheme
          "
        >
          <img src="/jahir.webp" alt="jahir photo" className="size-11/12" />
          <div className="text-gray-800 absolute top-0 -translate-y-[50%] translate-x-0 p-[5px] px-[10px] rounded-[15px] border-[5px] border-primaryColorLightTheme bg-gradient-to-r from-[#D8CCBC] to-[#BEAF9B] text-[14px] font-bold dark:text-white dark:border-[#010720] dark:from-[#212963] dark:to-[#101B49]">
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
