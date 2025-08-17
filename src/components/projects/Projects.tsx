import ProjectLink from "@/components/projects/ProjectLink";

import { PROJECTS } from "@/data/projects";

import FileDescription from "@/icons/FileDescription";
import Github from "@/icons/Github";
import Link from "@/icons/Link";


const Projects = () => {

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:justify-items-center">
      {PROJECTS.map((project, index) => (
        <article
          key={index}
          className="grid grid-cols-1 border border-gray-400 rounded-md group lg:w-[500px] dark:border-gray-800"
        >
          {/* IMAGEN */}
          <div className="p-3 overflow-hidden border-b border-gray-400 dark:border-gray-800">
            <div className="inline-block w-full h-full overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* DESCRIPCIÓN + BOTONES */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* DESCRIPTION */}
            <div className="flex flex-col justify-between border-b border-gray-400 sm:border-b-0 sm:border-r dark:border-gray-800">
              <div className="p-3 mb-4 text-center text-black md:text-start">
                <h3 className="mb-3 text-xl font-bold text-secondaryColorLightTheme">
                  {project.title}
                </h3>
                <p className="text-xs dark:text-gray-300">{project.description}</p>
              </div>

              {/* TECNOLOGÍAS */}
              <ul className="flex flex-wrap justify-center gap-4 p-3 md:justify-start">
                {project.tags.map((tag, index) => (
                  <li key={index} className="relative">
                    {/* Ícono con peer */}
                    <tag.icon className="cursor-pointer size-5 peer hover:text-secondaryColorLightTheme" />

                    {/* Tooltip estilizado */}
                    <span className="absolute px-2 py-1 mb-2 text-xs text-white transition-opacity duration-300 -translate-x-1/2 bg-black rounded opacity-0 pointer-events-none select-none bottom-full left-1/2 peer-hover:opacity-100">
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-400 dark:divide-gray-800">
              {project.githubLinks.length > 0 &&
                project.githubLinks.map((github, index) => (
                  <ProjectLink
                    href={github.link}
                    openInNewTab={true}
                    key={index}
                  >
                    <Github className="size-4" />
                    {github.label}
                  </ProjectLink>
                ))}
              {project.link && (
                <ProjectLink href={project.link} openInNewTab={true}>
                  <Link className="size-4" />
                  Preview
                </ProjectLink>
              )}
              {project.details && (
                <>
                  {project.details.frontend && (
                    <ProjectLink
                      href={project.details.frontend}
                      openInNewTab={false}
                    >
                      <FileDescription className="size-4" />
                      Frontend
                    </ProjectLink>
                  )}
                  {project.details.backend && (
                    <ProjectLink
                      href={project.details.backend}
                      openInNewTab={false}
                    >
                      <FileDescription className="size-4" />
                      Backend
                    </ProjectLink>
                  )}
                </>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
