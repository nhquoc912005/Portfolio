import { ArrowUpRight, Compass, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/I18nContext";
import { translations } from "../i18n/translations";
import { SkillsSection, ContactSection } from "../sections/SupportingSections";

export default function About() {
  const { language, t } = useI18n();
  const copy = translations[language];
  return (
    <main id="main-content">
      <section className="page-heading container about-heading">
        <p className="eyebrow">{copy.aboutEyebrow}</p>
        <h1 className="page-title">{copy.aboutPageTitle}</h1>
        <p className="page-lead">{copy.aboutPageIntro}</p>
      </section>
      <section className="container about-page-grid">
        <div
          className={`profile-placeholder${profile.portrait ? " has-portrait" : ""}`}
          role={profile.portrait ? undefined : "img"}
          aria-label={profile.portrait ? undefined : profile.name}
        >
          {profile.portrait ? (
            <img
              className="profile-photo"
              src={profile.portrait.src}
              alt={t(profile.portrait.alt)}
            />
          ) : (
            <span className="profile-avatar">
              {profile.initials}
              <i>.</i>
            </span>
          )}
          <p>{profile.name}</p>
          <small>{copy.student}</small>
          <div className="profile-coordinate">{profile.since} → ∞</div>
        </div>
        <div className="about-prose">
          <h2>{copy.who}</h2>
          <p>{t(profile.introduction)}</p>
          <h2>
            <GraduationCap size={22} />
            {copy.academic}
          </h2>
          <h3>{t(profile.university)}</h3>
          <p>
            {t(profile.major)}
            <br />
            {profile.since} – {copy.present}
          </p>
          <h2>
            <Compass size={22} />
            {copy.direction}
          </h2>
          <p>{t(profile.direction)}</p>
          <Link to="/journey" className="text-link">
            {copy.journeyButton}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container interests-section">
        <p className="eyebrow">{copy.interests}</p>
        <div>
          {profile.interests.map((interest) => (
            <span key={interest.en}>{t(interest)}</span>
          ))}
        </div>
      </section>
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
