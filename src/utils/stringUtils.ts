export function generateId(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
