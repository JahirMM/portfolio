import { useParams, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

import Github from "@/icons/Github";

const PROJECT_DETAILS: {
  [key: string]: {
    title: string;
    subtitle: string;
    description: string;
    github: string;
    darkModeImage?: string;
    lightModeImage?: string;
    images?: string[];
    videos: string[];
  };
} = {
  WriteNote: {
    title: "WriteNote",
    subtitle: "Tu espacio personal para notas",
    description:
      "Aplicación web diseñada para mejorar la gestión personal de notas. Los usuarios pueden crear cuentas, iniciar sesión y gestionar sus notas de manera flexible, con la opción de marcarlas como favoritas para acceder rápidamente a las más importantes. Creado desde cero con Next.js, React (TypeScript) y Tailwind CSS para el frontend, y Node.js con TypeScript y Express para el backend.",
    github: "https://github.com/JahirMM/WriteNotes",
    lightModeImage: "/projects/writeNote/writeNoteInLightMode.webp",
    darkModeImage: "/projects/writeNote/writeNoteInDarkMode.webp",
    images: [
      "/projects/writeNote/login.jpeg",
      "/projects/writeNote/signUp.jpeg",
      "/projects/writeNote/userProfile.webp",
      "/projects/writeNote/notesList.webp",
      "/projects/writeNote/writeNoteMobileView.webp",
    ],
    videos: [],
  },
  PrimeTech: {
    title: "PrimeTech",
    subtitle: "Tienda tecnológica donde puedes comprar y vender con facilidad",
    description:
      "Plataforma de e-commerce donde los usuarios pueden explorar productos, filtrar resultados, gestionar favoritos y realizar compras. También pueden registrarse y convertirse en vendedores para administrar sus productos. Desarrollado con Next.js, React y TypeScript, usando TailwindCSS para el diseño y TanStack Query para la gestión de datos.",
    github: "https://github.com/JahirMM/primeTechFrontend",
    lightModeImage: "",
    darkModeImage: "",
    images: [
      "/projects/primeTech/frontend/home.webp",
      "/projects/primeTech/frontend/productos.webp",
      "/projects/primeTech/frontend/productosFavoritos.webp",
      "/projects/primeTech/frontend/carritoDeCompra.webp",
      "/projects/primeTech/frontend/perfil.webp",
      "/projects/primeTech/frontend/compras.webp",
      "/projects/primeTech/frontend/ventas.webp",
      "/projects/primeTech/frontend/misProductos.webp",
    ],
    videos: [
      "/projects/primeTech/frontend/videos/video1.mp4",
      "/projects/primeTech/frontend/videos/video2.mp4",
    ],
  },
};

const ProjectDetails = () => {
  const sliderRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const { nameProject } = useParams<{ nameProject: string | undefined }>();

  const project = nameProject ? PROJECT_DETAILS[nameProject] : undefined;

  useEffect(() => {
    if (!project) {
      navigate("/not-found");
    }
  }, [project, navigate]);

  const slide = () => {
    if (sliderRef.current && imgRef.current) {
      const slideValue = sliderRef.current.value;
      imgRef.current.style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("input", slide);
    }
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("input", slide);
      }
    };
  }, []);

  return (
    <>
      <section className="container w-full p-10 py-20 mx-auto md:max-w-6xl">
        {project ? (
          <>
            <h1 className="mb-10 text-5xl font-bold text-secondaryColorLightTheme dark:text-secondaryColorDarkTheme">
              {project.title}
            </h1>
            <div className="mb-10 text-gray-800 text-pretty dark:text-white/80">
              {project.description}
            </div>
            <a href={project.github} target="_blank" className="flex mb-10">
              <span className="flex items-center px-3 py-2 text-sm transition-colors duration-500 bg-gray-500 gap-x-3 rounded-xl hover:bg-gray-800/90 active:bg-gray-900 dark:active:bg-black dark:bg-gray-800 dark:hover:bg-black">
                <Github className="size-5" />
                GitHub
              </span>
            </a>
            {(project.darkModeImage || project.lightModeImage) && (
              <div
                className="
              my-16
              imageSliderContainer
              max-w-[75rem] h-[20rem] sm:h-[25rem] md:h-[33rem]
              mx-auto
              border border-gray-600 dark:border-none
              relative overflow-hidden
              rounded-xl
            "
              >
                <img
                  src={project.darkModeImage}
                  alt={`${project.title} ${project.subtitle}`}
                  className="border border-gray-600 dark:border-none"
                />
                <img
                  src={project.lightModeImage}
                  alt={`${project.title} ${project.subtitle}`}
                  id="my-img"
                  ref={imgRef}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  id="slider"
                  ref={sliderRef}
                />
              </div>
            )}

            {project.videos &&
              project.videos.length > 0 &&
              project.videos.map((video, index) => (
                <div className="max-w-[75rem] mb-40" key={index}>
                  <video
                    autoPlay
                    muted
                    loop
                    controls
                    className="w-full rounded-lg shadow-lg"
                  >
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              ))}
            {project.images && project.images.length > 0 && (
              <div className="max-w-[75rem] mx-auto flex flex-col gap-40">
                {project.images.map((image, index) => (
                  <div
                    className="p-4 border bg-cardsBackgroundLightTheme border-gray-800/10 rounded-xl dark:bg-cardsBackgroundDarkTheme dark:border-gray-800"
                    key={index}
                  >
                    <a href={image} target="_blank" rel="noopener noreferrer">
                      <img
                        src={image}
                        alt={`Imagen ${index + 1}`}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div>Cargando...</div>
        )}
      </section>
    </>
  );
};

export default ProjectDetails;
