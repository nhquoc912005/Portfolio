export type Language = "vi" | "en";
export type Localized = Readonly<{ vi: string; en: string }>;
export type Category =
  | "web"
  | "mobile"
  | "testing"
  | "ai"
  | "data"
  | "business"
  | "research";
export type Role = "leader" | "member" | "researcher";
export type ProjectImage = Readonly<{
  src: string;
  alt: Localized;
  kind: "desktop" | "mobile" | "diagram" | "certificate";
}>;
export type Project = Readonly<{
  id: string;
  slug: string;
  title: Localized;
  shortTitle: Localized;
  summary: Localized;
  categories: readonly Category[];
  role: Role;
  startDate: string | null;
  endDate: string | null;
  ongoing?: boolean;
  technologies: readonly string[];
  overview: Localized;
  problem: Localized;
  objectives: readonly Localized[];
  features: readonly Localized[];
  contributions: readonly Localized[] | null;
  architecture: Localized | null;
  images: readonly ProjectImage[];
  documents: readonly Readonly<{ title: Localized; url: string }>[];
  githubUrl: string | null;
  featured: boolean;
  visual:
    | "document"
    | "rice"
    | "shuttle"
    | "chat"
    | "mobile"
    | "store"
    | "research";
  verificationStatus: "owner-provided" | "repository-reviewed";
}>;
