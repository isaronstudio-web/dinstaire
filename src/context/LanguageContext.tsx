"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationKeys } from "@/lib/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  // Check URL for language
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) {
      setLanguage("en");
    } else if (path.startsWith("/es")) {
      setLanguage("es");
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    // Update URL
    const path = window.location.pathname;
    if (lang === "en") {
      if (!path.startsWith("/en")) {
        window.location.href = "/en" + path;
      }
    } else {
      if (path.startsWith("/en")) {
        window.location.href = path.replace("/en", "") || "/";
      } else {
        window.location.href = path;
      }
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}