import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = window.localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
    } else if (systemDark) {
      setTheme('dark');
    }

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return { theme, setTheme };
};
