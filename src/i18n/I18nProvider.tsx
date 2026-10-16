"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Locale, type TranslationKey } from "./translations";

const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({
  locale: "en",
  setLocale: () => undefined,
});

export function I18nProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved === "es" || saved === "en" || saved === "ca") setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    localStorage.setItem("locale", nextLocale);
    setLocaleState(nextLocale);
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useI18n() {
  const { locale, setLocale } = useContext(LocaleContext);
  return { locale, setLocale, t: (key: TranslationKey) => translations[locale][key] };
}
