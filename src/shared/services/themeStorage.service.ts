import type { Theme } from "../types/theme";

export const themeStorage = {
  getTheme(): Theme {
    return (localStorage.getItem("app-theme") as Theme) || "light";
  },
  setTheme(theme: Theme): void {
    localStorage.setItem("app-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  },
};
