import TypeScript from "@/icons/TypeScript";
import SpringBoot from "@/icons/SpringBoot";
import PostgreSQL from "@/icons/PostgreSQL";
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
import JWT from "@/icons/JWT";
import TanStack from "@/icons/TanStack";
import Supabase from "@/icons/Supabase";
import { Shadcnui } from "@/icons/Shadcn";

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
  TANSTACK: {
    name: "TanStack",
    className: "bg-[#74361B] text-white",
    icon: TanStack,
  },
  SUPABASE: {
    name: "Supabase",
    className: "bg-[#07381D] text-white",
    icon: Supabase,
  },
  SHADCN: {
    name: "shadcn/ui",
    className: "bg-[#1E1E2E] text-white",
    icon: Shadcnui,
  },
};

export const PROJECTS = [
  {
    title: "Impekble",
    subtitle: "Software de servicios de limpieza",
    description:
      "Impekable es un software que permite automatizar procesos de limpieza, mantenimiento, servicio de lavanderías, entre otras cosas. Cuenta con múltiples funcionalidades para la gestión de tareas, como la asignación de actividades, el monitoreo, el registro de evidencias en tiempo real y el control de calidad mediante inspecciones. Con esto permite conectar múltiples actores como operarios, inspectores, conductores y administradores. Proyecto desarrollado en conjunto con el equipo del área de desarrollo, diseño, audiovisual y marketing.",
    link: "https://www.impekble.com/",
    githubLinks: [],
    details: {
      frontend: "",
      backend: "",
    },
    image: "/projects/impekble/impekble-main.webp",
    tags: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.SHADCN,
    ],
  },
  {
    title: "TaskPlatform",
    subtitle: "Organiza tus proyectos de forma colaborativa",
    description:
      "TaskPlatform es una plataforma web para gestionar proyectos de forma colaborativa y en tiempo real. Permite iniciar sesión con GitHub, crear proyectos con columnas y tareas reorganizables, asignar prioridades, añadir descripciones y gestionar comentarios. Los dueños pueden invitar a otros usuarios y trabajar con notificaciones instantáneas. Desarrollada con Next.js, React, TypeScript, TailwindCSS, TanStack Query y Supabase para almacenamiento, sincronización y autenticación.",
    link: "https://taskplatform-six.vercel.app/",
    githubLinks: [
      {
        link: "https://github.com/JahirMM/TaskPlatform",
        label: "Code",
      },
    ],
    details: {
      frontend: "",
      backend: "",
    },
    image: "/projects/taskPlatform/taskPlatform-main.webp",
    tags: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.TANSTACK,
      TECHNOLOGIES.SUPABASE,
    ],
  },
  {
    title: "PrimeTech",
    subtitle: "e-commerce",
    description:
      "E-commerce para la compra y venta de productos tecnológicos como laptops, celulares y tablets. Permite explorar un catálogo con distintos filtros, gestionar favoritos y realizar compras. Además, los usuarios pueden registrarse y convertirse en vendedores para publicar y administrar sus productos. El frontend fue desarrollado con Next.js, React y TypeScript, utilizando TailwindCSS para el diseño y TanStack Query para la gestión de datos. El backend, desarrollador con Java con Spring Boot, integra Spring Security y JWT para la autenticación. La base de datos utilizada es PostgreSQL.",
    link: "",
    githubLinks: [
      {
        link: "https://github.com/JahirMM/primeTechBackend",
        label: "Backend",
      },
      {
        link: "https://github.com/JahirMM/primeTechFrontend",
        label: "Frontend",
      },
    ],
    details: {
      frontend: "/project/PrimeTech",
      backend: "/backend-project/primeTechBackend?nameModule=auth",
    },
    image: "/projects/primeTech/primeTech-main.webp",
    tags: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.TANSTACK,
      TECHNOLOGIES.JAVA,
      TECHNOLOGIES.SPRINGBOOT,
      TECHNOLOGIES.JWT,
      TECHNOLOGIES.POSTGRESQL,
    ],
  },
  {
    title: "WriteNote ",
    subtitle: "Tu espacio personal para notas",
    description:
      "Aplicación web diseñada para mejorar la gestión personal de notas. Los usuarios pueden crear cuentas, iniciar sesión y gestionar sus notas de manera flexible, con la opción de marcarlas como favoritas para acceder rápidamente a las más importantes. Creado desde cero con Next.js, React (TypeScript) y Tailwind CSS para el frontend, y Node.js con TypeScript y Express para el backend.",
    link: "",
    githubLinks: [
      {
        link: "https://github.com/JahirMM/WriteNotes",
        label: "Code",
      },
    ],
    details: {
      frontend: "/project/WriteNote",
      backend: "/backend-project/writeNoteBackend?nameModule=auth",
    },
    image: "/projects/writeNote/writeNote-main.webp",
    tags: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TYPESCRIP,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.TANSTACK,
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
    githubLinks: [
      {
        link: "https://github.com/JahirMM/MemoryGame",
        label: "Code",
      },
    ],
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
