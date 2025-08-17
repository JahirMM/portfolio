import { ReactNode } from "react";

const ProjectLink = ({
  href,
  children,
  openInNewTab,
}: {
  href: string;
  children: ReactNode;
  openInNewTab: boolean;
}) => {
  return (
    <a
      target={openInNewTab ? "_blank" : ""}
      role="link"
      className="flex items-center justify-center gap-4 py-4 text-xs text-black transition-colors duration-300 hover:bg-secondaryColorLightTheme"
      href={href}
    >
      {children}
    </a>
  );
};

export default ProjectLink;
