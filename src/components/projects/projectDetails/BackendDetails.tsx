import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { PRIME_TECH_BACKEND_INTERFACE } from "../../../interfaces/backendInterfaces";
import { PRIME_TECH_BACKEND } from "../../../data/backendProjectDetails/primeTechBackend";

import ModuleDetails from "./ModuleDetails";
import BackendProjectNavigation from "./BackendProjectNavigation";


function BackendDetails() {
  const navigate = useNavigate();
  const { nameProject } = useParams<{ nameProject: string | undefined }>();
  const [searchParams] = useSearchParams();
  const nameModule = searchParams.get("nameModule");

  const BACKEND_PROJECTS = [
    {
      name: "prime Tech Backend",
      data: PRIME_TECH_BACKEND,
      navegation: Object.keys(PRIME_TECH_BACKEND.modules || {}).map((moduleKey) => ({
        nameOption: moduleKey.charAt(0).toUpperCase() + moduleKey.slice(1).replace(/([A-Z])/g, " $1"),
        url: moduleKey,
      })),
    },
  ];

  const project = BACKEND_PROJECTS.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "") === nameProject?.toLowerCase()
  )?.data as PRIME_TECH_BACKEND_INTERFACE | undefined;

  useEffect(() => {
    if (!project) {
      navigate("/not-found");
    }
  }, [project, navigate]);

  const selectedModule =
    nameModule && project?.modules
      ? project.modules[nameModule as keyof typeof project.modules]
      : null;

  const handleNavigationClick = (moduleUrl: string) => {
    navigate(`/backend-project/${nameProject}?nameModule=${moduleUrl}`);
  };

  const navigationOptions = BACKEND_PROJECTS.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "") === nameProject?.toLowerCase()
  )?.navegation;

  return (
    <main className="md:flex">
      {navigationOptions && (
        <BackendProjectNavigation
          navigationOptions={navigationOptions}
          onNavigate={handleNavigationClick}
        />
      )}
      <div className="p-6 md:ml-[150px] md:flex-1">
        <h1 className="text-4xl font-bold text-secondaryColorLightTheme mb-8 dark:text-secondaryColorDarkTheme">
          {project?.name}
        </h1>
        <p className="text-gray-800 text-sm text-pretty mb-8 dark:text-gray-300">
          {project?.description}
        </p>

        {selectedModule ? (
          <ModuleDetails module={selectedModule} />
        ) : (
          <p className="text-red-500">
            {nameModule
              ? `The module "${nameModule}" does not exist or has no content.`
              : "Please select a module to view its details."}
          </p>
        )}
      </div>
    </main>
  );
}

export default BackendDetails;
