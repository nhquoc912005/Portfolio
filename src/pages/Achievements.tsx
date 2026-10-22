import {
  AchievementCards,
  ContactSection,
} from "../sections/SupportingSections";
import { useI18n } from "../i18n/I18nContext";
import { translations } from "../i18n/translations";

export default function Achievements() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <main id="main-content">
      <section className="page-heading container">
        <p className="eyebrow">{copy.achievementsEyebrow}</p>
        <h1 className="page-title">{copy.achievementsTitle}</h1>
        <p className="page-lead">{copy.achievementsLead}</p>
      </section>
      <div className="container achievements-page-content">
        <AchievementCards />
      </div>
      <ContactSection />
    </main>
  );
}
