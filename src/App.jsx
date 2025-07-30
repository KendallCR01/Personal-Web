

import './App.css'
import Header from './components/header';
import Hero from './components/Hero'
function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Hero />
      <main className="p-8" id="inicio">
        <section className="my-8" id="sobremi">
          <h2 className="text-xl font-semibold mb-4">Sobre mí</h2>
          <p>
            Soy un desarrollador backend especializado en C#, .NET, Entity Framework, JWT y React.
            Apasionado por crear soluciones sólidas y escalables.
          </p>
        </section>

        <section className="my-8" id="proyectosssss">
          <h2 className="text-xl font-semibold mb-4">Proyectos Destacados</h2>
          <ul className="space-y-4">
            <li className="p-4 border rounded-md bg-white shadow">
              <h3 className="font-bold">Sistema de Formularios Patrimoniales</h3>
              <p>Backend robusto con C# y múltiples servicios integrados.</p>
            </li>
            <li className="p-4 border rounded-md bg-white shadow">
              <h3 className="font-bold">API para Gimnasio</h3>
              <p>Node.js con Oracle y procedimientos almacenados.</p>
            </li>
          </ul>
        </section>

        <section className="my-8" id="contacto">
          <h2 className="text-xl font-semibold mb-4">Contacto</h2>
          <p>kendall.tencio@correo.com | LinkedIn | GitHub</p>
        </section>
      </main>
    </div>
  );
}

export default App;
