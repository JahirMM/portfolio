import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  ariaLabel: string;
}

const SocialLink = ({ href, children, ariaLabel }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex items-center justify-center px-4 py-2 text-black transition-transform duration-500 bg-gray-200 border border-black rounded-full gap-x-2 hover:bg-white/30 dark:hover:bg-white/10 dark:border-white/10 dark:bg-white/10 dark:text-gray-200 socialLink"
    >
      {children}
    </a>
  );
};

export default SocialLink;
