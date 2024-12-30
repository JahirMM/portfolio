import { useSearchParams } from "react-router-dom";
import { PRIME_TECH_BACKEND_INTERFACE } from "@/interfaces/backendInterfaces";

export function useSelectedModule(project?: PRIME_TECH_BACKEND_INTERFACE) {
  const [searchParams] = useSearchParams();
  const nameModule = searchParams.get("nameModule");

  const selectedModule =
    nameModule && project?.modules
      ? project.modules[nameModule as keyof typeof project.modules]
      : null;

  return { nameModule, selectedModule };
}
