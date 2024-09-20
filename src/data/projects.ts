import CSSIcon from "../icons/CSSIcon";
import ExpressJS from "../icons/ExpressJS";
import Html from "../icons/Html";
import MongoDB from "../icons/MongoDB";
import MtySQL from "../icons/MtySQL";
import NextJS from "../icons/NextJS";
import NodeJS from "../icons/NodeJS";
import React from "../icons/React";
import Tailwind from "../icons/Tailwind";
import TypeScript from "../icons/TypeScript";
import ViteJS from "../icons/ViteJS";

export const TECHNOLOGIES = {
  NEXT: {
    name: "Next.js",
    className: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    className: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  TYPESCRIP: {
    name: "TypeScript",
    className: "bg-[#134C8B] text-white",
    icon: TypeScript,
  },
  NODEJS: {
    name: "Node.JS",
    className: "bg-[#0A2E0C] text-white",
    icon: NodeJS,
  },
  MYSQL: {
    name: "MySQL",
    className: "bg-[#0D2C34] text-white",
    icon: MtySQL,
  },
  EXPRESSJS: {
    name: "Express.js",
    className: "bg-[#334155] text-white",
    icon: ExpressJS,
  },
  VITEJS: {
    name: "Vite.js",
    className: "bg-[#3D3811] text-white",
    icon: ViteJS,
  },
  REACT: {
    name: "React",
    className: "bg-[#003159] text-white",
    icon: React,
  },
  CSS: {
    name: "CSS",
    className: "bg-[#003159] text-white",
    icon: CSSIcon,
  },
  HTML: {
    name: "HTML",
    className: "bg-[#3D2B11] text-white",
    icon: Html,
  },
  MONGODB: {
    name: "MongoDB",
    className: "bg-[#0F4B12] text-white",
    icon: MongoDB,
  },
};
export const PROJECTS = [
  {
    title: "WriteNote ",
    subtitle: "Tu espacio personal para notas",
    description:
      "Aplicación web diseñada para mejorar la gestión personal de notas. Los usuarios pueden crear cuentas, iniciar sesión y gestionar sus notas de manera flexible, con la opción de marcarlas como favoritas para acceder rápidamente a las más importantes. Creado desde cero con Next.js, React (TypeScript) y Tailwind CSS para el frontend, y Node.js con TypeScript y Express para el backend.",
    github: "https://github.com/JahirMM/WriteNotes",
    image: "/projects/writeNote.webp",
    tags: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.NODEJS,
      TECHNOLOGIES.MONGODB,
      TECHNOLOGIES.EXPRESSJS,
    ],
    darkModeImage: "",
    lightModeImage: "",
  },
  {
    title: "MemoryGame",
    subtitle: "Un juego de verbos en ingles",
    description:
      "Aplicación web interactiva que ayuda a los usuarios a practicar la conjugación de verbos en inglés. En el juego, los usuarios deben emparejar verbos en presente simple con su correspondiente forma en pasado. Desarrollado utilizando Vite, React y TypeScript, el proyecto ofrece una experiencia educativa entretenida y ágil, diseñada desde cero para mejorar la práctica del inglés de manera divertida.",
    link: "https://menory-game.vercel.app/",
    github: "https://github.com/JahirMM/MemoryGame",
    image: "/projects/memoryGame.webp",
    tags: [
      TECHNOLOGIES.VITEJS,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.CSS,
    ],
  },
];
