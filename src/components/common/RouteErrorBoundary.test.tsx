import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { I18nProvider, useI18n } from "../../i18n/I18nContext";
import { RouteErrorBoundary } from "./RouteErrorBoundary";

function BrokenRoute(): never {
  throw new Error("Test route chunk failed");
}

function LanguageControls() {
  const { setLanguage } = useI18n();
  return <button onClick={() => setLanguage("en")}>English</button>;
}

describe("route loading error boundary", () => {
  it("shows healthy route content without an error state", () => {
    render(<I18nProvider><RouteErrorBoundary><h1>Working route</h1></RouteErrorBoundary></I18nProvider>);
    expect(screen.getByRole("heading", { name: "Working route" })).toBeVisible();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("catches a route crash and offers a localized reload control while surrounding controls stay usable", async () => {
    const expectedReactError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    try {
      const user = userEvent.setup();
      render(<I18nProvider><LanguageControls /><RouteErrorBoundary><BrokenRoute /></RouteErrorBoundary></I18nProvider>);
      const fallback = screen.getByRole("alert");
      expect(within(fallback).getByRole("heading", { name: "Nội dung chưa thể hiển thị." })).toBeVisible();
      expect(within(fallback).getByRole("button", { name: "Tải lại trang" })).toBeEnabled();
      await user.click(screen.getByRole("button", { name: "English" }));
      expect(within(fallback).getByRole("heading", { name: "This content could not be displayed." })).toBeVisible();
      expect(within(fallback).getByRole("button", { name: "Reload page" })).toBeEnabled();
    } finally {
      expectedReactError.mockRestore();
    }
  });
});
