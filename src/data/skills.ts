export const skills = [
  {
    icon: "code",
    title: { vi: "Lập trình", en: "Programming" },
    items: ["Python", "C#", "HTML", "CSS"],
  },
  {
    icon: "server",
    title: { vi: "Backend & Web", en: "Backend & Web" },
    items: ["Django", { vi: "Kiến thức API cơ bản", en: "API fundamentals" }],
  },
  {
    icon: "database",
    title: { vi: "Cơ sở dữ liệu", en: "Databases" },
    items: [
      { vi: "SQL cơ bản", en: "SQL fundamentals" },
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    icon: "testing",
    title: { vi: "Kiểm thử phần mềm", en: "Software Testing" },
    items: [
      "Functional Testing",
      { vi: "Thiết kế test case cơ bản", en: "Basic test case design" },
      "Debugging",
    ],
  },
  {
    icon: "data",
    title: { vi: "Phân tích dữ liệu", en: "Data Analysis" },
    items: [
      "Python",
      "Tableau",
      { vi: "Làm sạch dữ liệu", en: "Data cleaning" },
      { vi: "Trực quan hóa dữ liệu", en: "Data visualization" },
    ],
  },
  {
    icon: "business",
    title: { vi: "Phân tích nghiệp vụ", en: "Business Analysis" },
    items: [
      { vi: "Phân tích quy trình", en: "Business process analysis" },
      { vi: "Phân tích chức năng", en: "Functional analysis" },
      { vi: "Phân tích luồng hệ thống", en: "System flow analysis" },
      { vi: "Thiết kế CSDL cơ bản", en: "Basic database design" },
    ],
  },
  {
    icon: "tools",
    title: { vi: "Công cụ & cộng tác", en: "Tools & Collaboration" },
    items: ["Git", "GitHub", "VS Code", "Excel", "PowerPoint"],
  },
] as const;
