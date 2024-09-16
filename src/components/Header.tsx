import Menu from "../icons/Menu";
import IconX from "../icons/IconX";

import { useEffect, useState } from "react";

import { useChangeTheme } from "../hooks/useChangeTheme";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { handleChangeTheme, theme } = useChangeTheme();

  const navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia",
    },
    {
      title: "Skills",
      label: "skills",
      url: "/#skills",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:jahirmachuca45@gmail.com",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    window.addEventListener("scroll", handleScroll);
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <span
        className="fixed top-[10px] sm:top-[25px] right-[50px] z-[99] cursor-pointer md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <IconX className="size-7 text-black dark:text-white" />
        ) : (
          <Menu className="size-7 text-black dark:text-white" />
        )}
      </span>
      <header
        className={`
          bg-gradient-to-b from-[#F3EDE5] to-[#bab1a4] dark:bg-gradient-to-b dark:from-[#03081d] dark:to-[#0b1437]
          fixed top-0 z-50 
          flex items-center justify-center 
          w-full mx-auto
          py-10
          transition-transform duration-700 
          ${showMenu ? "-translate-y-0" : "-translate-y-full"}
          md:bg-none md:from-none md:to-none dark:md:bg-none dark:md:from-none dark:md:to-none
          md:mt-2
          md:-translate-y-0
          md:py-0`}
      >
        <div className="md:hidden absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <nav
          className={`
        flex flex-col gap-5 justify-center items-center
        z-[9999]
        md:flex-row
        md:px-4
        ${
          scrolled
            ? "md:bg-[#FFFFFF] md:shadow-lg dark:md:bg-[#0E1637] rounded-xl"
            : ""
        }
        `}
        >
          {navItems.map((link, index) => (
            <a
              key={index}
              className={`text-sm block px-2 py-2 hover:text-secondaryColorLightTheme dark:hover:text-secondaryColorDarkTheme ${
                activeSection === link.label
                  ? "font-bold text-secondaryColorLightTheme dark:text-secondaryColorDarkTheme"
                  : "text-gray-800 dark:text-gray-200/80"
              }`}
              aria-label={link.label}
              href={link.url}
            >
              {link.title}
            </a>
          ))}
          <div
            onClick={handleChangeTheme}
            className="w-11 h-6 rounded-xl relative flex items-center bg-secondaryColorLightTheme dark:bg-[#1D3CBE]"
          >
            <span
              className={`absolute h-5 w-5 rounded-full transition-transform duration-500 ease-in-out transform ${
                theme === "light" ? "translate-x-[3px]" : "translate-x-full"
              } bg-slate-300 dark:bg-blue-200`}
            ></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
