import type { Localized } from "../types";

type JourneyEntry = Readonly<{
  id: string;
  year: string;
  period: Localized;
  title: Localized;
  description: Localized;
  detail: Localized | null;
  projectSlug: string | null;
  icon: "education" | "research" | "code" | "data" | "workflow";
}>;

export const journey: readonly JourneyEntry[] = [
  {
    id: "university",
    year: "2023",
    period: { vi: "Đại học", en: "University" },
    title: {
      vi: "Bắt đầu hành trình đại học",
      en: "Starting university",
    },
    description: {
      vi: "Mình bắt đầu học ngành Hệ thống thông tin quản lý tại Trường Đại học Kinh tế – Đại học Đà Nẵng.",
      en: "I started studying Management Information Systems at the University of Economics – The University of Danang.",
    },
    detail: null,
    projectSlug: null,
    icon: "education",
  },
  {
    id: "academic-research",
    year: "2024–2025",
    period: { vi: "Năm học", en: "Academic year" },
    title: {
      vi: "Tham gia nghiên cứu khoa học",
      en: "Taking part in academic research",
    },
    description: {
      vi: "Trong năm học 2024–2025, mình có cơ hội tham gia hoạt động nghiên cứu khoa học cấp Khoa.",
      en: "In the 2024–2025 academic year, I took part in faculty-level academic research.",
    },
    detail: null,
    projectSlug: null,
    icon: "research",
  },
  {
    id: "grocery",
    year: "2025",
    period: { vi: "09 – 12 / 2025", en: "Sep – Dec 2025" },
    title: {
      vi: "Dự án quản lý cửa hàng tạp hóa Minh",
      en: "Minh grocery store management project",
    },
    description: {
      vi: "Cùng nhóm xây dựng hệ thống quản lý cửa hàng tạp hóa. Mình đảm nhận vai trò trưởng nhóm, tham gia phân tích quy trình bán hàng và thiết kế cơ sở dữ liệu.",
      en: "I worked with my group to build a grocery store management system. As team leader, I helped analyze the sales process and design the database.",
    },
    detail: null,
    projectSlug: "minh-grocery",
    icon: "code",
  },
  {
    id: "green-food",
    year: "2025 →",
    period: { vi: "10/2025 – nay", en: "Oct 2025 – present" },
    title: {
      vi: "Nghiên cứu về hành vi người tiêu dùng",
      en: "Researching consumer behavior",
    },
    description: {
      vi: "Mình tham gia nghiên cứu tâm lý người tiêu dùng thực phẩm xanh, từ việc thu thập, xử lý dữ liệu đánh giá đến phân tích cảm xúc bằng Python và AI.",
      en: "I’m taking part in research on green food consumer behavior. My work includes collecting and processing customer reviews and analyzing sentiment with Python and AI.",
    },
    detail: null,
    projectSlug: "green-food-research",
    icon: "data",
  },
  {
    id: "documents",
    year: "2026",
    period: { vi: "01 – 05 / 2026", en: "Jan – May 2026" },
    title: {
      vi: "Xây dựng hệ thống quản lý văn bản",
      en: "Building a document management system",
    },
    description: {
      vi: "Mình làm trưởng nhóm dự án quản lý văn bản và điều hành tại ATAX, đồng thời tham gia phát triển backend và kiểm tra luồng xử lý dữ liệu.",
      en: "I was the team leader on a document management and workflow project at ATAX. I also worked on backend development and checked the data processing flows.",
    },
    detail: null,
    projectSlug: "document-workflow",
    icon: "workflow",
  },
] as const;
