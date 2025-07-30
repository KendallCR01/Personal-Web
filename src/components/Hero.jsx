const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        ¡Hola! Soy Kendall Tencio
      </h2>
      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Desarrollador Backend apasionado por construir APIs robustas, eficientes y seguras. Bienvenido a mi portafolio.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
      <a
        href="#proyectos"
        className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        Ver mis proyectos
      </a>
       <a
        href="/Resume.pdf"
        download="Kendall-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        Descargar CV
      </a>
      </div>
    </section>
  )
}

export default Hero
