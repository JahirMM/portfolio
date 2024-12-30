import { useParams } from "react-router-dom";
import { PRIME_TECH_BACKEND_INTERFACE } from "@/interfaces/backendInterfaces";
import { PRIME_TECH_BACKEND } from "@/data/backendProjectDetails/primeTechBackend";

export function useBackendProject() {
  const { nameProject } = useParams<{ nameProject: string | undefined }>();

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

  const navigationOptions = BACKEND_PROJECTS.find(
    (proj) =>
      proj.name.toLowerCase().replace(/\s+/g, "") === nameProject?.toLowerCase()
  )?.navegation;

  return { project, navigationOptions };
}
