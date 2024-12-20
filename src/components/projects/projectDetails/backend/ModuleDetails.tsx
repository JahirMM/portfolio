import { Module } from "@/interfaces/backendInterfaces";
import ApiDetails from "@/components/projects/projectDetails/backend/ApiDetails";
import { useState } from "react";
import Menu from "@/icons/Menu";
import IconX from "@/icons/IconX";

interface ModuleDetailsProps {
  module: Module;
  generateId: (title: string) => string;
}

const ModuleDetails: React.FC<ModuleDetailsProps> = ({
  module,
  generateId,
}) => {
  if (
    (!module.title || module.title.trim() === "") &&
    (!module.description || module.description.trim() === "") &&
    (!module.apis || module.apis.length === 0)
  ) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="module-details mb-8">
      {/* <div className="menu-container">
        <div className="icons">
          {isOpen ? (
            <IconX
              className="size-7 text-black dark:text-red-400 icon"
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              className="size-7 text-black dark:text-blue-400 icon"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className={`options ${isOpen ? "open" : "closed"}`}>
          <p>Opción 1</p>
          <p>Opción 2</p>
          <p>Opción 3</p>
        </div>
      </div> */}

      {module.title && (
        <h2 className="text-gray-800 text-3xl font-bold mb-10 pb-4 border-b border-gray-500/30 dark:text-gray-300">
          {module.title}
        </h2>
      )}
      {module.description && (
        <p className="text-gray-800 text-sm text-pretty mb-10 dark:text-gray-300">
          {module.description}
        </p>
      )}
      {module.apis &&
        module.apis.map((api, index) => (
          <ApiDetails key={index} api={api} generateId={generateId} />
        ))}
    </div>
  );
};

export default ModuleDetails;
