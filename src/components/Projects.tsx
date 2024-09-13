// DATA
import { PROJECTS } from "../data/projects";

// ICONS
import Github from "../icons/Github";
import Link from "../icons/Link";

// COMPONENTS
import ProjectLink from "./ProjectLink";

const Projects = () => {
  const projects = PROJECTS;
  return (
    <div className="flex flex-col gap-y-16">
      {projects.map(
        ({ image, title, description, link, tags, github }, index) => (
          <article
            key={title}
            className={`bg-[#0a102b] p-4 rounded-2xl flex flex-col gap-8 group md:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:hover:bg-gray-800/50 lg:h-full">
                <img
                  alt={title}
                  className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  loading="lazy"
                  src={image}
                />
              </div>
            </div>
            <div className="w-full space-y-7 md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-secondaryColour lg:text-xl">
                {title}
              </h3>
              <div className="flex flex-wrap space-y-7">
                <ul className="flex flex-row flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <span
                        className={`flex items-center gap-x-2 rounded-full text-[10px] ${tag.className} py-1 px-2`}
                      >
                        <tag.icon className="size-4" />
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="text-gray-300 text-sm text-pretty">
                  {description}
                </div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <ProjectLink href={github}>
                      <Github className="size-6" />
                      Code
                    </ProjectLink>
                  )}
                  {link && (
                    <ProjectLink href={link}>
                      <Link className="size-6" />
                      Preview
                    </ProjectLink>
                  )}
                </footer>
              </div>
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default Projects;
