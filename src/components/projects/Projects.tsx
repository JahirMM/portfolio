import { PROJECTS } from "@/data/projects";
import FileDescription from "@/icons/FileDescription";

import Github from "@/icons/Github";
import Link from "@/icons/Link";

import ProjectLink from "@/components/projects/ProjectLink";

const Projects = () => {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(
        (
          {
            image,
            title,
            subtitle,
            description,
            link,
            tags,
            githubLinks,
            details,
          },
          index
        ) => (
          <article
            key={index}
            className={`bg-cardsBackgroundLightTheme p-4 rounded-2xl flex flex-col gap-8 group md:flex-row border border-gray-800/10 dark:border-gray-800 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } dark:bg-cardsBackgroundDarkTheme`}
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
              <h3 className="text-2xl font-bold text-secondaryColorLightTheme lg:text-xl dark:text-secondaryColorDarkTheme">
                {title} - {subtitle}
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
                <div className="text-sm text-gray-800 text-pretty dark:text-gray-300">
                  {description}
                </div>
                <footer className="flex flex-wrap items-end justify-start mt-4 gap-x-4 gap-y-2">
                  {githubLinks.length > 0 &&
                    githubLinks.map((github, index) => (
                      <ProjectLink
                        href={github.link}
                        openInNewTab={true}
                        key={index}
                      >
                        <Github className="size-4" />
                        {github.label}
                      </ProjectLink>
                    ))}
                  {link && (
                    <ProjectLink href={link} openInNewTab={true}>
                      <Link className="size-4" />
                      Preview
                    </ProjectLink>
                  )}
                  {details && (
                    <>
                      {details.frontend && (
                        <ProjectLink
                          href={details.frontend}
                          openInNewTab={false}
                        >
                          <FileDescription className="size-4" />
                          Frontend
                        </ProjectLink>
                      )}
                      {details.backend && (
                        <ProjectLink
                          href={details.backend}
                          openInNewTab={false}
                        >
                          <FileDescription className="size-4" />
                          Backend
                        </ProjectLink>
                      )}
                    </>
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
