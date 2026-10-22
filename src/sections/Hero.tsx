import {
  ArrowDown,
  ArrowRight,
  Braces,
  ChartNoAxesCombined,
  Database,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/I18nContext";
import { translations } from "../i18n/translations";
import { CvButton } from "../components/common/CvButton";

function JourneyArtwork() {
  const { language, t } = useI18n();
  const copy = translations[language];
  return (
    <div
      className="hero-art"
      role="img"
      aria-label={
        profile.portrait ? t(profile.portrait.alt) : copy.illustration
      }
    >
      <div className="art-grid" />
      <div className="orbit orbit-outer" />
      <div className="orbit orbit-middle" />
      <div className="orbit orbit-inner" />
      <div className="art-coordinate coord-top">23° → ∞</div>
      <div className="art-coordinate coord-bottom">{copy.learning}</div>
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
      <span className="orbit-cross">+</span>
      <div className="art-center">
        {profile.portrait ? (
          <img
            className="art-portrait"
            src={profile.portrait.src}
            alt={t(profile.portrait.alt)}
          />
        ) : (
          <span className="art-center-label">
            {profile.initials}
            <span>.</span>
          </span>
        )}
        <span className="art-center-sub">{copy.artTheme}</span>
      </div>
      <div className="art-tag art-tag-code">
        <span className="art-tag-icon">
          <Braces size={23} />
        </span>
        <span>
          {copy.technology}
          <small>{copy.artBuild}</small>
        </span>
      </div>
      <div className="art-tag art-tag-data">
        <span className="art-tag-icon">
          <ChartNoAxesCombined size={22} />
        </span>
        <span>
          {copy.data}
          <small>{copy.artExplore}</small>
        </span>
      </div>
      <div className="art-symbol symbol-branch">
        <GitBranch size={20} />
      </div>
      <div className="art-symbol symbol-database">
        <Database size={20} />
      </div>
      <div className="art-since">
        <span>{copy.since}</span>
        <strong>
          {profile.since}
          <span>↗</span>
        </strong>
      </div>
    </div>
  );
}

export function Hero() {
  const { language, t } = useI18n();
  const copy = translations[language];
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-intro">
            <span />
            {copy.hello}
          </p>
          <h1>
            {profile.name}
            <span className="name-period">.</span>
          </h1>
          <h2>
            {copy.heroLine1}
            <br />
            <span>{copy.heroLine2}</span>
          </h2>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-description">{t(profile.introduction)}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/journey">
              {copy.journeyButton}
              <ArrowRight size={17} />
            </Link>
            <Link className="button button-outline" to="/projects">
              {copy.projectsButton}
              <ArrowRight size={17} />
            </Link>
          </div>
          <CvButton />
          <div className="hero-study">
            <span className="tiny-line" />
            <span>
              {t(profile.major)}
              <br />
              <strong>{t(profile.university)}</strong>
            </span>
          </div>
        </div>
        <JourneyArtwork />
      </div>
      <div className="container hero-bottom">
        <a href="#about" className="scroll-cue">
          <ArrowDown size={15} />
          {copy.scroll}
        </a>
        <p>
          {copy.student}
          <span>{t(profile.location)}</span>
        </p>
      </div>
    </section>
  );
}
