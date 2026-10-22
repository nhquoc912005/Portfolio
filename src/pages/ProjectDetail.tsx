import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  FileText,
  Github,
  Layers3,
  Users,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { projects } from "../data/projects";
import { ImageGallery } from "../components/projects/ImageGallery";
import { ProjectVisual } from "../components/projects/ProjectVisual";
import { useI18n } from "../i18n/I18nContext";
import { categoryLabels, projectCopy, roleLabels } from "../i18n/projectCopy";
import type { Localized, Project } from "../types";
import { formatProjectDate } from "../utils/projects";

function DetailList({ items }: Readonly<{ items: readonly Localized[] }>) {
  const { t } = useI18n();
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item.en}>
          <Check size={17} aria-hidden="true" />
          <span>{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectFacts({ project }: Readonly<{ project: Project }>) {
  const { language, t } = useI18n();
  const date = formatProjectDate(project, language);
  return (
    <aside className="detail-aside">
      <div className="detail-facts">
        <p className="eyebrow">{t(projectCopy.projectFacts)}</p>
        <div className="fact-row">
          <Users size={18} aria-hidden="true" />
          <div>
            <span>{t(projectCopy.role)}</span>
            <strong>{t(roleLabels[project.role])}</strong>
          </div>
        </div>
        {date && (
          <div className="fact-row">
            <CalendarDays size={18} aria-hidden="true" />
            <div>
              <span>{t(projectCopy.date)}</span>
              <strong>{date}</strong>
            </div>
          </div>
        )}
        <div className="fact-row">
          <Layers3 size={18} aria-hidden="true" />
          <div>
            <span>{t(projectCopy.categories)}</span>
            <strong>
              {project.categories
                .map((category) => t(categoryLabels[category]))
                .join(" · ")}
            </strong>
          </div>
        </div>
        {project.technologies.length > 0 && (
          <div className="detail-tech">
            <h3>
              {t(
                project.visual === "research"
                  ? projectCopy.tools
                  : projectCopy.technologies,
              )}
            </h3>
            <ul className="tag-list tech-stack">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <p>{t(projectCopy.technologiesNote)}</p>
          </div>
        )}
        <div className="detail-source">
          <span>{t(projectCopy.source)}</span>
          <p>
            {t(
              project.verificationStatus === "repository-reviewed"
                ? projectCopy.reviewed
                : projectCopy.ownerProvided,
            )}
          </p>
        </div>
      </div>
    </aside>
  );
}

function ProjectSections({ project }: Readonly<{ project: Project }>) {
  const { t } = useI18n();
  const isResearch = project.visual === "research";
  return (
    <div className="detail-main">
      {project.overview.vi && (
        <section className="detail-section">
          <p className="section-index">01 /</p>
          <h2>
            {t(
              isResearch ? projectCopy.researchOverview : projectCopy.overview,
            )}
          </h2>
          <p>{t(project.overview)}</p>
        </section>
      )}
      {project.problem.vi && (
        <section className="detail-section">
          <h2>{t(projectCopy.problem)}</h2>
          <p>{t(project.problem)}</p>
        </section>
      )}
      {project.objectives.length > 0 && (
        <section className="detail-section">
          <h2>
            {t(
              isResearch
                ? projectCopy.researchObjectives
                : projectCopy.objectives,
            )}
          </h2>
          <DetailList items={project.objectives} />
        </section>
      )}
      {project.features.length > 0 && (
        <section className="detail-section">
          <p className="section-index">02 /</p>
          <h2>
            {t(isResearch ? projectCopy.methodology : projectCopy.features)}
          </h2>
          {!isResearch && (
            <p className="detail-section-note">{t(projectCopy.featuresNote)}</p>
          )}
          <DetailList items={project.features} />
        </section>
      )}
      <section className="detail-section detail-contributions">
        <p className="section-index">03 /</p>
        <h2>
          {t(
            project.visual === "chat"
              ? projectCopy.collaboration
              : projectCopy.contributions,
          )}
        </h2>
        <span className={`role-label role-${project.role}`}>
          {t(roleLabels[project.role])}
        </span>
        {project.contributions?.length ? (
          <DetailList items={project.contributions} />
        ) : (
          <p className="contributions-pending">
            {t(projectCopy.contributionsPending)}
          </p>
        )}
      </section>
      {project.architecture && (
        <section className="detail-section">
          <h2>{t(projectCopy.architecture)}</h2>
          <p>{t(project.architecture)}</p>
        </section>
      )}
      {project.images.length > 0 && (
        <section className="detail-section">
          <h2>{t(projectCopy.gallery)}</h2>
          <ImageGallery images={project.images} />
        </section>
      )}
      {project.documents.length > 0 && (
        <section className="detail-section">
          <h2>{t(projectCopy.documents)}</h2>
          <ul className="document-list">
            {project.documents.map((document) => (
              <li key={document.url}>
                <a
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={21} aria-hidden="true" />
                  <span>
                    <strong>{t(document.title)}</strong>
                    <small>{t(projectCopy.openDocument)}</small>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function ProjectNotFound() {
  const { t } = useI18n();
  return (
    <main id="main-content" className="page-shell project-not-found">
      <div className="container">
        <span className="error-number">404</span>
        <h1>{t(projectCopy.notFound)}</h1>
        <p>{t(projectCopy.notFoundDescription)}</p>
        <Link className="button button-primary" to="/projects">
          <ArrowLeft size={17} aria-hidden="true" />
          {t(projectCopy.back)}
        </Link>
      </div>
    </main>
  );
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) return <ProjectNotFound />;
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main id="main-content" className="project-detail page-shell">
      <div className="container">
        <Link className="detail-breadcrumb text-link" to="/projects">
          <ArrowLeft size={16} aria-hidden="true" />
          {t(projectCopy.back)}
        </Link>
        <header className="detail-hero">
          <div className="detail-hero-copy">
            <div className="detail-category-list">
              {project.categories.map((category) => (
                <span key={category}>{t(categoryLabels[category])}</span>
              ))}
            </div>
            <h1 className="detail-title">{t(project.title)}</h1>
            <p className="detail-summary">{t(project.summary)}</p>
            <div className="detail-actions">
              <span className={`role-label role-${project.role}`}>
                <Users size={15} aria-hidden="true" />
                {t(roleLabels[project.role])}
              </span>
              {project.githubUrl && (
                <a
                  className="button button-primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} aria-hidden="true" />
                  {t(projectCopy.github)}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
          <ProjectVisual project={project} index={index} large />
        </header>
        <div className="detail-layout">
          <ProjectSections project={project} />
          <ProjectFacts project={project} />
        </div>
        <nav className="detail-navigation" aria-label={t(projectCopy.next)}>
          <Link className="text-link" to="/projects">
            <ArrowLeft size={17} aria-hidden="true" />
            {t(projectCopy.back)}
          </Link>
          {nextProject && (
            <Link className="next-project" to={`/projects/${nextProject.slug}`}>
              <span>
                <small>{t(projectCopy.next)}</small>
                <strong>{t(nextProject.shortTitle)}</strong>
              </span>
              <ArrowRight size={23} aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}

export default ProjectDetail;
