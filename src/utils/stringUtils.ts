export function generateId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function generateNameProject(name: string) {
  const formattedTitle = name.replace(/\s+/g, "");
  return formattedTitle.charAt(0).toLowerCase() + formattedTitle.slice(1);
}