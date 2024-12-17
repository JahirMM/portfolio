
import { Module } from "@/interfaces/backendInterfaces";
import ApiDetails from "@/components/projects/projectDetails/backend/ApiDetails";

interface ModuleDetailsProps {
  module: Module;
}

const ModuleDetails: React.FC<ModuleDetailsProps> = ({ module }) => {
  if (
    (!module.title || module.title.trim() === "") &&
    (!module.description || module.description.trim() === "") &&
    (!module.apis || module.apis.length === 0)
  ) {
    return null;
  }

  return (
    <div className="module-details mb-8">
      {module.title && <h2 className="text-2xl font-bold mb-2">{module.title}</h2>}
      {module.description && <p className="text-gray-700 mb-4">{module.description}</p>}
      {module.apis &&
        module.apis.map((api, index) => (
          <ApiDetails key={index} api={api} />
        ))}
    </div>
  );
};

export default ModuleDetails;
