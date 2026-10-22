import {
  FileText,
  FlaskConical,
  Leaf,
  MessagesSquare,
  Route,
  Smartphone,
  Store,
} from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import {
  categoryLabels,
  projectCopy,
  visualLabels,
} from "../../i18n/projectCopy";
import type { Project } from "../../types";

const visualIcons = {
  document: FileText,
  rice: Leaf,
  shuttle: Route,
  chat: MessagesSquare,
  mobile: Smartphone,
  store: Store,
  research: FlaskConical,
};

export function ProjectVisual({
  project,
  index = 0,
  large = false,
}: Readonly<{ project: Project; index?: number; large?: boolean }>) {
  const { t } = useI18n();
  const Icon = visualIcons[project.visual];

  return (
    <div
      className={`project-visual visual-${project.visual}${large ? " project-visual-large" : ""}`}
    >
      <div className="visual-category">
        <span>{t(categoryLabels[project.categories[0] ?? "all"])}</span>
        <span className="visual-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="visual-illustration" aria-hidden="true">
        <span className="visual-orbit visual-orbit-one" />
        <span className="visual-orbit visual-orbit-two" />
        <span className="visual-spark visual-spark-one" />
        <span className="visual-spark visual-spark-two" />
        <span className="visual-icon">
          <Icon strokeWidth={1.35} />
        </span>
        <span className="visual-node visual-node-one" />
        <span className="visual-node visual-node-two" />
      </div>
      <div className="visual-caption">
        <span>{t(visualLabels[project.visual])}</span>
        <small>{t(projectCopy.illustration)}</small>
      </div>
    </div>
  );
}

export default ProjectVisual;
