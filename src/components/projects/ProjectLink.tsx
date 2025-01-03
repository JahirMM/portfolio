import { ReactNode } from "react";

const ProjectLink = ({
  href,
  children,
  openInNewTab
}: {
  href: string;
  children: ReactNode;
  openInNewTab: boolean;
}) => {
  return (
    <a
      target={openInNewTab ? "_blank" : ""}
      role="link"
      className="flex items-center gap-x-3 px-3 py-2 text-sm bg-gray-500 rounded-xl transition-colors duration-500 hover:bg-gray-800/90 active:bg-gray-900 dark:active:bg-black dark:bg-gray-800 dark:hover:bg-black"
      href={href}
    >
      {children}
    </a>
  );
};

export default ProjectLink;
