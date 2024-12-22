import { useEffect, useState } from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";

import { navItems } from "@/data/navItems";

import Menu from "@/icons/Menu";
import IconX from "@/icons/IconX";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    navItems.length > 0 ? navItems[0].title : null
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      let currentTitle = activeSection;
      navItems.forEach((api) => {
        const element = document.getElementById(api.label);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentTitle = api.label;
            setActiveSection(currentTitle);
            currentTitle = "";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div className="fixed top-[27px] right-[38px] z-[999] md:relative">
        <div
          className="relative z-[999] cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <IconX
              className={`min-h-9 min-w-9 p-1 bg-cardsBackgroundLightTheme text-black dark:bg-[#0D1228] dark:text-white ${
                showMenu ? "rounded-tr-xl" : "rounded-full"
              }`}
            />
          ) : (
            <Menu
              className={`min-h-9 min-w-9 p-1 bg-cardsBackgroundLightTheme text-black dark:bg-[#0D1228] dark:text-white ${
                showMenu ? "rounded-tr-xl" : "rounded-full"
              }`}
            />
          )}
        </div>
        <header
          className={`
            options absolute top-0 right-0 w-0 h-9 overflow-hidden overflow-y-auto no-scrollbar
            text-black 
            rounded-2xl
            z-[99] p-4
            bg-cardsBackgroundLightTheme 
            md:fixed md:pt-2 md:w-full md:h-auto md:rounded-none
            md:flex md:items-center md:justify-center md:bg-transparent
            md:dark:bg-transparent dark:bg-[#0D1228]
            ${showMenu ? "w-[160px] h-[232px] open" : "w-0 h-9 closed"}
          `}
        >
          <nav
            className={`
              flex flex-col gap-4
              bg-cardsBackgroundLightTheme 
              md:flex-row md:items-center md:justify-center md:gap-4
              md:rounded-2xl md:px-3 md:py-2
              md:opacity-100
              dark:bg-[#0D1228]
              ${
                showMenu
                  ? "opacity-100 transition-opacity duration-[2s]"
                  : "opacity-0"
              }
            `}
          >
            {navItems.map((link, index) => (
              <a
                key={index}
                className={`text-sm block hover:text-secondaryColorLightTheme dark:hover:text-secondaryColorDarkTheme ${
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
            <ThemeSwitcher />
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
