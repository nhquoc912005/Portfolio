import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { I18nProvider } from "../i18n/I18nContext";
import { languageKey } from "../i18n/context";
import { Hero } from "../sections/Hero";
import About from "../pages/About";
import { AchievementCards } from "../sections/SupportingSections";

vi.mock("../data/profile", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../data/profile")>();
  return {
    profile: {
      ...actual.profile,
      portrait: {
        src: "/test-only-owner-portrait.png",
        alt: { vi: "Chân dung kiểm tra", en: "Test owner portrait" },
      },
    },
  };
});

vi.mock("../data/achievements", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../data/achievements")>();
  return {
    achievements: actual.achievements.map((item, index) =>
      index === 0
        ? {
            ...item,
            image: {
              src: "/test-only-certificate.png",
              alt: { vi: "Chứng nhận kiểm tra", en: "Test certificate" },
              kind: "certificate",
            },
          }
        : item,
    ),
  };
});

describe("media supplied later by the portfolio owner", () => {
  it.each(["vi", "en"])("uses the real supplied portrait and %s alt text on Home and About", (language) => {
    localStorage.setItem(languageKey, language);
    const alt = language === "vi" ? "Chân dung kiểm tra" : "Test owner portrait";
    const home = render(<MemoryRouter><I18nProvider><Hero /></I18nProvider></MemoryRouter>);
    expect(screen.getByAltText(alt)).toHaveAttribute("src", "/test-only-owner-portrait.png");
    home.unmount();
    render(<MemoryRouter><I18nProvider><About /></I18nProvider></MemoryRouter>);
    expect(screen.getByAltText(alt)).toHaveAttribute("src", "/test-only-owner-portrait.png");
  });

  it("shows a supplied certificate through the accessible gallery", () => {
    render(<I18nProvider><AchievementCards /></I18nProvider>);
    expect(screen.getAllByRole("article")).toHaveLength(3);
    const certificate = screen.getByAltText("Chứng nhận kiểm tra");
    expect(certificate).toHaveAttribute("src", "/test-only-certificate.png");
    expect(certificate).toHaveAttribute("loading", "lazy");
    expect(screen.getByRole("button", { name: "Phóng to hình ảnh: Chứng nhận kiểm tra" })).toBeEnabled();
  });
});
