import { useSearchParams } from "react-router-dom";
import {
  PRIME_TECH_BACKEND_INTERFACE,
  WRITE_NOTE_INTERFACE,
} from "@/interfaces/backendInterfaces";

export function useSelectedModule<T extends PRIME_TECH_BACKEND_INTERFACE | WRITE_NOTE_INTERFACE>(
  project?: T
) {
  const [searchParams] = useSearchParams();
  const nameModule = searchParams.get("nameModule");

  const selectedModule =
    nameModule && project?.modules
      ? project.modules[nameModule as keyof typeof project.modules]
      : null;

  return { nameModule, selectedModule };
}
