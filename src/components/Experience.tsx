import { useState } from "react";

const Experience = () => {
  const EXPERIENCE = [
    {
      startDate: "ene. 2024",
      endDate: "mar. 2024",
      title: "Desarrollo Frontend - Practica Profesional",
      company: "Apiux Tecnología",
      description:
        "Desarrollo frontend de un sistema utilizando Angular, enfocado en la gestión de documentos y carpetas en Alfresco. Implementé funcionalidades como el inicio de sesión, la navegación entre nodos, y la visualización y descarga de archivos. Además, utilicé Tailwind CSS para el diseño del sitio web, asegurando una experiencia de usuario fluida. También trabajé en la instalación y configuración de máquinas virtuales con Ubuntu para gestionar Alfresco y PostgreSQL.",
    },
    {
      startDate: "dic. 2022",
      endDate: "feb. 2023",
      title: "Desarrollo Web - Practica Tecnica",
      company: "Fonasa",
      description:
        "Enfoquado principalmente en el desarrollo del frontend utilizando React, donde creé interfaces y componentes dinámicos para mejorar la visualización de datos con tablas y gráficos interactivos. También implementé un calendario interactivo para gestionar eventos.En el backend, desarrollé algunas APIs utilizando Python con Flask.",
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
              className={`cursor-pointer transition-all duration-300 relative ${
                companySelected === company.company
                  ? "text-white font-bold pb-2 border-b-2 border-secondaryColour md:border-l-2 md:border-b-0 md:pl-2 md:pb-0"
                  : "text-gray-500/80 pb-2 border-b-2 border-gray-600/80 md:border-l-2 md:border-b-0 md:pl-2 md:pb-0"
              } z-40`}
            >
              {company.company}
            </h4>
          ))}
          <span className="pedo z-30 w-full h-[2px] absolute bottom-0 bg-gray-600/80 md:left-0 md:w-[2px] md:h-full"></span>
        </span>
      </nav>
      <div className="md:col-start-2 md:col-end-4">
        {EXPERIENCE.filter((item) => item.company === companySelected).map(
          (experience, index) => (
            <div key={index}>
              <h3 className="text-secondaryColour">{experience.title}</h3>
              <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">
                {experience.startDate} - {experience.endDate}
              </time>
              <p className="mt-5">{experience.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
