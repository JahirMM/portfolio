import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="bg-gray-200/50 rounded-full border border-black/20 flex justify-center items-center gap-x-2 py-2 px-4 hover:scale-110 hover:bg-white/30 dark:hover:bg-white/10 transition dark:border-white/10 dark:bg-white/5"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialLink;
