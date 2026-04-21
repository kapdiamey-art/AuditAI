import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type T } from "@/lib/i18n";

type Theme = "dark" | "light";
type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
};

const ThemeLangCtx = createContext<Ctx | null>(null);

export function ThemeLangProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeLangCtx.Provider value={{ theme, setTheme, lang, setLang, t: translations[lang] }}>
      {children}
    </ThemeLangCtx.Provider>
  );
}

export function useThemeLang() {
  const ctx = useContext(ThemeLangCtx);
  if (!ctx) throw new Error("useThemeLang must be used within ThemeLangProvider");
  return ctx;
}
