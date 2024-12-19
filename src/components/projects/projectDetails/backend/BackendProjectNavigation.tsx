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
  nameModule: string

}

function BackendProjectNavigation({
  navigationOptions,
  onNavigate,
  nameModule
}: ProjectNavigationProps) {
  
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <span
        className="fixed top-[16px] sm:top-[16px] right-[50px] z-[99] cursor-pointer md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <IconX className="size-7 text-black dark:text-white" />
        ) : (
          <Menu className="size-7 text-black dark:text-white" />
        )}
      </span>
      <div
        className={`
            bg-cardsBackgroundLightTheme
            fixed top-0 z-50
            w-full p-10
            transition-transform duration-700
            flex flex-col items-center
            ${showMenu ? "-translate-y-0" : "-translate-y-full"}
            md:-translate-y-0
            md:fixed
            md:h-full
            md:w-[150px]
            md:p-6
            dark:bg-cardsBackgroundDarkTheme
        `}
      >
        <h2 className="text-2xl font-bold mb-4 text-pretty text-gray-800 dark:text-white">
          Rest API
        </h2>
        <ul className="flex flex-col items-center gap-4 w-full">
          {navigationOptions.map((navOption) => (
            <li key={navOption.url} className={`text-center w-full rounded-md ${nameModule === navOption.url ? "bg-[#E3D5C5]/50 dark:bg-[#142053]" : ""}`}>
              <button
                onClick={() => onNavigate(navOption.url)}
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
    </>
  );
}

export default BackendProjectNavigation;
