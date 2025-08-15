import { useEffect, useState } from "react";

import { navItems } from "@/data/navItems";

import IconX from "@/icons/IconX";
import Menu from "@/icons/Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header
        className={`${showMenu ? "translate-y-0" : "-translate-y-full"} 
        fixed top-0 left-0 
        w-full h-screen 
        p-3 
        z-[998] 
        transition-transform duration-500 ease-in-out 
        bg-primaryColorLightTheme
        md:translate-y-0 md:fixed md:w-auto md:h-auto md:pt-9 md:right-0 md:px-0 md:pr-8`}
      >
        <nav className="flex items-center justify-center w-full h-full border-2 border-gray-300 rounded-lg md:border-0 md:justify-end">
          <ul className="flex flex-col items-center gap-10 text-2xl font-semibold text-center text-gray-900 md:flex-row md:text-sm">
            {navItems.map((link, index) => (
              <li key={index}>
                <a aria-label={link.label} href={link.url} onClick={toggleMenu}>
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:j.machuca912@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar un correo a Jahir Machuca"
                className="hidden px-5 py-2 text-sm font-semibold text-gray-900 rounded-xl bg-secondaryColorLightTheme md:inline-block"
              >
                Contactame
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="fixed flex gap-10 top-8 right-10 z-[999] md:hidden">
        <a
          href="mailto:j.machuca912@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar un correo a Jahir Machuca"
          className="flex items-center justify-center px-5 py-2 text-sm font-semibold text-gray-900 rounded-xl bg-secondaryColorLightTheme"
        >
          Contactame
        </a>
        {showMenu ? (
          <span className="p-0.5 rounded-md bg-primaryColorLightTheme">
          <IconX
            className="text-black cursor-pointer size-8"
            onClick={() => setShowMenu((showMenu) => !showMenu)}
          />
          </span>
        ) : (
          <span className="p-0.5 rounded-md bg-primaryColorLightTheme">

          <Menu
            className="text-black cursor-pointer size-8"
            onClick={() => setShowMenu((showMenu) => !showMenu)}
          />
          </span>

        )}
      </div>
    </>
  );
}

export default Header;