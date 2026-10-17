import React, { createContext, useState, useEffect, ReactNode } from "react";

import esTranslations from "../locales/es/common.json";
import enTranslations from "../locales/en/common.json";
import frTranslations from "../locales/fr/common.json";
import deTranslations from "../locales/de/common.json";
import itTranslations from "../locales/it/common.json";

export type Language = "es" | "en" | "fr" | "de" | "it";

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
];

interface TranslationContextType {
  t: (key: string) => string;
  tList: (key: string) => string[];
  language: Language;
  setLanguage: (language: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

const translations: Record<Language, unknown> = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations,
  de: deTranslations,
  it: itTranslations,
};

const lookup = (source: unknown, key: string): unknown =>
  key.split(".").reduce<unknown>((value, k) => {
    if (value && typeof value === "object" && k in value) {
      return (value as Record<string, unknown>)[k];
    }
    return undefined;
  }, source);

const isLanguage = (value: string | null): value is Language =>
  LANGUAGES.some((l) => l.code === value);

const getInitialLanguage = (): Language => {
  try {
    const saved = localStorage.getItem("language");
    if (isLanguage(saved)) return saved;
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
  const browser = navigator.language.slice(0, 2);
  return isLanguage(browser) ? browser : "es";
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("language", language);
    } catch {
      // ignorar
    }
  }, [language]);

  // Busca en el idioma activo y, si no existe, en español como fallback
  const resolve = (key: string) =>
    lookup(translations[language], key) ?? lookup(translations.es, key);

  const t = (key: string): string => {
    const value = resolve(key);
    return typeof value === "string" ? value : key;
  };

  const tList = (key: string): string[] => {
    const value = resolve(key);
    return Array.isArray(value) ? value : [];
  };

  return (
    <TranslationContext.Provider value={{ t, tList, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext };
