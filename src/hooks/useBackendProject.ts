import { useParams } from "react-router-dom";
import { PRIME_TECH_BACKEND_INTERFACE, WRITE_NOTE_INTERFACE } from "@/interfaces/backendInterfaces";

import { PRIME_TECH_BACKEND } from "@/data/backendProjectDetails/primeTechBackend";
import { WRITE_NOTE_BACKEND } from "@/data/backendProjectDetails/writeNoteBackend";

type BackendProject = {
  name: string;
  data: PRIME_TECH_BACKEND_INTERFACE | WRITE_NOTE_INTERFACE;
};

const PROJECTS: Record<string, () => BackendProject> = {
  primetechbackend: () => ({
    name: "Prime Tech Backend",
    data: PRIME_TECH_BACKEND,
  }),
  writenotebackend: () => ({
    name: "Write Note Backend",
    data: WRITE_NOTE_BACKEND,
  }),
};

export function useBackendProject() {
  const { nameProject } = useParams<{ nameProject: string | undefined }>();

  const normalizedProject = nameProject?.toLowerCase().replace(/\s+/g, "");

  const project = PROJECTS[normalizedProject!]?.().data;

  const navigationOptions = project
    ? Object.keys(project.modules || {}).map((moduleKey) => ({
        nameOption:
          moduleKey.charAt(0).toUpperCase() +
          moduleKey.slice(1).replace(/([A-Z])/g, " $1"),
        url: moduleKey,
      }))
    : [];

  return { project, navigationOptions };
}
