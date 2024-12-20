import { useEffect, useState } from "react";

import { Api } from "@/interfaces/backendInterfaces";

import SubMenuArrow from "@/icons/SubMenuArrow";
import Check from "@/icons/Check";

function SubMenu({
  apisList,
  generateId,
}: {
  apisList: Api[];
  generateId: (title: string) => string;
}) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(
    apisList.length > 0 ? apisList[0].title : null
  );

  const toggleSubMenu = () => {
    setShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y});
    }
  };

    useEffect(() => {
      if (apisList.length > 0) {
        setSelectedTitle(apisList[0].title);
      } else {
        setSelectedTitle(null);
      }
    }, [apisList]);

  useEffect(() => {
    const handleScrollEvent = () => {
      let currentTitle = selectedTitle;
      apisList.forEach((api) => {
        const element = document.getElementById(generateId(api.title));
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 270) {
            currentTitle = api.title;
          }
        }
      });
      
      if (currentTitle !== selectedTitle) {
        setSelectedTitle(currentTitle);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [apisList, generateId, selectedTitle]);

  return (
    <div className="fixed px-6 top-0 left-0 right-0 w-full text-sm">
      <div className="px-2 py-3 bg-[#E7DED3] dark:bg-[#0D1535]">
        <div
          onClick={toggleSubMenu}
          className="inline-flex items-center gap-2 p-2 rounded-md border border-gray-800 text-gray-800 text-sm bg-cardsBackgroundLightTheme dark:text-gray-300 dark:bg-cardsBackgroundDarkTheme"
        >
          <span>Sección</span>
          <SubMenuArrow
            className={`size-4 text-gray-800 transition-transform ease-linear duration-500 ${
              showSubMenu ? "rotate-90" : "rotate-0"
            } dark:text-gray-300`}
          />
        </div>
        <span className="ml-2 text-gray-800 text-sm dark:text-gray-300">
          {selectedTitle || ""}
        </span>
      </div>
      <div
        className={`flex flex-col gap-1 px-4 bg-cardsBackgroundLightTheme overflow-y-auto transition-[max-height] ease-in-out duration-700 ${
          showSubMenu ? "max-h-96" : "max-h-0"
        } dark:bg-cardsBackgroundDarkTheme`}
      >
        {apisList &&
          apisList.map((api, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 dark:border-gray-800">
              <a
                href={`#${generateId(api.title)}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(generateId(api.title));
                  setSelectedTitle(api.title);
                  toggleSubMenu();
                }}
                className="py-1 text-gray-800 text-sm dark:text-gray-300"
              >
                {api.title}
              </a>
              {selectedTitle === api.title && (
                <Check className="size-3 text-gray-800 dark:text-gray-300" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default SubMenu;
