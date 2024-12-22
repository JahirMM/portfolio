import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ThemeSwitcher from "@/components/ThemeSwitcher";

import IconX from "@/icons/IconX";
import Menu from "@/icons/Menu";

interface NavigationOption {
  nameOption: string;
  url: string;
}

interface ProjectNavigationProps {
  navigationOptions: NavigationOption[];
  onNavigate: (moduleUrl: string) => void;
  nameModule: string;
}

function BackendProjectNavigation({
  navigationOptions,
  onNavigate,
  nameModule,
}: ProjectNavigationProps) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <>
      <div className="fixed top-[27px] right-[38px] z-[999]">
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
              } `}
            />
          )}
        </div>
        <div
          className={`
          options absolute top-0 right-0 w-0 h-9 overflow-hidden overflow-y-auto no-scrollbar
          bg-cardsBackgroundLightTheme
          text-black 
          rounded-2xl
          z-[99] p-4
          md:fixed md:min-h-full md:w-[185px] md:left-0 md:right-auto md:rounded-none md:pt-7
          lg:pt-10
          dark:bg-[#0D1228]
          ${
            showMenu
              ? "w-[200px] h-[248px] max-h-[348px] open"
              : "w-0 h-9 closed"
          }`}
        >
          <h2
            className={`text-xl text-center font-bold mb-4 text-pretty text-gray-800 md:text-2xl dark:text-white ${
              showMenu
                ? "opacity-100 transition-opacity duration-[2s]"
                : "opacity-0"
            } md:opacity-100`}
          >
            Rest API
          </h2>
          <ul
            className={`
              flex flex-col items-center gap-4 w-full
              ${
                showMenu
                  ? "opacity-100 transition-opacity duration-[2s]"
                  : "opacity-0"
              }
              md:opacity-100`}
          >
            {navigationOptions.map((navOption) => (
              <li
                key={navOption.url}
                className={`
                  text-center w-full rounded-md 
                  ${
                    nameModule === navOption.url
                      ? "bg-[#E3D5C5]/50 dark:bg-[#142053]"
                      : ""
                  }
                  `}
              >
                <button
                  onClick={() => {
                    onNavigate(navOption.url);
                    toggleMenu();
                  }}
                  className="text-gray-700 px-3 py-1 rounded-xl dark:opacity-80 dark:text-gray-300 hover:text-black hover:font-medium dark:hover:text-white"
                >
                  {navOption.nameOption}
                </button>
              </li>
            ))}
            <span className="h-[1px] w-full bg-gray-500/30"></span>
            <ThemeSwitcher />
            <button
              onClick={() => navigate("/")}
              className="text-black dark:opacity-80 dark:text-white"
            >
              {" "}
              Inicio{" "}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BackendProjectNavigation;
