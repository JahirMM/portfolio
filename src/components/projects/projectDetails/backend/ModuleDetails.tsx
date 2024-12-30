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
    <section className="mb-8">
      {module.title && (
        <h2
          className="text-gray-800 text-3xl font-bold mb-10 pb-4 border-b border-gray-500/30 dark:text-gray-300"
          id="moduleTitle"
        >
          {module.title}
        </h2>
      )}
      {module.description && (
        <p className="text-gray-800 text-sm text-pretty mb-10 dark:text-gray-300">
          {module.description}
        </p>
      )}
      {module.apis &&
        module.apis.map((api, index) => <ApiDetails key={index} api={api} />)}
    </section>
  );
};

export default ModuleDetails;
