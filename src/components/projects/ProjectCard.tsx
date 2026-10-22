import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router";
import { useI18n } from "../../i18n/I18nContext";
import { projectCopy, roleLabels } from "../../i18n/projectCopy";
import type { Project } from "../../types";
import { formatProjectDate } from "../../utils/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({
  project,
  index = 0,
}: Readonly<{ project: Project; index?: number }>) {
  const { language, t } = useI18n();
  const date = formatProjectDate(project, language);

  return (
    <article className="project-card">
      <Link
        className="project-visual-link"
        to={`/projects/${project.slug}`}
        aria-label={`${t(projectCopy.view)}: ${t(project.title)}`}
      >
        <ProjectVisual project={project} index={index} />
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span className={`role-label role-${project.role}`}>
            {t(roleLabels[project.role])}
          </span>
          {date && <span>{date}</span>}
        </div>
        <h3 className="project-title">
          <Link to={`/projects/${project.slug}`}>{t(project.shortTitle)}</Link>
        </h3>
        <p className="project-summary">{t(project.summary)}</p>
        {project.technologies.length > 0 && (
          <ul className="tag-list" aria-label={t(projectCopy.technologies)}>
            {project.technologies.slice(0, 3).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
            {project.technologies.length > 3 && (
              <li title={project.technologies.slice(3).join(", ")}>
                +{project.technologies.length - 3}
              </li>
            )}
          </ul>
        )}
        <div className="project-card-footer">
          <Link className="text-link" to={`/projects/${project.slug}`}>
            {t(projectCopy.view)} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          {project.githubUrl && (
            <a
              className="project-github"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t(projectCopy.github)}: ${t(project.shortTitle)}`}
            >
              <Github size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
