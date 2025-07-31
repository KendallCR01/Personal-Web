import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Background from './components/Background';

function App() {
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

export default App;
