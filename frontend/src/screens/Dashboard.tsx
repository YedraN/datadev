import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Bienvenido, {user?.given_name || user?.name?.split(" ")[0]}
          </h1>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Elige uno de nuestros servicios profesionales.  
            Cada plan es completamente personalizable según las necesidades de tu negocio.
          </p>
        </div>

        {/* GRID DE SERVICIOS (3 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* SERVICIO 1 */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
              alt="Aplicaciones web"
              className="w-20 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Aplicaciones Web a Medida
            </h2>
            <p className="text-gray-600 text-center mt-3">
              Desarrollo completo de plataformas web adaptadas a tu negocio.  
              Sistemas internos, paneles, ecommerce, ERPs, dashboards…
            </p>

            {/* Características */}
            <ul className="text-gray-700 mt-6 space-y-2 text-sm">
              <li>✔ Diseño profesional</li>
              <li>✔ Backend completo</li>
              <li>✔ Integraciones API</li>
              <li>✔ Panel de administración</li>
              <li>✔ Entrega rápida</li>
            </ul>

            <button className="mt-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full">
              Contratar
            </button>
          </div>

          {/* SERVICIO 2 */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9068/9068699.png"
              alt="Automatización"
              className="w-20 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Automatización (Python)
            </h2>
            <p className="text-gray-600 text-center mt-3">
              Automatiza procesos repetitivos y ahorra cientos de horas.  
              Bots, scrapers, sistemas de tareas, integraciones con IA…
            </p>

            <ul className="text-gray-700 mt-6 space-y-2 text-sm">
              <li>✔ Automatización completa</li>
              <li>✔ Scripts en Python</li>
              <li>✔ Bots avanzados</li>
              <li>✔ IA opcional</li>
              <li>✔ Integración con APIs</li>
            </ul>

            <button className="mt-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full">
              Contratar
            </button>
          </div>

          {/* SERVICIO 3 */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-8 flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="Servicio personalizado"
              className="w-20 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Desarrollo Personalizado
            </h2>
            <p className="text-gray-600 text-center mt-3">
              Si necesitas algo distinto, te diseñamos una solución a medida:  
              APIs, herramientas internas, integraciones externas, etc.
            </p>

            <ul className="text-gray-700 mt-6 space-y-2 text-sm">
              <li>✔ 100% a medida</li>
              <li>✔ Consultoría incluida</li>
              <li>✔ Integración con tu negocio</li>
              <li>✔ Escalable y seguro</li>
              <li>✔ Soporte continuo</li>
            </ul>

            <button className="mt-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full">
              Contratar
            </button>
          </div>

        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-xl text-lg shadow-xl hover:bg-blue-700 transition"
          >
            ¿Tienes dudas? Habla con nosotros
          </a>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;