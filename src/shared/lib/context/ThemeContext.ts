// shared/lib/ThemeProvider/context/ThemeContext.ts
import { createContext } from 'react';
import { Theme } from '../../const/theme';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);
