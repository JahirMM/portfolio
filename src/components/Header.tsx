import { useEffect, useState } from "react";
import Github from "../icons/Github";
import Menu from "../icons/Menu";
import IconX from "../icons/IconX";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // bg-[#0E1637]
  const [activeSection, setActiveSection] = useState("");

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
        className="fixed top-[10px] sm:top-[25px] right-[50px] z-[99] md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <IconX className="size-7" /> : <Menu className="size-7" />}
      </span>
      <header
        className={`
          bg-gradient-to-b from-[#03081d] to-[#0b1437]
          fixed top-0 z-50 
          flex items-center justify-center 
          w-full mx-auto
          py-10
          shadow-2xl
          transition-transform duration-700 
          ${showMenu ? "-translate-y-0" : "-translate-y-full"}
          md:bg-none md:from-none md:to-none
          md:mt-2
          md:-translate-y-0
          md:py-0`}
      >
        <div className="md:hidden absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <nav
          className={`
        flex flex-col gap-5 justify-center items-center
        md:flex-row
        md:px-4 
        ${scrolled ? "md:bg-[#0E1637] rounded-xl" : ""}
        `}
        >
          {navItems.map((link, index) => (
            <a
              key={index}
              className={`text-sm block px-2 py-2 hover:text-blue-500 dark:hover:text-blue-500 ${
                activeSection === link.label
                  ? "text-blue-500"
                  : "text-gray-200/80"
              }`}
              aria-label={link.label}
              href={link.url}
            >
              {link.title}
            </a>
          ))}

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </nav>
      </header>
    </>
  );
};

export default Header;
