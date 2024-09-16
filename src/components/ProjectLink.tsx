import { ReactNode } from "react";

const ProjectLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      target="_blank"
      role="link"
      className="flex gap-x-3 px-3 py-2 bg-gray-500 rounded-xl transition-colors duration-500 hover:bg-gray-800/90 active:bg-gray-900 dark:active:bg-black dark:bg-gray-800 dark:hover:bg-black"
      href={href}
    >
      {children}
    </a>
  );
};

export default ProjectLink;
