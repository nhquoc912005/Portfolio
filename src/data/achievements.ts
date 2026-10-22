import type { Localized, ProjectImage } from "../types";

type Achievement = Readonly<{
  id: string;
  type: Localized;
  title: Localized;
  description: Localized;
  label: string;
  icon: "research" | "chart" | "language";
  image: ProjectImage | null;
}>;

export const achievements: readonly Achievement[] = [
  {
    id: "research",
    type: { vi: "Hoạt động học thuật", en: "Academic activity" },
    title: {
      vi: "Nghiên cứu khoa học cấp Khoa",
      en: "Faculty-level Academic Research",
    },
    description: {
      vi: "Tham gia hoạt động nghiên cứu khoa học năm học 2024–2025 theo CV.",
      en: "Participated in faculty-level research in the 2024–2025 academic year, as listed in the CV.",
    },
    label: "2024–2025",
    icon: "research",
    image: null,
  },
  {
    id: "tableau",
    type: { vi: "Chứng chỉ", en: "Certification" },
    title: {
      vi: "Phân tích & trực quan hóa dữ liệu",
      en: "Analysing & Visualising Data",
    },
    description: {
      vi: "Certified: Analysing and Visualising Data with Tableau.",
      en: "Certified: Analysing and Visualising Data with Tableau.",
    },
    label: "Tableau",
    icon: "chart",
    image: null,
  },
  {
    id: "toeic",
    type: { vi: "Tiếng Anh", en: "English proficiency" },
    title: { vi: "TOEIC 575", en: "TOEIC 575" },
    description: {
      vi: "Điểm TOEIC được cung cấp trong CV.",
      en: "TOEIC score provided in the CV.",
    },
    label: "575",
    icon: "language",
    image: null,
  },
] as const;
