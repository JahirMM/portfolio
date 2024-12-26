import { useState } from "react";

import { Diagram } from "@/interfaces/backendInterfaces";

import SubMenuArrow from "@/icons/SubMenuArrow";

function DiagramComponent({ diagrams }: { diagrams: Diagram[] }) {
  const [showDiagram, setShowDiagram] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-2 bg-[#E3D5C5]/50 px-3 py-2 mb-8 rounded-lg text-gray-800 text-sm dark:text-gray-300 dark:bg-[#142053]"
        onClick={() => setShowDiagram(!showDiagram)}
      >
        Diagrama Entidad-Relación
        <SubMenuArrow
          className={`size-4 text-gray-800 transition-transform ease-linear duration-500 ${
            showDiagram ? "rotate-90" : "rotate-0"
          } dark:text-gray-300`}
        />
      </button>
      {showDiagram &&
        diagrams.map((diagram, index) => (
          <div key={index} className="mb-10">
            <img
              src={diagram.urlImge}
              alt="Diagrama entidad-relación de primeTech"
              className="w-full bg-gray-900 p-2"
            />
          </div>
        ))}
    </>
  );
}

export default DiagramComponent;
