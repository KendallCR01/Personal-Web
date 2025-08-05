import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Background from './components/Background';
import { LanguageProvider } from './context/LanguageProvider';
import { useLanguage } from './hooks/useLanguage';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <button onClick={toggleLanguage} className="p-2 bg-gray-300 rounded fixed top-4 right-4 z-50">
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

function AppContent() {
  const [bgColor, setBgColor] = useState('#ffffff');

  useEffect(() => {
    const updateBgColor = (e) => {
      const isDark = e.matches;
      setBgColor(isDark ? '#ffffff' : '#232741');
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setBgColor(mediaQuery.matches ? '#ffffff' : '#232741');
    mediaQuery.addEventListener('change', updateBgColor);

    return () => {
      mediaQuery.removeEventListener('change', updateBgColor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent dark:bg-transparent transition-colors duration-300 relative">
      <Background backgroundColor={bgColor} />
      <Header />
      <Hero />
      <main className="p-8" id="inicio"></main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      {/* Mueve LanguageToggle aquí para asegurar que useLanguage tiene contexto */}
      <LanguageToggle />
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
