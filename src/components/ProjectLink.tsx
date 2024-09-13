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
      className="flex gap-x-3 px-3 py-2 bg-gray-800 rounded-lg transition-colors duration-500 hover:bg-black active:bg-black"
      href={href}
    >
      {children}
    </a>
  );
};

export default ProjectLink;
