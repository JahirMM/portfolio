import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel: string
}

const SocialLink = ({ href, children, ariaLabel }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="bg-gray-200/50 rounded-full border border-black/20 flex justify-center items-center gap-x-2 py-2 px-4  hover:bg-white/30 dark:hover:bg-white/10 dark:border-white/10 dark:bg-white/5 transition-transform duration-500 socialLink"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};



export default SocialLink;
