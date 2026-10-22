import { Search, X } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { categoryLabels, projectCopy } from "../../i18n/projectCopy";
import type { Category } from "../../types";

const categories: readonly (Category | "all")[] = [
  "all",
  "web",
  "mobile",
  "testing",
  "ai",
  "data",
  "business",
  "research",
];

type ProjectFilterProps = Readonly<{
  category: Category | "all";
  query: string;
  onCategoryChange: (category: Category | "all") => void;
  onQueryChange: (query: string) => void;
}>;

export function ProjectFilter({
  category,
  query,
  onCategoryChange,
  onQueryChange,
}: ProjectFilterProps) {
  const { t } = useI18n();
  return (
    <div className="project-tools">
      <div className="project-search">
        <Search size={19} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={t(projectCopy.searchPlaceholder)}
          aria-label={t(projectCopy.search)}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label={t(projectCopy.clearSearch)}
          >
            <X size={17} aria-hidden="true" />
          </button>
        )}
      </div>
      <div
        className="project-filters"
        role="group"
        aria-label={t(projectCopy.filters)}
      >
        {categories.map((item) => (
          <button
            className={`filter-pill${category === item ? " active" : ""}`}
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => onCategoryChange(item)}
          >
            {t(categoryLabels[item])}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilter;
