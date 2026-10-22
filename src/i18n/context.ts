import { createContext } from "react";
import type { Language, Localized } from "../types";

export const languageKey = "portfolio-language";
export const I18nContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: Localized) => string;
} | null>(null);
