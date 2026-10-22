import { lazy } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Route, Routes } from "react-router";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import { useI18n } from "./i18n/I18nContext";
import { translations } from "./i18n/translations";

const About = lazy(() => import("./pages/About"));
const Journey = lazy(() => import("./pages/Journey"));
const Projects = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Achievements = lazy(() => import("./pages/Achievements"));

function NotFound() {
  const { language } = useI18n();
  const copy = translations[language];
  return (
    <main id="main-content" className="not-found container">
      <span className="eyebrow">404 / {copy.portfolio}</span>
      <h1>{copy.notFound}</h1>
      <p>{copy.notFoundLead}</p>
      <Link className="button button-primary" to="/">
        <ArrowLeft size={17} />
        {copy.backHome}
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="journey" element={<Journey />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
