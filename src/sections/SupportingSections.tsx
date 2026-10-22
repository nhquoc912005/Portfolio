import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Braces,
  ChartNoAxesCombined,
  Check,
  CircleCheck,
  Copy,
  Database,
  Github,
  GraduationCap,
  Languages,
  Mail,
  Network,
  Server,
  Wrench,
} from "lucide-react";
import { Link } from "react-router";
import { SectionHeading } from "../components/common/SectionHeading";
import { CvButton } from "../components/common/CvButton";
import { ImageGallery } from "../components/projects/ImageGallery";
import { profile } from "../data/profile";
import { achievements } from "../data/achievements";
import { skills } from "../data/skills";
import { useI18n } from "../i18n/I18nContext";
import { translations } from "../i18n/translations";
import { useClipboard } from "../hooks/useClipboard";

export function AboutSection() {
  const { language, t } = useI18n();
  const copy = translations[language];
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div>
          <SectionHeading
            eyebrow={copy.aboutEyebrow}
            title={copy.aboutTitle}
            description={copy.aboutLead}
          />
          <Link className="text-link" to="/about">
            {copy.aboutMore}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="education-card">
          <div className="education-top">
            <span className="outline-icon">
              <GraduationCap size={27} />
            </span>
            <p>
              {copy.studying}
              <strong>
                {profile.since} — {copy.present}
              </strong>
            </p>
            <span className="education-mark">DUE</span>
          </div>
          <h3>{t(profile.major)}</h3>
          <p>{t(profile.university)}</p>
          <div className="education-bottom">
            <span>{copy.academic}</span>
            <span className="tag">
              {copy.technology} × {copy.business}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const skillIcons = {
  code: Braces,
  server: Server,
  database: Database,
  testing: CircleCheck,
  data: ChartNoAxesCombined,
  business: Network,
  tools: Wrench,
};

export function SkillsSection() {
  const { language, t } = useI18n();
  const copy = translations[language];
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          eyebrow={copy.skillsEyebrow}
          title={copy.skillsTitle}
          description={copy.skillsLead}
        />
        <div className="skills-grid">
          {skills.map((group) => {
            const Icon = skillIcons[group.icon];
            return (
              <article className="skill-card" key={group.icon}>
                <Icon size={22} />
                <h3>{t(group.title)}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={typeof item === "string" ? item : item.en}>
                      {typeof item === "string" ? item : t(item)}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="project-technologies">
          <span className="eyebrow">{copy.projectTech}</span>
          <div className="skill-tags">
            {[
              "React",
              "TypeScript",
              "FastAPI",
              "Flutter",
              "Java",
              "PyTorch",
              "Supabase",
              "Selenium",
            ].map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <p>{copy.projectTechNote}</p>
        </div>
      </div>
    </section>
  );
}

export function AchievementCards() {
  const { t } = useI18n();
  const icons = { research: BookOpen, chart: Award, language: Languages };
  return (
    <div className="achievements-grid">
      {achievements.map((item) => {
        const Icon = icons[item.icon];
        return (
          <article className="achievement-card" key={item.id}>
            <div className="achievement-top">
              <span className="outline-icon">
                <Icon size={24} />
              </span>
              <span className="achievement-label">{item.label}</span>
            </div>
            <span className="eyebrow">{t(item.type)}</span>
            <h3>{t(item.title)}</h3>
            <p>{t(item.description)}</p>
            {item.image && <ImageGallery images={[item.image]} />}
          </article>
        );
      })}
    </div>
  );
}

export function AchievementsSection() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          eyebrow={copy.achievementsEyebrow}
          title={copy.achievementsTitle}
          action={
            <Link className="text-link" to="/achievements">
              {copy.achievementsMore}
              <ArrowUpRight size={17} />
            </Link>
          }
        />
        <AchievementCards />
      </div>
    </section>
  );
}

export function ContactSection() {
  const { language } = useI18n();
  const copy = translations[language];
  const { status, copy: copyText } = useClipboard();
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-decoration" aria-hidden="true">
            ↗
          </div>
          <div className="contact-content">
            <p className="eyebrow">{copy.contactEyebrow}</p>
            <h2 className="section-title">{copy.contactTitle}</h2>
            <p className="contact-lead">{copy.contactLead}</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={23} />
            </a>
            <div className="contact-actions">
              <a
                className="button button-white"
                href={`mailto:${profile.email}`}
              >
                <Mail size={17} />
                {copy.emailMe}
                <ArrowRight size={16} />
              </a>
              <button
                className="button button-translucent"
                onClick={() => void copyText(profile.email)}
              >
                {status === "success" ? (
                  <Check size={16} />
                ) : (
                  <Copy size={16} />
                )}
                {status === "success" ? copy.copied : copy.copyEmail}
              </button>
              <a
                className="contact-github"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
                {copy.visitGithub}
                <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="copy-status" role="status">
              {status === "error"
                ? copy.copyFailed
                : status === "success"
                  ? copy.copied
                  : ""}
            </p>
          </div>
          <div className="contact-cv">
            <CvButton className="button button-translucent" />
          </div>
        </div>
      </div>
    </section>
  );
}
