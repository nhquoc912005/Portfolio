import { ArrowUpRight, Compass } from "lucide-react";
import { Link } from "react-router";
import { Timeline } from "../components/journey/Timeline";
import { useI18n } from "../i18n/I18nContext";
import { translations } from "../i18n/translations";

export default function Journey() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <main id="main-content" className="journey-page">
      <section className="page-heading container">
        <p className="eyebrow">{copy.journeyEyebrow}</p>
        <h1 className="page-title">{copy.journeyPageTitle}</h1>
        <p className="page-lead">{copy.journeyPageLead}</p>
      </section>
      <div className="container">
        <Timeline />
        <div className="next-chapter">
          <Compass size={27} />
          <h2>{copy.nextChapter}</h2>
          <p>{copy.nextChapterText}</p>
          <Link className="text-link" to="/projects">
            {copy.allProjects}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </main>
  );
}
