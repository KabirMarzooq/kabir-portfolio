"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { THEMES, getTheme, themeToVars, DEFAULT_THEME_ID, type Theme } from "@/lib/themes";

const STORAGE_KEY = "portfolio-theme";

interface ThemeContextValue {
  theme: Theme;
  themeId: string;
  setThemeId: (id: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyVars(theme: Theme) {
  const root = document.documentElement;
  const vars = themeToVars(theme);
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute("data-theme", theme.id);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setId] = useState<string>(DEFAULT_THEME_ID);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES.some((t) => t.id === saved)) setId(saved);
  }, []);

  const setThemeId = useCallback((id: string) => {
    setId(id);
    localStorage.setItem(STORAGE_KEY, id);
    applyVars(getTheme(id));
  }, []);

  const theme = getTheme(themeId);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
