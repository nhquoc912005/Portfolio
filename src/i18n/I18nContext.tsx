import { useContext, useEffect, useState, type ReactNode } from "react";
import type { Language, Localized } from "../types";
import { I18nContext, languageKey } from "./context";

function savedLanguage(): Language {
  try {
    return localStorage.getItem(languageKey) === "en" ? "en" : "vi";
  } catch {
    return "vi";
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>(savedLanguage);
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(languageKey, language);
    } catch {
      /* Language still works when browser storage is unavailable. */
    }
  }, [language]);
  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: updateLanguage,
        t: (value: Localized) => value[language],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

// Keeping this hook beside the provider gives all consumers one public i18n entry point.
// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
}
