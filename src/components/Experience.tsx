import { useState } from "react";

const Experience = () => {
  const EXPERIENCE = [
    {
      startDate: "ago. 2025",
      endDate: "nov. 2025",
      title: "Desarrollo Full Stack",
      company: "AQC Propiedades",
      description: [
        "Desarrollé soluciones full stack en distintos proyectos internos de la empresa.",
        "Implementé el frontend utilizando Next.js, TypeScript y TailwindCSS, aplicando principios de arquitectura modular, componentización e internacionalización (i18n).",
        " Desarrollé del backend con Node.js, Express y TypeScript, empleando Supabase (PostgreSQL) como base de datos principal y servicios de autenticación y almacenamiento.",
        "Integré herramientas empresariales mediante AppSheet para automatizar procesos internos y mejorar la gestión operativa.",
        "Colaboración con el diseño y Prototipado de Software (Interfaces).",
        "Colaboré en la automatización de flujos mediante n8n."
      ],
    },
    {
      startDate: "ene. 2024",
      endDate: "mar. 2024",
      title: "Desarrollo Frontend - Practica Profesional",
      company: "Apiux Tecnología",
      description: [
        "Desarrollé el frontend de un sistema en Angular para la gestión de documentos y carpetas dentro de la plataforma Alfresco.",
        "Implementé funcionalidades esenciales como autenticación de usuarios, navegación jerárquica entre nodos, y visualización y descarga de archivos mediante integración con la API de Alfresco",
        "Diseñé una interfaz moderna y responsiva utilizando Tailwind CSS, optimizando la experiencia del usuario y la usabilidad del sistema.",
        "Configuré máquinas virtuales en Ubuntu para la instalación y gestión de Alfresco yPostgreSQL.",
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
              <h3 className="text-2xl font-bold text-secondaryColorLightTheme text-pretty dark:font-normal">
                {experience.title}
              </h3>
              <time className="p-0 m-0 text-sm text-gray-400 dark:text-white/80">
                {experience.startDate} - {experience.endDate}
              </time>
              <ul className="pl-5 mt-5 space-y-4 text-gray-800 list-disc dark:text-gray-300">
                {experience.description.map((point, idx) => (
                  <li key={idx} className="text-sm">
                    {point}
                  </li>
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
