import { useParams, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";

import Github from "../../../icons/Github";

const ProjectDetails = () => {
  const sliderRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const { nameProject } = useParams<{ nameProject: string | undefined }>();

  const PROJECT_DETAILS: {
    [key: string]: {
      title: string;
      subtitle: string;
      description: string;
      github: string;
      darkModeImage?: string;
      lightModeImage?: string;
      images?: string[];
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
    },
  };

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
      <main className="py-20 p-10 w-full mx-auto container md:max-w-6xl">
        {project ? (
          <>
            <h1 className="text-5xl font-bold text-secondaryColorLightTheme mb-10 dark:text-secondaryColorDarkTheme">
              {project.title}
            </h1>
            <div className="text-gray-800 text-pretty mb-10 dark:text-white/80">
              {project.description}
            </div>
            <a href={project.github} className="flex">
              <span className="flex items-center gap-x-3 text-sm px-3 py-2 bg-gray-500 rounded-xl transition-colors duration-500 hover:bg-gray-800/90 active:bg-gray-900 dark:active:bg-black dark:bg-gray-800 dark:hover:bg-black">
                <Github className="size-5" />
                Ver en GitHub
              </span>
            </a>
            {(project.darkModeImage || project.lightModeImage) && (
              <div
                className="
              my-16
              imageSliderContainer
              max-w-[47rem] h-[20rem] sm:h-[25rem] md:h-[33rem]
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
            <div className="max-w-[47rem] mx-auto mb-40 mt-40">VIDEO</div>

            {project.images && project.images.length > 0 && (
              <div className="max-w-[47rem] mx-auto flex flex-col gap-40">
                {project.images.map((image, index) => (
                  <div
                    className="bg-cardsBackgroundLightTheme p-4 border border-gray-800/10 rounded-xl dark:bg-cardsBackgroundDarkTheme dark:border-gray-800"
                    key={index}
                  >
                    <img src={image} alt={`Imagen ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div>Cargando...</div>
        )}
      </main>
    </>
  );
};

export default ProjectDetails;
