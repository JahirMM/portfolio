import { useState } from "react";

import LinkedIn from "@/icons/LinkedIn";
import Github from "@/icons/Github";
import Copy from "@/icons/Copy";
import Mail from "@/icons/Mail";

import SocialLink from "@/components/SocialLink";

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
        <h1 className="pb-10 text-5xl font-bold text-gray-800 text-pretty dark:text-white introSection">
          ¡Hola! Soy Jahir Machuca
        </h1>
        <h2 className="text-xl text-black dark:opacity-80 text-pretty dark:text-white introSection">
          <span className="font-bold text-secondaryColorLightTheme">
            Ingeniero en Computación e Informática
          </span>{" "}
          que convierte ideas en código (sin café). Me gusta el{" "}
          <span className="font-bold text-secondaryColorLightTheme">
            desarrollo web
          </span>{" "}
          y siempre estoy probando{" "}
          <span className="font-bold text-secondaryColorLightTheme">
            nuevas ideas
          </span>
          .
        </h2>
        <nav className="flex flex-wrap gap-4 mt-8 text-sm text-black dark:text-white">
          <SocialLink
            href="https://www.linkedin.com/in/jahir-machuca-martinez"
            ariaLabel="Perfil de LinkedIn de Jahir Machuca"
          >
            <LinkedIn className="size-5" />
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com/JahirMM"
            ariaLabel="Perfil de GitHub de Jahir Machuca"
          >
            <Github className="size-5" />
            GitHub
          </SocialLink>
          <div className="flex items-center justify-center px-4 py-2 transition border rounded-full bg-gray-200/50 border-black/20 gap-x-4 dark:border-white/10 dark:bg-white/5 contact">
            <a
              href="mailto:jahirmachuca45@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar un correo a Jahir Machuca"
            >
              <Mail className="size-5" />
            </a>
            <a
              href="mailto:jahirmachuca45@gmail.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar un correo a Jahir Machuca"
            >
              jahirmachuca45@gmail.com
            </a>
            <span className="relative">
              <Copy
                className="cursor-pointer size-5 hover:text-gray-600 dark:hover:text-gray-300"
                onClick={handleCopy}
                aria-label="Copiar correo electrónico"
              />
              <span
                className={`bg-white/85 text-black text-xs px-2 py-1 rounded-xl absolute transition-opacity duration-500 top-0 translate-y-[-37px] left-[-20px] ${
                  copied ? "opacity-100" : "opacity-0"
                } border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600`}
              >
                ¡Copiado!
              </span>
            </span>
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
          <img
            src="/jahir.webp"
            alt="Jahir Machuca"
            className="size-[91%] introSection"
          />

          <div className="text-gray-800 absolute top-0 -translate-y-[50%] translate-x-0 p-[5px] px-[10px] rounded-[15px] border-[5px] border-primaryColorLightTheme bg-gradient-to-r from-[#D8CCBC] to-[#BEAF9B] text-[14px] font-bold dark:text-white dark:border-[#010720] dark:from-[#212963] dark:to-[#101B49] workAvailable">
            Disponible para trabajar
            <span className="absolute top-0 translate-y-[-4px]">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full bg-blue-500 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-3 h-3 bg-blue-700 rounded-full"></span>
              </span>
            </span>
          </div>
        </picture>
      </div>
    </div>
  );
};

export default Hero;
