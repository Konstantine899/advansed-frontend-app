import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
/* вешаем обязательно иначе будет проблемы с Portal
 и возможно придется переопределять переменные для того что бы все работало.
 если newTheme вешаем на самый главный корневой элемент body, то мы всего этого избежим */
    document.body.className = newTheme;

    const toggleTheme = () => {
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
}
