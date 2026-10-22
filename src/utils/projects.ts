import type { Category, Language, Project } from "../types";

export function filterProjects(
  projects: readonly Project[],
  category: Category | "all",
  query = "",
  language: Language = "vi",
) {
  const needle = query.trim().toLocaleLowerCase(language);
  return projects.filter(
    (project) =>
      (category === "all" || project.categories.includes(category)) &&
      (!needle ||
        `${project.title[language]} ${project.summary[language]} ${project.technologies.join(" ")}`
          .toLocaleLowerCase(language)
          .includes(needle)),
  );
}

export function formatProjectDate(
  project: Pick<Project, "startDate" | "endDate" | "ongoing">,
  language: Language,
) {
  if (!project.startDate) return null;
  const format = (date: string) => `${date.slice(5, 7)}/${date.slice(0, 4)}`;
  const end = project.ongoing
    ? language === "vi"
      ? "hiện tại"
      : "present"
    : project.endDate
      ? format(project.endDate)
      : null;
  return `${format(project.startDate)}${end ? ` – ${end}` : ""}`;
}
