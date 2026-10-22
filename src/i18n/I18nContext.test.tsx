import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { I18nProvider, useI18n } from "./I18nContext";
import { languageKey } from "./context";

function LanguageConsumer() {
  const { language, setLanguage, t } = useI18n();
  return (
    <>
      <p>{t({ vi: "Xin chào", en: "Hello" })}</p>
      <output>{language}</output>
      <button onClick={() => setLanguage("en")}>English</button>
    </>
  );
}

describe("localization provider", () => {
  it("defaults safely to Vietnamese when storage holds an unsupported value", () => {
    localStorage.setItem(languageKey, "unsupported");
    render(
      <I18nProvider>
        <LanguageConsumer />
      </I18nProvider>,
    );
    expect(screen.getByText("Xin chào")).toBeVisible();
    expect(document.documentElement.lang).toBe("vi");
  });

  it("restores English and keeps the document language in sync", () => {
    localStorage.setItem(languageKey, "en");
    render(
      <I18nProvider>
        <LanguageConsumer />
      </I18nProvider>,
    );
    expect(screen.getByText("Hello")).toBeVisible();
    expect(document.documentElement.lang).toBe("en");
  });

  it("still changes language when browser storage is unavailable", async () => {
    const read = vi
      .spyOn(Storage.prototype, "getItem")
      .mockImplementation(() => {
        throw new Error("storage denied");
      });
    const write = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {
        throw new Error("storage denied");
      });
    try {
      const user = userEvent.setup();
      render(
        <I18nProvider>
          <LanguageConsumer />
        </I18nProvider>,
      );
      expect(screen.getByText("Xin chào")).toBeVisible();
      await user.click(screen.getByRole("button", { name: "English" }));
      expect(screen.getByText("Hello")).toBeVisible();
      expect(document.documentElement.lang).toBe("en");
    } finally {
      read.mockRestore();
      write.mockRestore();
    }
  });

  it("reports a useful developer error if the provider is missing", () => {
    expect(() => renderHook(useI18n)).toThrow(
      "useI18n must be used inside I18nProvider",
    );
  });
});
