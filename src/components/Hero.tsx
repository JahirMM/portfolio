import { useState } from "react";
import LinkedIn from "../icons/LinkedIn";
import SocialLink from "./SocialLink";
import Github from "../icons/Github";
import Mail from "../icons/Mail";
import Copy from "../icons/Copy";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "jahirmachuca45@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch (err) {
      console.error("Error al copiar el texto: ", err);
    }
  };

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
          <div className="bg-gray-200/50 rounded-full border border-black/20 flex justify-center items-center gap-x-2 py-2 px-4 hover:bg-white/30 dark:hover:bg-white/10 transition dark:border-white/10 dark:bg-white/5">
            <a
              href="mailto:jahirmachuca45@gmail.com"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="size-5" />
            </a>
            <span className="relative">
              <Copy className="size-5 cursor-pointer" onClick={handleCopy} />
              <span
                className={`bg-white/85 text-black text-xs px-2 py-1 rounded-xl absolute transition-opacity duration-500 top-0 translate-y-[-37px] left-[-20px] ${
                  copied ? "opacity-100" : "opacity-0"
                } border border-gray-300`}
              >
                copiado
              </span>
            </span>
            Contáctame
          </div>
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
