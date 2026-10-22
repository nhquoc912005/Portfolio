import type { Project } from "../types";

export const projects: readonly Project[] = [
  {
    id: "01",
    slug: "document-workflow",
    visual: "document",
    featured: true,
    title: {
      vi: "Hệ thống quản lý văn bản và điều hành",
      en: "Document Management & Workflow System",
    },
    shortTitle: {
      vi: "Quản lý văn bản & điều hành",
      en: "Documents & Workflows",
    },
    summary: {
      vi: "Kết nối văn bản, hồ sơ và công việc trong một quy trình xử lý tập trung.",
      en: "Bringing documents, records and tasks together in a coordinated workflow.",
    },
    categories: ["web", "business"],
    role: "leader",
    startDate: "2026-01",
    endDate: "2026-05",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    overview: {
      vi: "Dự án nhóm xây dựng hệ thống hỗ trợ quản lý văn bản và điều hành công việc trong cơ quan, doanh nghiệp. ATAX và LapTrinhWeb_Nhom3 là cùng một dự án.",
      en: "A team project supporting document management and work coordination within organizations. ATAX and LapTrinhWeb_Nhom3 refer to this same project.",
    },
    problem: {
      vi: "Văn bản đến, văn bản đi, hồ sơ và nhiệm vụ cần được tổ chức, phân công và theo dõi trong một hệ thống thống nhất.",
      en: "Incoming and outgoing documents, records and tasks need a shared system for organization, assignment and status tracking.",
    },
    objectives: [
      {
        vi: "Tổ chức văn bản và công việc theo các phân hệ nghiệp vụ.",
        en: "Organize documents and tasks into business modules.",
      },
      {
        vi: "Hỗ trợ theo dõi luồng xử lý và phân quyền người dùng.",
        en: "Support workflow tracking and user roles.",
      },
    ],
    features: [
      {
        vi: "Quản lý văn bản đến và văn bản đi.",
        en: "Incoming and outgoing document management.",
      },
      {
        vi: "Quản lý hồ sơ văn bản và công việc.",
        en: "Document records and task management.",
      },
      {
        vi: "Phân công, theo dõi trạng thái, duyệt và xử lý văn bản.",
        en: "Task assignment, status tracking and document approval workflows.",
      },
      {
        vi: "Các vai trò quản trị, lãnh đạo, văn thư và chuyên viên.",
        en: "Administrator, management, clerical and staff roles.",
      },
    ],
    contributions: [
      {
        vi: "Hỗ trợ xử lý chức năng backend với Models, Views và Templates.",
        en: "Supported backend functionality using Models, Views and Templates.",
      },
      {
        vi: "Kiểm tra luồng dữ liệu và logic chức năng.",
        en: "Checked data flows and functional logic.",
      },
      {
        vi: "Debug và phối hợp với các thành viên trong nhóm.",
        en: "Debugged issues and collaborated with team members.",
      },
    ],
    architecture: {
      vi: "Ứng dụng Django sử dụng Django Templates. Cấu hình có SQLite mặc định và hỗ trợ kết nối PostgreSQL qua DATABASE_URL. Mô tả kiến trúc phản ánh mã nguồn nhóm, không quy toàn bộ triển khai cho cá nhân.",
      en: "A Django application using Django Templates. Configuration uses SQLite by default and supports PostgreSQL through DATABASE_URL. This describes the team codebase rather than claiming individual ownership of its implementation.",
    },
    images: [],
    documents: [
      {
        title: { vi: "README & mã nguồn dự án", en: "Project README & source" },
        url: "https://github.com/nhquoc912005/LapTrinhWeb_Nhom3#readme",
      },
    ],
    githubUrl: "https://github.com/nhquoc912005/LapTrinhWeb_Nhom3",
    verificationStatus: "repository-reviewed",
  },
  {
    id: "05",
    slug: "cay-lua-ai",
    visual: "rice",
    featured: true,
    title: {
      vi: "Cây Lúa AI — Nhận diện bệnh lá lúa",
      en: "Cây Lúa AI — Paddy Leaf Disease Recognition",
    },
    shortTitle: { vi: "Cây Lúa AI", en: "Cây Lúa AI" },
    summary: {
      vi: "Khám phá ứng dụng học sâu và mobile trong bài toán nhận diện bệnh trên lá lúa.",
      en: "Exploring deep learning and mobile technology for rice leaf disease recognition.",
    },
    categories: ["ai", "mobile"],
    role: "leader",
    startDate: null,
    endDate: null,
    technologies: ["Python", "PyTorch", "ResNet18", "FastAPI", "Flutter"],
    overview: {
      vi: "Dự án nhóm gồm ứng dụng Flutter, backend phục vụ suy luận và mã nguồn huấn luyện/xuất mô hình nhận diện bệnh lá lúa.",
      en: "A team project combining a Flutter app, an inference backend and model training/export code for rice leaf disease recognition.",
    },
    problem: {
      vi: "Bài toán học tập tập trung vào nhận diện bệnh lá lúa từ hình ảnh bằng mô hình học sâu.",
      en: "The learning project focuses on recognizing rice leaf diseases from images using deep learning.",
    },
    objectives: [
      {
        vi: "Kết nối ứng dụng di động với API suy luận hình ảnh.",
        en: "Connect a mobile application to an image inference API.",
      },
    ],
    features: [
      {
        vi: "Ứng dụng di động Flutter gửi hình ảnh để nhận diện.",
        en: "A Flutter mobile app submits images for recognition.",
      },
      {
        vi: "FastAPI cung cấp endpoint /predict và thông tin kết quả dự đoán.",
        en: "FastAPI exposes a /predict endpoint with prediction information.",
      },
      {
        vi: "Mã nguồn xử lý mô hình ResNet18 bằng PyTorch.",
        en: "PyTorch code for working with a ResNet18 model.",
      },
    ],
    contributions: null,
    architecture: {
      vi: "Flutter → FastAPI → PyTorch / ResNet18. Repository không công khai model weights hoặc dataset gốc; portfolio không đưa ra chỉ số chất lượng mô hình hay tuyên bố triển khai sản xuất.",
      en: "Flutter → FastAPI → PyTorch / ResNet18. Model weights and the original dataset are not public in the repository; no model performance or production deployment is claimed.",
    },
    images: [],
    documents: [
      {
        title: {
          vi: "Tổng quan & cấu trúc mã nguồn",
          en: "Overview & source structure",
        },
        url: "https://github.com/nhquoc912005/Project_AI_Nhom2#readme",
      },
    ],
    githubUrl: "https://github.com/nhquoc912005/Project_AI_Nhom2",
    verificationStatus: "repository-reviewed",
  },
  {
    id: "03",
    slug: "shuttle-testing",
    visual: "shuttle",
    featured: true,
    title: {
      vi: "Quản lý xe trung chuyển & kiểm thử phần mềm",
      en: "Shuttle Route Management & Software Testing",
    },
    shortTitle: { vi: "Điều phối xe trung chuyển", en: "Shuttle Management" },
    summary: {
      vi: "Tiếp cận quy trình kiểm thử qua hệ thống quản lý và điều phối lộ trình xe.",
      en: "Exploring software testing through a shuttle management and route coordination system.",
    },
    categories: ["testing", "web"],
    role: "member",
    startDate: null,
    endDate: null,
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Selenium",
      "TestNG",
    ],
    overview: {
      vi: "Ứng dụng demo của nhóm hỗ trợ điều phối xe trung chuyển. Repository gồm mã nguồn web, backend và tài liệu kiểm thử thủ công, tự động.",
      en: "A team demo application for shuttle coordination. The repository contains web and backend source alongside manual and automated testing documentation.",
    },
    problem: {
      vi: "Quản lý dữ liệu điều phối, lập lộ trình và theo dõi trạng thái chuyến xe cần các luồng chức năng rõ ràng và kiểm thử phù hợp.",
      en: "Dispatch data, route planning and trip status tracking require clear workflows and appropriate testing.",
    },
    objectives: [
      {
        vi: "Tìm hiểu phạm vi hệ thống và các tình huống kiểm thử được tài liệu mô tả.",
        en: "Explore the system scope and documented testing scenarios.",
      },
    ],
    features: [
      {
        vi: "Đăng nhập, xác thực và giao diện cho điều phối viên, tài xế.",
        en: "Authentication and interfaces for dispatchers and drivers.",
      },
      {
        vi: "Quản lý dữ liệu, lập lộ trình và theo dõi trạng thái chuyến xe.",
        en: "Data management, route planning and trip status tracking.",
      },
      {
        vi: "Tài liệu test case và kiểm thử tự động Selenium Java / TestNG.",
        en: "Test case documentation and Selenium Java / TestNG automation.",
      },
    ],
    contributions: null,
    architecture: {
      vi: "React / TypeScript / Vite kết nối Node.js / Express. Dữ liệu sử dụng PostgreSQL; repository có thành phần Supabase, JWT và bộ kiểm thử Selenium Java với TestNG, Maven. Đây là công nghệ của dự án nhóm.",
      en: "React / TypeScript / Vite connects to Node.js / Express with PostgreSQL. The repository includes Supabase, JWT and Selenium Java tests using TestNG and Maven. These are technologies in the team project.",
    },
    images: [],
    documents: [
      {
        title: { vi: "Tài liệu test case", en: "Test case documentation" },
        url: "https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/main/docs/Test-case.xlsx",
      },
      {
        title: { vi: "Kế hoạch kiểm thử", en: "Test plan" },
        url: "https://github.com/nhquoc912005/07_KiemThuPhanMem/blob/main/docs/test-plan.md",
      },
    ],
    githubUrl: "https://github.com/nhquoc912005/07_KiemThuPhanMem",
    verificationStatus: "repository-reviewed",
  },
  {
    id: "04",
    slug: "flic-dashboard",
    visual: "chat",
    featured: true,
    title: {
      vi: "FLIC — Dashboard WebChat CSKH",
      en: "FLIC — Customer Service WebChat Dashboard",
    },
    shortTitle: { vi: "FLIC Dashboard", en: "FLIC Dashboard" },
    summary: {
      vi: "Dashboard hỗ trợ phân tích dữ liệu hội thoại WebChat phục vụ chăm sóc khách hàng.",
      en: "A dashboard supporting WebChat conversation analysis for customer service.",
    },
    categories: ["web", "data", "ai"],
    role: "member",
    startDate: null,
    endDate: null,
    technologies: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "SQL Server",
      "Hugging Face",
    ],
    overview: {
      vi: "Dự án nhóm được lưu trữ trên tài khoản GitHub V-MinhQuan. Hệ thống kết nối giao diện dashboard với backend phân tích dữ liệu hội thoại.",
      en: "A team project hosted under the GitHub account V-MinhQuan. The system connects a dashboard interface to a conversation analysis backend.",
    },
    problem: {
      vi: "Hoạt động chăm sóc khách hàng cần công cụ tổng hợp và phân tích dữ liệu hội thoại WebChat.",
      en: "Customer service teams need tools to organize and analyze WebChat conversations.",
    },
    objectives: [
      {
        vi: "Hỗ trợ quan sát và phân tích dữ liệu hội thoại qua dashboard.",
        en: "Support conversation data exploration and analysis through a dashboard.",
      },
    ],
    features: [
      {
        vi: "Giao diện dashboard React / Vite.",
        en: "A React / Vite dashboard interface.",
      },
      {
        vi: "FastAPI kết nối Microsoft SQL Server và Hugging Face Inference Providers.",
        en: "FastAPI connects Microsoft SQL Server with Hugging Face Inference Providers.",
      },
      {
        vi: "Repository có test plan và test case theo module.",
        en: "The repository includes a test plan and module-level test cases.",
      },
    ],
    contributions: null,
    architecture: {
      vi: "React / Vite → FastAPI / Python → Microsoft SQL Server và Hugging Face Inference Providers. Vai trò được xác nhận là thành viên nhóm; không quy việc phát triển mô hình AI cho cá nhân.",
      en: "React / Vite → FastAPI / Python → Microsoft SQL Server and Hugging Face Inference Providers. The confirmed role is team member; AI model development is not attributed to the portfolio owner.",
    },
    images: [],
    documents: [
      {
        title: { vi: "Kế hoạch kiểm thử", en: "Test plan" },
        url: "https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/main/FLIC_Test_Plan.xlsx",
      },
      {
        title: { vi: "Test case theo module", en: "Module-level test cases" },
        url: "https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH/blob/main/FLIC_Test_Cases_By_Module.xlsx",
      },
    ],
    githubUrl: "https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH",
    verificationStatus: "repository-reviewed",
  },
  {
    id: "02",
    slug: "camsin",
    visual: "mobile",
    featured: false,
    title: {
      vi: "CAMSiN — Ứng dụng quản lý khách sạn",
      en: "CAMSiN — Hotel Management Android App",
    },
    shortTitle: { vi: "CAMSiN Android", en: "CAMSiN Android" },
    summary: {
      vi: "Ứng dụng Android hỗ trợ các nghiệp vụ phòng, đặt phòng và dịch vụ khách sạn.",
      en: "A native Android application supporting hotel rooms, reservations and services.",
    },
    categories: ["mobile"],
    role: "leader",
    startDate: null,
    endDate: null,
    technologies: ["Java", "Android", "Retrofit", "Express", "PostgreSQL"],
    overview: {
      vi: "Mã nguồn nhóm gồm ứng dụng Android native viết bằng Java, giao diện XML, backend API Node.js / Express và schema PostgreSQL. Kotlin DSL được dùng cho cấu hình Gradle, không phải bằng chứng ứng dụng được viết bằng Kotlin.",
      en: "The team codebase includes a native Android app written in Java with XML layouts, a Node.js / Express API and a PostgreSQL schema. Kotlin DSL is used for Gradle build configuration, not as the application language.",
    },
    problem: {
      vi: "Các nghiệp vụ khách sạn như quản lý phòng, đặt phòng, nhận/trả phòng và hóa đơn cần được kết nối qua ứng dụng di động.",
      en: "Hotel operations such as rooms, reservations, check-in/out and invoices need a connected mobile interface.",
    },
    objectives: [
      {
        vi: "Kết nối giao diện Android với API phục vụ nghiệp vụ khách sạn.",
        en: "Connect Android screens with an API for hotel operations.",
      },
    ],
    features: [
      {
        vi: "Mã nguồn có màn hình dashboard, đặt phòng và quản lý phòng.",
        en: "Source includes dashboard, reservation and room management screens.",
      },
      {
        vi: "Có thành phần nhận/trả phòng, dịch vụ, tài sản và hóa đơn.",
        en: "Code includes check-in/out, services, assets and invoice components.",
      },
      {
        vi: "Retrofit / OkHttp dùng cho giao tiếp API.",
        en: "Retrofit / OkHttp is used for API communication.",
      },
    ],
    contributions: null,
    architecture: {
      vi: "Android Java / XML → Retrofit / OkHttp → Node.js / Express → PostgreSQL. Các màn hình và endpoint được đọc từ mã nguồn; toàn bộ luồng chưa được chạy lại trong quá trình xây dựng portfolio.",
      en: "Android Java / XML → Retrofit / OkHttp → Node.js / Express → PostgreSQL. Screens and endpoints were inspected in source; the full application was not rerun while building this portfolio.",
    },
    images: [],
    documents: [
      {
        title: {
          vi: "Giao tiếp API của ứng dụng",
          en: "Application API interface",
        },
        url: "https://github.com/nhquoc912005/LTMB_Nhom2/blob/main/app/src/main/java/com/project_mobile/network/ApiService.java",
      },
    ],
    githubUrl: "https://github.com/nhquoc912005/LTMB_Nhom2",
    verificationStatus: "repository-reviewed",
  },
  {
    id: "06",
    slug: "minh-grocery",
    visual: "store",
    featured: false,
    title: {
      vi: "Hệ thống quản lý cửa hàng tạp hóa Minh",
      en: "Minh Grocery Store Management System",
    },
    shortTitle: { vi: "Tạp hóa Minh", en: "Minh Grocery Store" },
    summary: {
      vi: "Từ phân tích quy trình bán hàng đến xác định chức năng và thiết kế cơ sở dữ liệu.",
      en: "From analyzing sales processes to defining system functions and designing a database.",
    },
    categories: ["business"],
    role: "leader",
    startDate: "2025-09",
    endDate: "2025-12",
    technologies: [],
    overview: {
      vi: "Dự án học tập được mô tả trong CV, tập trung vào phân tích quy trình và xây dựng hệ thống quản lý cửa hàng tạp hóa Minh.",
      en: "An academic project described in the CV, focused on process analysis and a management system for Minh grocery store.",
    },
    problem: {
      vi: "Quy trình bán hàng cần gắn kết thông tin sản phẩm, khách hàng, hóa đơn và tồn kho.",
      en: "The sales process needs connected product, customer, invoice and inventory information.",
    },
    objectives: [
      {
        vi: "Xác định chức năng hệ thống dựa trên quy trình bán hàng.",
        en: "Define system functions based on the sales process.",
      },
    ],
    features: [
      {
        vi: "Phạm vi theo CV: sản phẩm, khách hàng, hóa đơn và tồn kho.",
        en: "Scope described in the CV: products, customers, invoices and inventory.",
      },
    ],
    contributions: [
      {
        vi: "Phân tích quy trình bán hàng và xác định chức năng hệ thống.",
        en: "Analyzed sales processes and defined system functions.",
      },
      {
        vi: "Tham gia thiết kế cơ sở dữ liệu, theo dõi tiến độ và hỗ trợ kiểm thử chức năng.",
        en: "Contributed to database design, progress tracking and functional testing.",
      },
    ],
    architecture: null,
    images: [],
    documents: [
      {
        title: {
          vi: "Tài liệu đặc tả (SRS)",
          en: "Software Requirements Specification (SRS)",
        },
        url: "https://github.com/nhquoc912005/49K142.10/blob/main/02.%20Ph%C3%A2n%20t%C3%ADch%20v%C3%A0%20thi%E1%BA%BFt%20k%E1%BA%BF%20h%E1%BB%87%20th%E1%BB%91ng/49K142.10.SRS-T%C3%A0i%20li%E1%BB%87u%20%C4%91%E1%BA%B7c%20t%E1%BA%A3.docx",
      },
      {
        title: {
          vi: "Tài liệu thiết kế hệ thống",
          en: "System Design Document",
        },
        url: "https://github.com/nhquoc912005/49K142.10/blob/main/02.%20Ph%C3%A2n%20t%C3%ADch%20v%C3%A0%20thi%E1%BA%BFt%20k%E1%BA%BF%20h%E1%BB%87%20th%E1%BB%91ng/49K142.10_T%C3%A0i%20li%E1%BB%87u%20thi%E1%BA%BFt%20k%E1%BA%BF%20h%E1%BB%87%20th%E1%BB%91ng.docx",
      },
    ],
    githubUrl: "https://github.com/nhquoc912005/49K142.10",
    verificationStatus: "repository-reviewed",
  },
  {
    id: "07",
    slug: "green-food-research",
    visual: "research",
    featured: false,
    title: {
      vi: "Nghiên cứu hành vi người tiêu dùng thực phẩm xanh",
      en: "Green Food Consumer Behavior Research",
    },
    shortTitle: { vi: "Nghiên cứu thực phẩm xanh", en: "Green Food Research" },
    summary: {
      vi: "Khám phá tâm lý người tiêu dùng qua dữ liệu đánh giá trên thương mại điện tử.",
      en: "Exploring consumer behavior through e-commerce review data.",
    },
    categories: ["data", "research"],
    role: "researcher",
    startDate: "2025-10",
    endDate: null,
    ongoing: true,
    technologies: ["Python"],
    overview: {
      vi: "Nghiên cứu tâm lý người tiêu dùng thực phẩm xanh bằng phân tích dữ liệu thương mại điện tử. Nội dung được chủ sở hữu cung cấp qua CV; chưa có kết quả nghiên cứu công khai.",
      en: "Research into green food consumer behavior using e-commerce data analysis. The information is supplied through the owner’s CV; public research findings have not been provided.",
    },
    problem: {
      vi: "Dữ liệu đánh giá của khách hàng có thể hỗ trợ tìm hiểu cảm nhận và hành vi đối với thực phẩm xanh.",
      en: "Customer reviews can help explore perceptions and behavior around green food products.",
    },
    objectives: [
      {
        vi: "Tìm hiểu cảm nhận người tiêu dùng và hỗ trợ đề xuất hàm ý marketing.",
        en: "Explore consumer perceptions and support marketing implications.",
      },
    ],
    features: [
      {
        vi: "Quy trình nghiên cứu gồm thu thập, làm sạch và phân tích dữ liệu đánh giá.",
        en: "The research process includes collecting, cleaning and analyzing review data.",
      },
    ],
    contributions: [
      {
        vi: "Thu thập và làm sạch dữ liệu đánh giá khách hàng.",
        en: "Collected and cleaned customer review data.",
      },
      {
        vi: "Hỗ trợ phân tích cảm xúc bằng AI / Python và trích xuất insight.",
        en: "Supported sentiment analysis using AI / Python and insight extraction.",
      },
      {
        vi: "Tham gia đề xuất hàm ý marketing.",
        en: "Contributed to developing marketing implications.",
      },
    ],
    architecture: null,
    images: [],
    documents: [],
    githubUrl: null,
    verificationStatus: "owner-provided",
  },
];
