import { useLanguage } from '../hooks/useLanguage';

const Hero = () => {
  const { t, language } = useLanguage();

  // Usar el mismo id de sección que el Header según el idioma
  const projectsHref = language === 'en' ? '#projects' : '#proyectos';

  return (
    <section key={language} className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-transparent dark:bg-transparent">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        {t('hero.title')}
      </h2>
      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        {t('hero.description')}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={projectsHref}
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          {t('hero.projectsButton')}
        </a>
        <a
          href="/Resume.pdf"
          download="Kendall-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          {t('hero.downloadCV')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
