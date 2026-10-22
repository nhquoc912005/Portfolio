import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";
import { filterProjects, formatProjectDate } from "./projects";

describe("verified portfolio inventory", () => {
  it("contains seven unique case studies without duplicating ATAX", () => {
    expect(projects).toHaveLength(7);
    expect(new Set(projects.map((project) => project.id)).size).toBe(7);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(7);
    expect(projects.map((project) => project.slug)).toEqual(
      expect.arrayContaining([
        "document-workflow",
        "camsin",
        "shuttle-testing",
        "flic-dashboard",
        "cay-lua-ai",
        "minh-grocery",
        "green-food-research",
      ]),
    );
    expect(
      projects.filter((project) =>
        project.githubUrl?.includes("LapTrinhWeb_Nhom3"),
      ),
    ).toHaveLength(1);
  });

  it("preserves the owner-confirmed roles and original repository owners", () => {
    const roles = Object.fromEntries(
      projects.map((project) => [project.slug, project.role]),
    );
    expect(roles).toEqual({
      "document-workflow": "leader",
      camsin: "leader",
      "shuttle-testing": "member",
      "flic-dashboard": "member",
      "cay-lua-ai": "leader",
      "minh-grocery": "leader",
      "green-food-research": "researcher",
    });
    expect(
      projects.find((project) => project.slug === "flic-dashboard")?.githubUrl,
    ).toBe("https://github.com/V-MinhQuan/TTH_Dashboard-Webchat-CSKH");
    expect(projects.filter((project) => project.githubUrl)).toHaveLength(6);
    expect(
      projects.find((project) => project.slug === "minh-grocery")?.githubUrl,
    ).toBe("https://github.com/nhquoc912005/49K142.10");
  });

  it("only publishes confirmed dates and leaves unspecified contributions empty", () => {
    for (const slug of [
      "camsin",
      "shuttle-testing",
      "flic-dashboard",
      "cay-lua-ai",
    ]) {
      const project = projects.find((entry) => entry.slug === slug);
      expect(project?.startDate).toBeNull();
      expect(project?.endDate).toBeNull();
      expect(project?.contributions).toBeNull();
    }
    expect(
      projects.find((project) => project.slug === "document-workflow"),
    ).toMatchObject({ startDate: "2026-01", endDate: "2026-05" });
    expect(
      projects.find((project) => project.slug === "minh-grocery"),
    ).toMatchObject({ startDate: "2025-09", endDate: "2025-12" });
    expect(
      projects.find((project) => project.slug === "green-food-research"),
    ).toMatchObject({ startDate: "2025-10", endDate: null, ongoing: true });
  });
});

describe("project discovery", () => {
  it("returns every project for All without changing the source inventory", () => {
    const result = filterProjects(projects, "all");
    expect(result).toHaveLength(7);
    expect(result).not.toBe(projects);
    expect(filterProjects(projects, "all", "  ")).toEqual(result);
  });

  it("supports projects assigned to multiple categories", () => {
    expect(
      filterProjects(projects, "ai").map((project) => project.slug),
    ).toContain("cay-lua-ai");
    expect(
      filterProjects(projects, "mobile").map((project) => project.slug),
    ).toContain("cay-lua-ai");
    expect(
      filterProjects(projects, "testing").map((project) => project.slug),
    ).toContain("shuttle-testing");
  });

  it("combines category, localized text and case-insensitive technology searches", () => {
    expect(
      filterProjects(projects, "all", "  dJaNgO ", "en").map(
        (project) => project.slug,
      ),
    ).toContain("document-workflow");
    expect(
      filterProjects(projects, "all", "Cây Lúa", "vi").map(
        (project) => project.slug,
      ),
    ).toContain("cay-lua-ai");
    expect(filterProjects(projects, "mobile", "Django", "en")).toHaveLength(0);
    expect(
      filterProjects(projects, "all", "no-such-project-xyz", "vi"),
    ).toHaveLength(0);
  });
});

describe("project date display", () => {
  it("does not invent a date when none was confirmed", () => {
    expect(
      formatProjectDate({ startDate: null, endDate: null }, "vi"),
    ).toBeNull();
  });

  it("formats fixed and ongoing periods in either language", () => {
    expect(
      formatProjectDate({ startDate: "2026-01", endDate: "2026-05" }, "vi"),
    ).toBe("01/2026 – 05/2026");
    expect(
      formatProjectDate(
        { startDate: "2025-10", endDate: null, ongoing: true },
        "vi",
      ),
    ).toBe("10/2025 – hiện tại");
    expect(
      formatProjectDate(
        { startDate: "2025-10", endDate: null, ongoing: true },
        "en",
      ),
    ).toBe("10/2025 – present");
    expect(
      formatProjectDate({ startDate: "2025-10", endDate: null }, "en"),
    ).toBe("10/2025");
  });
});
