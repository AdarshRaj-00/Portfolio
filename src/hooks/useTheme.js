import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  };
}
