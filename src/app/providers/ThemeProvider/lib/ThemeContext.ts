// app/providers/ThemeProvider/lib/ThemeContext.ts
import { createContext } from "react";

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  ORANGE = "app_orange_theme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const LOCAL_STORAGE_THEME_KEY = "theme";
