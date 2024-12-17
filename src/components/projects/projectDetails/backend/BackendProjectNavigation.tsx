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
}

function BackendProjectNavigation({
  navigationOptions,
  onNavigate,
}: ProjectNavigationProps) {
    const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
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
        <h2 className="text-2xl font-bold mb-4">Rest API</h2>
        <ul className="flex flex-col gap-4 items-center">
          {navigationOptions.map((navOption) => (
            <li key={navOption.url}>
              <button
                onClick={() => onNavigate(navOption.url)}
                className="text-blue-600 hover:underline"
              >
                {navOption.nameOption}
              </button>
            </li>
          ))}
          <span className="h-[1px] w-full bg-gray-500"></span>
          <ThemeSwitcher/>
          <button onClick={() => navigate('/')} className="text-blue-600 hover:underline" > Inicio </button>
        </ul>
      </div>
    </>
  );
}

export default BackendProjectNavigation;
