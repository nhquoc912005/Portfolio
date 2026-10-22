import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Hero } from "../sections/Hero";
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  SkillsSection,
} from "../sections/SupportingSections";
import { SectionHeading } from "../components/common/SectionHeading";
import { Timeline } from "../components/journey/Timeline";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/I18nContext";
import { translations } from "../i18n/translations";

export default function Home() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <main id="main-content">
      <Hero />
      <AboutSection />
      <section className="section journey-section" id="journey">
        <div className="container">
          <SectionHeading
            eyebrow={copy.journeyEyebrow}
            title={copy.journeyTitle}
            description={copy.journeyLead}
            action={
              <Link className="text-link" to="/journey">
                {copy.journeyMore}
                <ArrowUpRight size={17} />
              </Link>
            }
          />
          <Timeline compact />
        </div>
      </section>
      <section className="section featured-section" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow={copy.featuredEyebrow}
            title={copy.featuredTitle}
            description={copy.featuredLead}
            action={
              <Link className="text-link" to="/projects">
                {copy.allProjects}
                <ArrowUpRight size={17} />
              </Link>
            }
          />
          <div className="projects-grid">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>
        </div>
      </section>
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
