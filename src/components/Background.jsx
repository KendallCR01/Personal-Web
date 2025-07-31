import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Particles
        key={isDarkMode ? 'dark' : 'light'}
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "transparent" },
          },
          particles: {
            color: {
              value: isDarkMode ? "#ffffff" : "#000000", // 👈 aquí el color correcto
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 1,
            },
            shape: {
              type: "circle",
            },
            number: {
              value: 160,
              density: { enable: true, area: 800 },
            },
          },
        }}
      />
    </div>
  );
};

export default Background;
