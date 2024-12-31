import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BackendProjectNavigation from "@/components/projects/projectDetails/backend/BackendProjectNavigation";
import ModuleDetails from "@/components/projects/projectDetails/backend/ModuleDetails";
import SubMenu from "@/components/projects/projectDetails/backend/SubMenu";
import DiagramComponent from "./DiagramComponent";

import { useBackendProject } from "@/hooks/useBackendProject";
import { useSelectedModule } from "@/hooks/useSelectedModule";

function BackendDetails() {
  const navigate = useNavigate();
  const { project, navigationOptions } = useBackendProject();
  const { nameModule, selectedModule } = useSelectedModule(project);

  useEffect(() => {
    if (!project) {
      navigate("/not-found", { replace: true });
    }
  }, [project, navigate]);

  useEffect(() => {
    if (nameModule && !selectedModule) {
      navigate("/not-found", { replace: true });
    } else {
      const titleElement = document.getElementById("moduleTitle");

      if (titleElement) {
        const yOffset = -80;
        const y =
          titleElement.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [nameModule]);

  if (!project || (nameModule && !selectedModule)) {
    return null;
  }

  return (
    <div className="md:flex">
      {navigationOptions && (
        <BackendProjectNavigation
          navigationOptions={navigationOptions}
          nameModule={nameModule}
        />
      )}
      <div className="mt-16 px-10 pt-10 grid grid-cols-1 lg:grid-cols-4 lg:p-0 lg:m-0 lg:gap-4">
        <article className="md:ml-[185px] lg:col-start-1 lg:col-end-4 lg:px-8 lg:pt-10 2xl:px-20">
          <h1 className="text-4xl font-bold text-secondaryColorLightTheme mb-8 dark:text-secondaryColorDarkTheme">
            {project?.name}
          </h1>
          <p className="text-gray-800 text-sm text-pretty mb-8 dark:text-gray-300">
            {project?.description}
          </p>

          {project?.diagram && project.diagram.length > 0 && (
            <DiagramComponent diagrams={project.diagram} />
          )}

          {selectedModule && <ModuleDetails module={selectedModule} />}
        </article>
        <aside className="lg:pt-10">
          <SubMenu apisList={selectedModule.apis} />
        </aside>
      </div>
    </div>
  );
}

export default BackendDetails;
