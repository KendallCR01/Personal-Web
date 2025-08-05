import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Kendall Tencio</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{t('role')}</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#inicio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.home')}</a>
          <a href="#sobremi" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.about')}</a>
          <a href="#proyectos" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.projects')}</a>
          <a href="#contacto" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.contact')}</a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center md:space-x-4">

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition mr-2"
            aria-label="Cambiar idioma"
          >
            <Languages size={22} />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition"
            aria-label="Cambiar tema"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-2 text-gray-700 dark:text-gray-200"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 text-gray-700 dark:text-gray-200 font-medium px-4 py-4 space-y-3 shadow">
          <a href="#inicio" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.home')}</a>
          <a href="#sobremi" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.about')}</a>
          <a href="#proyectos" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.projects')}</a>
          <a href="#contacto" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">{t('nav.contact')}</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
