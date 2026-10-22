import { Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Github,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, Outlet, matchPath, useLocation } from "react-router";
import { profile } from "../../data/profile";
import { useI18n } from "../../i18n/I18nContext";
import { translations } from "../../i18n/translations";
import { projects } from "../../data/projects";
import { RouteErrorBoundary } from "../common/RouteErrorBoundary";

function Navigation({ close }: { close?: () => void }) {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <>
      {(
        [
          ["/", copy.home],
          ["/about", copy.about],
          ["/journey", copy.journey],
          ["/projects", copy.projects],
          ["/achievements", copy.achievements],
        ] as const
      ).map(([to, label]) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          onClick={close}
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
}

function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const copy = translations[language];
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link
          to="/"
          className="brand"
          aria-label={`${profile.name} — ${copy.home}`}
        >
          {profile.portrait ? (
            <span className="brand-avatar">
              <img src={profile.portrait.src} alt={t(profile.portrait.alt)} />
            </span>
          ) : (
            <span className="brand-monogram">
              nq<span>.</span>
            </span>
          )}
          <span className="brand-label">
            {profile.name}
            <small>{copy.portfolio}</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label={copy.explore}>
          <Navigation />
        </nav>
        <div className="nav-actions">
          <div
            className="language-switch"
            role="group"
            aria-label={copy.languageLabel}
          >
            <button
              aria-label="Tiếng Việt"
              aria-pressed={language === "vi"}
              onClick={() => setLanguage("vi")}
            >
              VN
            </button>
            <span>/</span>
            <button
              aria-label="English"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <Link className="nav-contact" to="/#contact">
            {copy.contact}
            <ArrowUpRight size={15} />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle icon-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            ref={menu}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label={copy.explore}
          >
            <Navigation close={() => setOpen(false)} />
            <Link
              className="nav-link"
              to="/#contact"
              onClick={() => setOpen(false)}
            >
              {copy.contact}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link to="/" className="brand-monogram">
            nq<span>.</span>
          </Link>
          <p>{copy.footerLine}</p>
          <a
            className="footer-github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.visitGithub}
          >
            <Github size={19} />
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.name}. {copy.rights}
          </p>
          <Link to="/journey">
            {copy.journey}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const { language } = useI18n();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    visible && (
      <button
        className="back-to-top icon-button"
        aria-label={translations[language].top}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          })
        }
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}

function RouteEffects() {
  const location = useLocation();
  const { language } = useI18n();
  useEffect(() => {
    const handle = window.setTimeout(() => {
      if (location.hash)
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
      else window.scrollTo({ top: 0, behavior: "instant" });
    }, 60);
    return () => window.clearTimeout(handle);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    const pageNames: Record<string, string> = {
      "/about": translations[language].about,
      "/journey": translations[language].journey,
      "/projects": translations[language].projects,
      "/achievements": translations[language].achievements,
    };
    const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
    const projectMatch = matchPath("/projects/:slug", normalizedPath);
    const project = projects.find((item) => item.slug === projectMatch?.params.slug);
    const title =
      normalizedPath === "/"
        ? "Personal Portfolio"
        : (project?.title[language] ??
          pageNames[normalizedPath] ??
          translations[language].notFound);
    document.title = `${title} | ${profile.name}`;
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
    ])
      document
        .querySelector(selector)
        ?.setAttribute(
          "content",
          project?.summary[language] ?? translations[language].metaDescription,
        );
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
  }, [location.pathname, language]);
  return null;
}

export function Layout() {
  const { language } = useI18n();
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip-link" href="#main-content">
        {translations[language].skip}
      </a>
      <RouteEffects />
      <Navbar />
      <RouteErrorBoundary key={pathname}>
        <Suspense
          fallback={
            <main id="main-content" className="loading-state" role="status">
              <span className="loader" />
              {translations[language].loading}
            </main>
          }
        >
          <Outlet />
        </Suspense>
      </RouteErrorBoundary>
      <Footer />
      <BackToTop />
    </>
  );
}
