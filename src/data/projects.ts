import TypeScript from "@/icons/TypeScript";
import ExpressJS from "@/icons/ExpressJS";
import Tailwind from "@/icons/Tailwind";
import CSSIcon from "@/icons/CSSIcon";
import MongoDB from "@/icons/MongoDB";
import MtySQL from "@/icons/MtySQL";
import NextJS from "@/icons/NextJS";
import NodeJS from "@/icons/NodeJS";
import ViteJS from "@/icons/ViteJS";
import React from "@/icons/React";
import Html from "@/icons/Html";
import Java from "@/icons/Java";
import SpringBoot from "@/icons/SpringBoot";
import JWT from "@/icons/JWT";
import PostgreSQL from "@/icons/PostgreSQL";

const TECHNOLOGIES = {
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
  JAVA: {
    name: "Java",
    className: "bg-[#462F05] text-white",
    icon: Java,
  },
  SPRINGBOOT: {
    name: "Spring Boot",
    className: "bg-[#0F4B12] text-white",
    icon: SpringBoot,
  },
  JWT: {
    name: "JWT",
    className: "bg-[#470423] text-white",
    icon: JWT,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    className: "bg-[#003159] text-white",
    icon: PostgreSQL,
  },
};

export const PROJECTS = [
  {
    title: "WriteNote ",
    subtitle: "Tu espacio personal para notas",
    description:
      "Aplicación web diseñada para mejorar la gestión personal de notas. Los usuarios pueden crear cuentas, iniciar sesión y gestionar sus notas de manera flexible, con la opción de marcarlas como favoritas para acceder rápidamente a las más importantes. Creado desde cero con Next.js, React (TypeScript) y Tailwind CSS para el frontend, y Node.js con TypeScript y Express para el backend.",
    link: "",
    github: "https://github.com/JahirMM/WriteNotes",
    details: {
      frontend: "/project/WriteNote",
      backend: "/backend-project/writeNoteBackend?nameModule=auth",
    },
    image: "/projects/writeNote/writeNote-main.webp",
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
    title: "Prime Tech",
    subtitle: "Tienda online",
    description:
      "Proyecto backend que permite agregar productos y sus detalles para su venta. Desarrollado utilizando Java con Spring Boot, integra seguridad mediante Spring Security y JWT (JSON Web Tokens) para autenticación y autorización. Utiliza PostgreSQL como base de datos para almacenar y gestionar la información de los productos. La aplicación facilita la gestión de productos, accesibles solo para usuarios autorizados.",
    link: "",
    github: "https://github.com/JahirMM/primeTechBackend",
    details: {
      frontend: "",
      backend: "/backend-project/primeTechBackend?nameModule=auth",
    },
    image: "/projects/primeTech/backend/primeTech-main.webp",
    tags: [
      TECHNOLOGIES.JAVA,
      TECHNOLOGIES.SPRINGBOOT,
      TECHNOLOGIES.JWT,
      TECHNOLOGIES.POSTGRESQL,
    ],
  },
  {
    title: "MemoryGame",
    subtitle: "Un juego de verbos en ingles",
    description:
      "Aplicación web interactiva que ayuda a los usuarios a practicar la conjugación de verbos en inglés. En el juego, los usuarios deben emparejar verbos en presente simple con su correspondiente forma en pasado. Desarrollado utilizando Vite, React y TypeScript, el proyecto ofrece una experiencia educativa entretenida y ágil, diseñada desde cero para mejorar la práctica del inglés de manera divertida.",
    link: "https://menory-game.vercel.app/",
    github: "https://github.com/JahirMM/MemoryGame",
    details: {
      frontend: "",
      backend: "",
    },
    image: "/projects/memoryGame/memoryGame-main.webp",
    tags: [
      TECHNOLOGIES.VITEJS,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.CSS,
    ],
  },
];
