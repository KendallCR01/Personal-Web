import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.getItem('theme') === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !localStorage.getItem('theme'))
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition"
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}
