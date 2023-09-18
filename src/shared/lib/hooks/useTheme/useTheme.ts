// shared/lib/hooks/useTheme/useTheme.ts
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../../const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "../../../const/localstorage";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

// shared/lib/hooks/useTheme/useTheme.ts
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  let newTheme: Theme; // объявляю но не инициализирую переменную

  switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
  }

  document.body.className = newTheme;

  const toggleTheme = () => {
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return { theme: theme || Theme.LIGHT, toggleTheme };
}
