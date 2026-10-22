import {
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Code2,
  GraduationCap,
  Workflow,
} from "lucide-react";
import { Link } from "react-router";
import { journey } from "../../data/journey";
import { useI18n } from "../../i18n/I18nContext";
import { translations } from "../../i18n/translations";

const icons = {
  education: GraduationCap,
  research: BookOpen,
  code: Code2,
  data: ChartNoAxesCombined,
  workflow: Workflow,
};

export function Timeline({ compact = false }: { compact?: boolean }) {
  const { language, t } = useI18n();
  const items = compact
    ? journey.filter((item) =>
        ["university", "grocery", "documents"].includes(item.id),
      )
    : journey;
  return (
    <div className={`timeline${compact ? " timeline-compact" : ""}`}>
      {items.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-marker">
              <Icon size={18} />
            </div>
            <div className="timeline-card">
              <span className="timeline-period">
                {t(item.period)}
                <span>0{index + 1}</span>
              </span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.description)}</p>
              {item.projectSlug ? (
                <Link
                  className="text-link timeline-action"
                  to={`/projects/${item.projectSlug}`}
                >
                  {translations[language].related}
                  <ArrowUpRight size={15} />
                </Link>
              ) : item.detail ? (
                <details>
                  <summary>
                    {translations[language].details}
                    <ArrowUpRight size={14} />
                  </summary>
                  <p>{t(item.detail)}</p>
                </details>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
