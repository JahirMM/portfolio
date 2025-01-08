import { useState } from "react";

const Experience = () => {
  const EXPERIENCE = [
    {
      startDate: "ene. 2024",
      endDate: "mar. 2024",
      title: "Desarrollo Frontend - Practica Profesional",
      company: "Apiux Tecnología",
      description: [
        "Desarrollé el frontend de un sistema en Angular para la gestión de documentos y carpetas en Alfresco.",
        "Implementé funcionalidades claves, como inicio de sesión, navegación entre nodos y visualización/descarga de archivos.",
        "Utilicé Tailwind CSS para diseñar una interfaz intuitiva, mejorando la experiencia del usuario.",
        "Configuré máquinas virtuales con Ubuntu para la instalación y gestión de Alfresco y PostgreSQL.",
      ],
    },
    {
      startDate: "dic. 2022",
      endDate: "feb. 2023",
      title: "Desarrollo Web - Practica Tecnica",
      company: "Fonasa",
      description: [
        "Diseñé interfaces y componentes dinámicos con React, mejorando la visualización de datos con tablas y gráficos interactivos.",
        "Desarrollé un calendario interactivo para la gestión de eventos.",
        "Colaboré en el desarrollo de APIs con Python y Flask para integrar datos y funcionalidades en el sistema.",
      ],
    },
  ];

  const [companySelected, setCompanySelected] = useState(
    () => EXPERIENCE[0].company
  );

  const handleClick = (company: string) => {
    setCompanySelected(company);
  };

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      <nav className="py-4">
        <span className="relative flex gap-10 md:flex-col">
          {EXPERIENCE.map((company) => (
            <h4
              key={company.company}
              onClick={() => handleClick(company.company)}
              className={`cursor-pointer transition-[color] duration-300 relative ${
                companySelected === company.company
                  ? "text-gray-800 text-xl font-bold pb-2 border-b-2 border-secondaryColorLightTheme md:border-l-2 md:border-b-0 md:pl-4 md:pb-0 dark:text-white"
                  : "text-black/50 text-lg pb-2 border-b-2 border-gray-600/80 md:border-l-2 md:border-b-0 md:pl-4 md:pb-0 dark:text-gray-500/80"
              } z-40`}
            >
              {company.company}
            </h4>
          ))}
          <span className="pedo z-30 w-full h-[1px] absolute bottom-0 bg-gray-600 md:left-0 md:w-[2px] md:h-full"></span>
        </span>
      </nav>
      <div className="md:col-start-2 md:col-end-4">
        {EXPERIENCE.filter((item) => item.company === companySelected).map(
          (experience, index) => (
            <div key={index}>
              <h3 className="text-secondaryColorLightTheme text-2xl text-pretty font-bold dark:font-normal">
                {experience.title}
              </h3>
              <time className="p-0 m-0 text-sm text-gray-400 dark:text-white/80">
                {experience.startDate} - {experience.endDate}
              </time>
              <ul className="mt-5 text-gray-800 space-y-4 dark:text-gray-300 list-disc pl-5">
                {experience.description.map((point, idx) => (
                  <li key={idx} className="text-sm">{point}</li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
