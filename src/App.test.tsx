import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { projects } from "./data/projects";
import { I18nProvider } from "./i18n/I18nContext";

function renderRoute(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </MemoryRouter>,
  );
}

const expectedJourney = [
  { titleVi: "Bắt đầu hành trình đại học", titleEn: "Starting university", descriptionVi: "Mình bắt đầu học ngành Hệ thống thông tin quản lý tại Trường Đại học Kinh tế – Đại học Đà Nẵng." },
  { titleVi: "Tham gia nghiên cứu khoa học", titleEn: "Taking part in academic research", descriptionVi: "Trong năm học 2024–2025, mình có cơ hội tham gia hoạt động nghiên cứu khoa học cấp Khoa." },
  { titleVi: "Dự án quản lý cửa hàng tạp hóa Minh", titleEn: "Minh grocery store management project", descriptionVi: "Cùng nhóm xây dựng hệ thống quản lý cửa hàng tạp hóa. Mình đảm nhận vai trò trưởng nhóm, tham gia phân tích quy trình bán hàng và thiết kế cơ sở dữ liệu." },
  { titleVi: "Nghiên cứu về hành vi người tiêu dùng", titleEn: "Researching consumer behavior", descriptionVi: "Mình tham gia nghiên cứu tâm lý người tiêu dùng thực phẩm xanh, từ việc thu thập, xử lý dữ liệu đánh giá đến phân tích cảm xúc bằng Python và AI." },
  { titleVi: "Xây dựng hệ thống quản lý văn bản", titleEn: "Building a document management system", descriptionVi: "Mình làm trưởng nhóm dự án quản lý văn bản và điều hành tại ATAX, đồng thời tham gia phát triển backend và kiểm tra luồng xử lý dữ liệu." },
];

describe("project discovery through the interface", () => {
  it("shows all seven projects, combines filters and search, and recovers from an empty result", async () => {
    const user = userEvent.setup();
    renderRoute("/projects");
    expect(await screen.findAllByRole("article")).toHaveLength(7);
    const search = screen.getByRole("searchbox", { name: "Tìm kiếm dự án" });
    await user.type(search, "Django");
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(
      within(screen.getByRole("article")).getByText("Django"),
    ).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Mobile" }));
    expect(
      screen.getByRole("heading", { name: "Chưa tìm thấy dự án phù hợp" }),
    ).toBeVisible();
    await user.click(screen.getAllByRole("button", { name: "Xóa bộ lọc" })[0]);
    expect(screen.getAllByRole("article")).toHaveLength(7);
    expect(search).toHaveValue("");
    await user.type(search, "CAMSiN");
    expect(screen.getAllByRole("article")).toHaveLength(1);
    await user.click(screen.getByRole("button", { name: "Xóa tìm kiếm" }));
    expect(screen.getAllByRole("article")).toHaveLength(7);
    await user.click(screen.getByRole("button", { name: "Testing" }));
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("button", { name: "Testing" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("switches the navigation and content together and remembers the selected language", async () => {
    const user = userEvent.setup();
    const view = renderRoute("/projects");
    expect(
      screen.getByRole("searchbox", { name: "Tìm kiếm dự án" }),
    ).toBeVisible();
    await user.click(await screen.findByRole("button", { name: "English" }));
    expect(
      screen.getByRole("searchbox", { name: "Search projects" }),
    ).toBeVisible();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Ideas, experiences",
    );
    expect(
      screen.queryByRole("searchbox", { name: "Tìm kiếm dự án" }),
    ).not.toBeInTheDocument();
    expect(screen.getAllByText("Team Leader").length).toBeGreaterThan(0);
    view.unmount();
    renderRoute("/projects");
    expect(
      screen.getByRole("searchbox", { name: "Search projects" }),
    ).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Tiếng Việt" }));
    expect(
      screen.getByRole("searchbox", { name: "Tìm kiếm dự án" }),
    ).toBeVisible();
  });
});

describe("case study routes and content authenticity", () => {
  it.each(projects.map((project) => [project.slug, project] as const))(
    "opens %s with the confirmed role and real source link",
    async (slug, project) => {
      const user = userEvent.setup();
      renderRoute(`/projects/${slug}`);
      await screen.findByRole("heading", { name: project.title.vi });
      expect(document.title).toBe(`${project.title.vi} | Nguyễn Hữu Quốc`);
      await user.click(await screen.findByRole("button", { name: "English" }));
      expect(document.title).toBe(`${project.title.en} | Nguyễn Hữu Quốc`);
      const main = screen.getByRole("main");
      expect(within(main).getByRole("heading", { level: 1 })).toHaveTextContent(
        project.title.en,
      );
      expect(
        within(main).getByRole("heading", {
          name:
            project.role === "researcher"
              ? "Research overview"
              : "Project overview",
        }),
      ).toBeVisible();
      const role = {
        leader: "Team Leader",
        member: "Team Member",
        researcher: "Research Team Member",
      }[project.role];
      expect(within(main).getAllByText(role).length).toBeGreaterThan(0);
      expect(
        within(main).getAllByRole("link", { name: "All projects" })[0],
      ).toHaveAttribute("href", "/projects");
      if (project.githubUrl) {
        const source = within(main)
          .getAllByRole("link")
          .find((link) => link.getAttribute("href") === project.githubUrl);
        expect(source).toHaveAttribute("target", "_blank");
        expect(source).toHaveAttribute(
          "rel",
          expect.stringContaining("noopener"),
        );
      }
      if (project.images.length === 0)
        expect(
          within(main).queryByRole("heading", { name: "Project gallery" }),
        ).not.toBeInTheDocument();
      if (project.documents.length === 0)
        expect(
          within(main).queryByRole("heading", { name: "Project documents" }),
        ).not.toBeInTheDocument();
    },
  );

  it("handles an unknown project and returns to the complete inventory", async () => {
    const user = userEvent.setup();
    renderRoute("/projects/no-such-project");
    await screen.findByRole("heading", { name: "Không tìm thấy dự án" });
    expect(document.title).toBe("Trang này chưa có trong hành trình. | Nguyễn Hữu Quốc");
    await user.click(await screen.findByRole("button", { name: "English" }));
    expect(document.title).toBe("This page isn’t on the map yet. | Nguyễn Hữu Quốc");
    expect(
      screen.getByRole("heading", { name: "Project not found" }),
    ).toBeVisible();
    await user.click(screen.getByRole("link", { name: "All projects" }));
    expect(await screen.findAllByRole("article")).toHaveLength(7);
  });

  it("opens a case study from its card and follows next-project navigation", async () => {
    const user = userEvent.setup();
    renderRoute("/projects");
    await screen.findAllByRole("article");
    await user.click(await screen.findByRole("button", { name: "English" }));
    await user.click(
      within(screen.getAllByRole("article")[0]).getByRole("link", {
        name: "View case study",
      }),
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      projects[0].title.en,
    );
    await user.click(screen.getByRole("link", { name: /Next project/ }));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      projects[1].title.en,
    );
  });
});

describe("route metadata", () => {
  it.each([
    { path: "/about/", titleVi: "Về tôi", titleEn: "About" },
    { path: "/projects/document-workflow/extra", titleVi: "Trang này chưa có trong hành trình.", titleEn: "This page isn’t on the map yet." },
  ])("matches the actual route when setting metadata for $path", async ({ path, titleVi, titleEn }) => {
    const user = userEvent.setup();
    renderRoute(path);
    await screen.findByRole("heading", { level: 1 });
    expect(document.title).toBe(`${titleVi} | Nguyễn Hữu Quốc`);
    await user.click(screen.getByRole("button", { name: "English" }));
    expect(document.title).toBe(`${titleEn} | Nguyễn Hữu Quốc`);
  });

  it("uses each case study summary for page and Open Graph metadata in both languages", async () => {
    const description = document.createElement("meta");
    description.name = "description";
    const openGraphDescription = document.createElement("meta");
    openGraphDescription.setAttribute("property", "og:description");
    const openGraphTitle = document.createElement("meta");
    openGraphTitle.setAttribute("property", "og:title");
    document.head.append(description, openGraphDescription, openGraphTitle);
    try {
      const user = userEvent.setup();
      renderRoute("/projects/camsin");
      const project = projects.find((item) => item.slug === "camsin")!;
      await screen.findByRole("heading", { name: project.title.vi });
      expect(description.content).toBe(project.summary.vi);
      expect(openGraphDescription.content).toBe(project.summary.vi);
      expect(openGraphTitle.content).toBe(`${project.title.vi} | Nguyễn Hữu Quốc`);
      await user.click(screen.getByRole("button", { name: "English" }));
      expect(description.content).toBe(project.summary.en);
      expect(openGraphDescription.content).toBe(project.summary.en);
      expect(openGraphTitle.content).toBe(`${project.title.en} | Nguyễn Hữu Quốc`);
    } finally {
      description.remove();
      openGraphDescription.remove();
      openGraphTitle.remove();
    }
  });

  it("gives an unknown page its localized error title", async () => {
    const user = userEvent.setup();
    renderRoute("/not-a-real-page");
    await screen.findByRole("heading", { name: "Trang này chưa có trong hành trình." });
    expect(document.title).toBe("Trang này chưa có trong hành trình. | Nguyễn Hữu Quốc");
    await user.click(screen.getByRole("button", { name: "English" }));
    expect(document.title).toBe("This page isn’t on the map yet. | Nguyễn Hữu Quốc");
  });
});

describe("supporting pages and contact", () => {
  it.each(["/about", "/journey", "/achievements", "/unmatched-path"])(
    "renders an accessible route for %s",
    async (path) => {
      const user = userEvent.setup();
      renderRoute(path);
      expect(await screen.findByRole("heading", { level: 1 })).toBeVisible();
      if (path === "/about") expect(screen.getByRole("main")).not.toHaveTextContent(/GPA|3\.12\s*\/\s*4\.0/i);
      await user.click(await screen.findByRole("button", { name: "English" }));
      expect(await screen.findByRole("heading", { level: 1 })).toBeVisible();
      if (path === "/about") expect(screen.getByRole("main")).not.toHaveTextContent(/GPA|3\.12\s*\/\s*4\.0/i);
    },
  );

  it("copies the published contact email and hides unavailable CV downloads", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    renderRoute("/");
    await user.click(await screen.findByRole("button", { name: "English" }));
    await user.click(screen.getByRole("button", { name: /Copy email/i }));
    expect(writeText).toHaveBeenCalledWith("nguyenhuuquoc912005@gmail.com");
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent("Email copied"),
    );
    expect(
      document.querySelector('a[href="/assets/documents/cv.pdf"]'),
    ).not.toBeInTheDocument();
    const unavailable = screen
      .getAllByRole("button")
      .filter(
        (button) =>
          /CV/.test(button.textContent ?? "") &&
          button.hasAttribute("disabled"),
      );
    expect(unavailable).toHaveLength(0);
    expect(screen.queryByText("CV coming soon")).not.toBeInTheDocument();
  });

  it("offers a direct contact alternative when clipboard access is denied", async () => {
    const user = userEvent.setup();
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: vi.fn().mockRejectedValue(new Error("permission denied")),
      },
    });
    renderRoute("/");
    await user.click(await screen.findByRole("button", { name: "English" }));
    await user.click(screen.getByRole("button", { name: "Copy email" }));
    await waitFor(() =>
      expect(screen.getByRole("status")).toHaveTextContent("Unable to copy."),
    );
    expect(
      screen.getByRole("link", { name: /Send me an email/ }),
    ).toHaveAttribute("href", "mailto:nguyenhuuquoc912005@gmail.com");
  });

  it("supports opening mobile navigation, Escape focus return, and closing after navigation", async () => {
    const user = userEvent.setup();
    renderRoute("/");
    const toggle = await screen.findByRole("button", { name: "Mở menu" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    await user.click(toggle);
    const navigation = document.getElementById("mobile-navigation");
    expect(navigation).toBeInTheDocument();
    await user.click(within(navigation!).getByRole("link", { name: "Dự án" }));
    expect(await screen.findAllByRole("article")).toHaveLength(7);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(
      document.getElementById("mobile-navigation"),
    ).not.toBeInTheDocument();
  });

  it("shows updated full and compact timelines in both languages with direct project links", async () => {
    const user = userEvent.setup();
    const fullJourney = renderRoute("/journey");
    const heading = await screen.findByRole("heading", {
      name: "Dự án quản lý cửa hàng tạp hóa Minh",
    });
    const milestone = heading.closest("article");
    expect(milestone).not.toBeNull();
    const milestones = screen.getAllByRole("article");
    expect(milestones).toHaveLength(5);
    milestones.forEach((item, index) => {
      expect(within(item).getByRole("heading", { level: 3 })).toHaveTextContent(expectedJourney[index].titleVi);
      expect(within(item).getByText(expectedJourney[index].descriptionVi)).toBeVisible();
      expect(item.querySelector("details")).not.toBeInTheDocument();
    });
    expect(within(milestones[3]).getByText("10/2025 – nay")).toBeVisible();
    for (const item of milestones.slice(0, 2)) {
      expect(within(item).queryByRole("button")).not.toBeInTheDocument();
      expect(within(item).queryByRole("link")).not.toBeInTheDocument();
      expect(item.querySelector("details")).not.toBeInTheDocument();
    }
    expect(screen.getAllByRole("link", { name: "Xem dự án" }).map((link) => link.getAttribute("href"))).toEqual([
      "/projects/minh-grocery", "/projects/green-food-research", "/projects/document-workflow",
    ]);
    await user.click(screen.getByRole("button", { name: "English" }));
    milestones.forEach((item, index) => {
      expect(within(item).getByRole("heading", { level: 3 })).toHaveTextContent(expectedJourney[index].titleEn);
      expect(item.querySelector(".timeline-card > p")).toHaveTextContent(/\bI\b/);
      expect(item).not.toHaveTextContent(expectedJourney[index].descriptionVi);
    });
    expect(screen.getAllByRole("link", { name: "View project" }).map((link) => link.getAttribute("href"))).toEqual([
      "/projects/minh-grocery", "/projects/green-food-research", "/projects/document-workflow",
    ]);
    await user.click(screen.getByRole("button", { name: "Tiếng Việt" }));
    await user.click(
      within(milestone!).getByRole("link", { name: "Xem dự án" }),
    );
    expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent(
      "Hệ thống quản lý cửa hàng tạp hóa Minh",
    );
    fullJourney.unmount();
    renderRoute("/");
    const compact = document.querySelector(".timeline-compact")!;
    const compactMilestones = within(compact as HTMLElement).getAllByRole("article");
    const compactContent = [expectedJourney[0], expectedJourney[2], expectedJourney[4]];
    expect(compactMilestones).toHaveLength(3);
    compactMilestones.forEach((item, index) => {
      expect(within(item).getByRole("heading", { level: 3 })).toHaveTextContent(compactContent[index].titleVi);
      expect(within(item).getByText(compactContent[index].descriptionVi)).toBeVisible();
      expect(item.querySelector("details")).not.toBeInTheDocument();
    });
    expect(within(compact as HTMLElement).getAllByRole("link", { name: "Xem dự án" }).map((link) => link.getAttribute("href"))).toEqual([
      "/projects/minh-grocery", "/projects/document-workflow",
    ]);
    await user.click(screen.getByRole("button", { name: "English" }));
    compactMilestones.forEach((item, index) => {
      expect(within(item).getByRole("heading", { level: 3 })).toHaveTextContent(compactContent[index].titleEn);
      expect(item.querySelector(".timeline-card > p")).toHaveTextContent(/\bI\b/);
    });
  });

  it("shows back-to-top after scrolling and respects reduced motion", async () => {
    const user = userEvent.setup();
    renderRoute("/about");
    await screen.findByRole("heading", { level: 1 });
    expect(
      screen.queryByRole("button", { name: "Về đầu trang" }),
    ).not.toBeInTheDocument();
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 700,
    });
    fireEvent.scroll(window);
    const backToTop = screen.getByRole("button", { name: "Về đầu trang" });
    await user.click(backToTop);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = (query) => ({
      ...originalMatchMedia(query),
      matches: true,
    });
    try {
      await user.click(backToTop);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: "instant",
      });
    } finally {
      window.matchMedia = originalMatchMedia;
      Object.defineProperty(window, "scrollY", {
        configurable: true,
        value: 0,
      });
    }
  });
});
