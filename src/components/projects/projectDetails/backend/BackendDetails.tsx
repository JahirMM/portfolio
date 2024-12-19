import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { PRIME_TECH_BACKEND_INTERFACE } from "@/interfaces/backendInterfaces";
import { PRIME_TECH_BACKEND } from "@/data/backendProjectDetails/primeTechBackend";

import BackendProjectNavigation from "@/components/projects/projectDetails/backend/BackendProjectNavigation";
import ModuleDetails from "@/components/projects/projectDetails/backend/ModuleDetails";
import SubMenu from "./SubMenu";

function BackendDetails() {
  const navigate = useNavigate();
  const { nameProject } = useParams<{ nameProject: string | undefined }>();
  const [searchParams] = useSearchParams();
  const nameModule = searchParams.get("nameModule");

  const BACKEND_PROJECTS = [
    {
      name: "Prime Tech Backend",
      data: PRIME_TECH_BACKEND,
      navegation: Object.keys(PRIME_TECH_BACKEND.modules || {}).map(
        (moduleKey) => ({
          nameOption:
            moduleKey.charAt(0).toUpperCase() +
            moduleKey.slice(1).replace(/([A-Z])/g, " $1"),
          url: moduleKey,
        })
      ),
    },
  ];

  const project = BACKEND_PROJECTS.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "") === nameProject?.toLowerCase()
  )?.data as PRIME_TECH_BACKEND_INTERFACE | undefined;

  const selectedModule =
    nameModule && project?.modules
      ? project.modules[nameModule as keyof typeof project.modules]
      : null;

  const navigationOptions = BACKEND_PROJECTS.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "") === nameProject?.toLowerCase()
  )?.navegation;

  const handleNavigationClick = (moduleUrl: string) => {
    navigate(`/backend-project/${nameProject}?nameModule=${moduleUrl}`);
  };

  useEffect(() => {
    if (!project) {
      navigate("/not-found");
    }
  }, [project, navigate]);

  const generateId = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <main className="md:flex">
      {navigationOptions && (
        <BackendProjectNavigation
          navigationOptions={navigationOptions}
          onNavigate={handleNavigationClick}
          nameModule={nameModule}
        />
      )}
      <div className="flex flex-col-reverse mt-12 p-6 md:ml-[150px] md:flex-1">
        <div>
          <h1 className="text-4xl font-bold text-secondaryColorLightTheme mb-8 dark:text-secondaryColorDarkTheme">
            {project?.name}
          </h1>
          <p className="text-gray-800 text-sm text-pretty mb-8 dark:text-gray-300">
            {project?.description}
          </p>

          {selectedModule ? (
            <ModuleDetails module={selectedModule} generateId={generateId} />
          ) : (
            <p className="text-red-500">
              {nameModule
                ? `The module "${nameModule}" does not exist or has no content.`
                : "Please select a module to view its details."}
            </p>
          )}
        </div>
        <SubMenu apisList={selectedModule.apis} generateId={generateId} />
      </div>
    </main>
  );
}

export default BackendDetails;
