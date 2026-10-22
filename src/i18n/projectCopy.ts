import type { Category, Localized, Role } from "../types";

export const categoryLabels: Readonly<Record<Category | "all", Localized>> = {
  all: { vi: "Tất cả", en: "All" },
  web: { vi: "Web", en: "Web" },
  mobile: { vi: "Mobile", en: "Mobile" },
  testing: { vi: "Testing", en: "Testing" },
  ai: { vi: "AI", en: "AI" },
  data: { vi: "Data", en: "Data" },
  business: { vi: "Business Analysis", en: "Business Analysis" },
  research: { vi: "Research", en: "Research" },
};

export const roleLabels: Readonly<Record<Role, Localized>> = {
  leader: { vi: "Trưởng nhóm", en: "Team Leader" },
  member: { vi: "Thành viên", en: "Team Member" },
  researcher: { vi: "Thành viên nghiên cứu", en: "Research Team Member" },
};

export const projectCopy = {
  eyebrow: { vi: "KHÁM PHÁ QUA TỪNG DỰ ÁN", en: "EXPLORING THROUGH PROJECTS" },
  title: { vi: "Ý tưởng, trải nghiệm", en: "Ideas, experiences" },
  titleAccent: { vi: "& những điều đã làm.", en: "& things I have built." },
  introduction: {
    vi: "Mỗi dự án là một cơ hội để học hỏi — từ phát triển phần mềm, kiểm thử đến AI, dữ liệu và phân tích nghiệp vụ.",
    en: "Every project is an opportunity to learn — through software development, testing, AI, data and business analysis.",
  },
  search: { vi: "Tìm kiếm dự án", en: "Search projects" },
  searchPlaceholder: {
    vi: "Tìm theo tên, công nghệ…",
    en: "Search by name or technology…",
  },
  filters: { vi: "Lọc theo lĩnh vực", en: "Filter by field" },
  clearSearch: { vi: "Xóa tìm kiếm", en: "Clear search" },
  clearFilters: { vi: "Xóa bộ lọc", en: "Clear filters" },
  results: { vi: "dự án & nghiên cứu", en: "projects & research studies" },
  resultOf: { vi: "trong", en: "of" },
  emptyTitle: { vi: "Chưa tìm thấy dự án phù hợp", en: "No matching projects" },
  emptyDescription: {
    vi: "Hãy thử từ khóa khác hoặc chọn một lĩnh vực khác.",
    en: "Try another keyword or explore a different field.",
  },
  view: { vi: "Khám phá dự án", en: "View case study" },
  github: { vi: "Xem GitHub", en: "View GitHub" },
  illustration: { vi: "Minh họa ý tưởng", en: "Concept illustration" },
  back: { vi: "Tất cả dự án", en: "All projects" },
  overview: { vi: "Tổng quan dự án", en: "Project overview" },
  researchOverview: { vi: "Tổng quan nghiên cứu", en: "Research overview" },
  problem: { vi: "Bài toán & bối cảnh", en: "Problem & context" },
  objectives: { vi: "Mục tiêu", en: "Objectives" },
  researchObjectives: { vi: "Mục tiêu nghiên cứu", en: "Research objectives" },
  methodology: { vi: "Quy trình nghiên cứu", en: "Research methodology" },
  tools: { vi: "Công cụ nghiên cứu", en: "Research tools" },
  features: { vi: "Chức năng của dự án", en: "Project features" },
  featuresNote: {
    vi: "Những chức năng dưới đây mô tả sản phẩm của nhóm.",
    en: "The following features describe the team’s product.",
  },
  contributions: {
    vi: "Vai trò & đóng góp cá nhân",
    en: "My role & contributions",
  },
  collaboration: {
    vi: "Hợp tác nhóm & vai trò cá nhân",
    en: "Team collaboration & my role",
  },
  contributionsPending: {
    vi: "Thông tin về các nhiệm vụ và đóng góp cá nhân cụ thể sẽ được bổ sung sau khi xác nhận.",
    en: "Specific personal responsibilities and contributions will be added once confirmed.",
  },
  architecture: { vi: "Góc nhìn kỹ thuật", en: "Technical overview" },
  documents: { vi: "Tài liệu dự án", en: "Project documents" },
  openDocument: { vi: "Mở tài liệu", en: "Open document" },
  gallery: { vi: "Hình ảnh dự án", en: "Project gallery" },
  expandImage: { vi: "Phóng to hình ảnh", en: "Enlarge image" },
  closeGallery: { vi: "Đóng bộ xem ảnh", en: "Close image viewer" },
  previousImage: { vi: "Ảnh trước", en: "Previous image" },
  nextImage: { vi: "Ảnh tiếp theo", en: "Next image" },
  projectFacts: { vi: "Thông tin dự án", en: "At a glance" },
  role: { vi: "Vai trò", en: "Role" },
  date: { vi: "Thời gian", en: "Timeline" },
  categories: { vi: "Lĩnh vực", en: "Fields" },
  technologies: { vi: "Công nghệ của dự án", en: "Project technologies" },
  technologiesNote: {
    vi: "Công nghệ của sản phẩm nhóm; phạm vi sử dụng cá nhân được thể hiện trong mục đóng góp.",
    en: "Technologies used in the team project; personal involvement is described in the contributions section.",
  },
  source: { vi: "Nguồn thông tin", en: "Information source" },
  reviewed: {
    vi: "Đối chiếu repository & thông tin chủ sở hữu",
    en: "Repository review & owner-provided information",
  },
  ownerProvided: {
    vi: "Thông tin chủ sở hữu cung cấp",
    en: "Owner-provided information",
  },
  next: { vi: "Dự án tiếp theo", en: "Next project" },
  notFound: { vi: "Không tìm thấy dự án", en: "Project not found" },
  notFoundDescription: {
    vi: "Dự án này có thể chưa được thêm vào Portfolio. Bạn có thể tiếp tục khám phá những dự án khác.",
    en: "This project may not have been added to the portfolio yet. Explore the other projects below.",
  },
} satisfies Record<string, Localized>;

export const visualLabels = {
  document: { vi: "Quy trình & kết nối", en: "Workflows & connections" },
  rice: { vi: "Công nghệ với nông nghiệp", en: "Technology meets agriculture" },
  shuttle: { vi: "Lộ trình & chất lượng", en: "Routes & quality" },
  chat: {
    vi: "Hội thoại thành góc nhìn",
    en: "Conversations into perspective",
  },
  mobile: { vi: "Trải nghiệm trên di động", en: "Experiences on mobile" },
  store: { vi: "Từ nghiệp vụ đến hệ thống", en: "From business to systems" },
  research: { vi: "Dữ liệu & hành vi", en: "Data & behavior" },
} satisfies Record<string, Localized>;
