import { useState } from "react";

import LinkedIn from "@/icons/LinkedIn";
import Github from "@/icons/Github";
import Copy from "@/icons/Copy";
import Mail from "@/icons/Mail";

import SocialLink from "@/components/SocialLink";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "j.machuca912@gmail.com";

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
    <>
      {/* BOTÓN DISPONIBLE */}
      <div className="relative z-[998] flex justify-start p-0 m-0 mb-5 cursor-pointer">
        <a
          href="mailto:j.machuca912@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar un correo a Jahir Machuca"
          className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 border border-black rounded-xl"
        >
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Disponible
        </a>
      </div>

      {/* TÍTULO PRINCIPAL */}
      <div className="mb-10">
        <h1 className="font-black leading-none tracking-tight text-center md:text-start">
          <span className="text-5xl text-gray-900 sm:text-8xl md:text-9xl text-response">
            HOLA, SOY
          </span>
        </h1>
        <h2
          className="mt-3 text-5xl font-black leading-none tracking-tight text-center text-transparent stroke-2 sm:mt-0 sm:text-8xl md:text-9xl md:text-start text-response"
          style={{ WebkitTextStroke: "2px #808080" }}
        >
          JAHIR MACHUCA
        </h2>
      </div>

      {/* IMAGEN Y PEQUEÑA DESCRIPCIÓN */}
      <div className="grid items-center gap-16 md:grid-cols-2">
        <div className="w-4/5 mx-auto sm:w-80 sm:h-80">
          <img
            src="/public/jahir.webp"
            alt="Jahir Machuca"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-bold text-secondaryColorLightTheme">
              Ingeniero en Computación e Informática
            </span>{" "}
            que convierte ideas en código. Me gusta el{" "}
            <span className="font-bold text-secondaryColorLightTheme">
              desarrollo web
            </span>{" "}
            y siempre estoy probando{" "}
            <span className="font-bold text-secondaryColorLightTheme">
              nuevas ideas
            </span>
            .
          </p>

          {/* LINKS */}
          <nav className="flex flex-wrap gap-4">
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
            <div className="flex items-center justify-center px-4 py-2 transition bg-gray-200 border border-black rounded-full gap-x-4 dark:border-white/10 dark:bg-white/5 contact">
              <a
                href="mailto:j.machuca912@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar un correo a Jahir Machuca"
              >
                <Mail className="text-black size-5" />
              </a>
              <a
                href="mailto:j.machuca912@gmail.com"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar un correo a Jahir Machuca"
              >
                j.machuca912@gmail.com
              </a>
              <span className="relative">
                <Copy
                  className="text-black cursor-pointer size-5 hover:text-gray-600 dark:hover:text-gray-300"
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
      </div>
    </>
  );
};

export default Hero;
