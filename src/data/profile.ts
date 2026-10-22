import type { Localized } from "../types";

export const profile = {
  name: "Nguyễn Hữu Quốc",
  initials: "NQ",
  tagline: "My Journey in Technology & Business",
  email: "nguyenhuuquoc912005@gmail.com",
  github: "https://github.com/nhquoc912005",
  university: {
    vi: "Đại học Kinh tế – Đại học Đà Nẵng",
    en: "University of Economics – The University of Danang",
  },
  major: {
    vi: "Hệ thống thông tin quản lý",
    en: "Management Information Systems",
  },
  since: 2023,
  location: { vi: "ĐÀ NẴNG, VIỆT NAM", en: "DA NANG, VIETNAM" },
  cvPath: "/assets/documents/cv.pdf",
  portrait: {
    src: "/assets/profile/nguyen-huu-quoc.jpg",
    alt: {
      vi: "Chân dung Nguyễn Hữu Quốc",
      en: "Portrait of Nguyễn Hữu Quốc",
    },
  } as Readonly<{ src: string; alt: Localized }> | null,
  introduction: {
    vi: "Tôi là sinh viên ngành Hệ thống thông tin quản lý tại Đại học Kinh tế – Đại học Đà Nẵng. Từ phát triển phần mềm, kiểm thử đến AI, dữ liệu và phân tích nghiệp vụ — mỗi trải nghiệm là một bước tiến trên hành trình của tôi.",
    en: "I’m a Management Information Systems student at the University of Economics – The University of Danang. From software development and testing to AI, data and business analysis — each experience is a step forward in my journey.",
  },
  direction: {
    vi: "Tôi mong muốn tiếp tục học hỏi, tham gia các dự án thực tế và phát triển năng lực ở giao điểm giữa công nghệ và kinh doanh.",
    en: "I’m looking to keep learning, contribute to real projects and develop my skills at the intersection of technology and business.",
  },
  interests: [
    { vi: "Phân tích & giải quyết vấn đề", en: "Analysis & problem solving" },
    { vi: "Phát triển ứng dụng", en: "Application development" },
    { vi: "Phân tích hệ thống", en: "Systems analysis" },
    { vi: "Kiểm thử phần mềm", en: "Software testing" },
    { vi: "AI & dữ liệu", en: "AI & data" },
    { vi: "Phân tích nghiệp vụ", en: "Business analysis" },
  ],
} as const;
