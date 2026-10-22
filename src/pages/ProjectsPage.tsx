import { useState } from "react";
import { ArrowUpRight, SearchX } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectFilter } from "../components/projects/ProjectFilter";
import { useI18n } from "../i18n/I18nContext";
import { projectCopy } from "../i18n/projectCopy";
import type { Category } from "../types";
import { filterProjects } from "../utils/projects";

export function ProjectsPage() {
  const { language, t } = useI18n();
  const [category, setCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const visibleProjects = filterProjects(projects, category, query, language);
  const filtered = category !== "all" || query.trim().length > 0;
  const resetFilters = () => {
    setCategory("all");
    setQuery("");
  };

  return (
    <main id="main-content" className="projects-page page-shell">
      <div className="container">
        <header className="page-heading projects-heading">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            {t(projectCopy.eyebrow)}
          </p>
          <h1 className="page-title">
            {t(projectCopy.title)}
            <br />
            <span>{t(projectCopy.titleAccent)}</span>
          </h1>
          <p className="page-lead">{t(projectCopy.introduction)}</p>
          <span className="page-heading-mark" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </header>
        <ProjectFilter
          category={category}
          query={query}
          onCategoryChange={setCategory}
          onQueryChange={setQuery}
        />
        <div className="project-results-bar">
          <p aria-live="polite">
            <strong>
              {visibleProjects.length.toString().padStart(2, "0")}
            </strong>
            {filtered && (
              <>
                {" "}
                {t(projectCopy.resultOf)}{" "}
                {projects.length.toString().padStart(2, "0")}
              </>
            )}{" "}
            {t(projectCopy.results)}
          </p>
          {filtered && (
            <button className="text-link" type="button" onClick={resetFilters}>
              {t(projectCopy.clearFilters)}
            </button>
          )}
        </div>
        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
        ) : (
          <section
            className="projects-empty"
            aria-label={t(projectCopy.emptyTitle)}
          >
            <SearchX size={36} aria-hidden="true" />
            <h2>{t(projectCopy.emptyTitle)}</h2>
            <p>{t(projectCopy.emptyDescription)}</p>
            <button
              className="button button-primary"
              type="button"
              onClick={resetFilters}
            >
              {t(projectCopy.clearFilters)}
            </button>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProjectsPage;
