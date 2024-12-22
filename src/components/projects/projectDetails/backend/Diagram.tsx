import SubMenuArrow from "@/icons/SubMenuArrow";
import { useState } from "react";

function Diagram({diagram}: {diagram:string}) {
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
      {showDiagram && (
        <>
          <div className="mb-10">
            <img src={diagram} alt="Diagrama entidad relación de primeTech" className="w-full" />
          </div>
        </>
      )}
    </>
  );
}

export default Diagram;
