import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header del Dashboard */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Bienvenido a tu Panel, {user?.given_name || user?.name?.split(" ")[0]}
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Desde aquí podrás ver cómo funciona el proceso para contratar los servicios de DataDev.
          </p>
        </div>

        {/* Caja principal */}
        <div className="bg-white shadow-xl rounded-3xl p-10">
          
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            ¿Cómo contratar nuestros servicios?
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>
              En <span className="font-semibold">DataDev</span> ofrecemos soluciones digitales personalizadas, centradas en
              resultados y diseñadas para ayudarte a hacer crecer tu negocio.
            </p>

            <p>A continuación verás cómo funciona el proceso de compra:</p>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">

              {/* Step 1 */}
              <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-blue-600 font-bold text-xl mb-2">1. Elige tu servicio</div>
                <p className="text-gray-600">
                  Revisa nuestras soluciones disponibles (páginas web, automatizaciones, dashboards, branding…) 
                  y selecciona la que mejor se adapte a tus necesidades.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-blue-600 font-bold text-xl mb-2">2. Reserva tu sesión</div>
                <p className="text-gray-600">
                  Agenda una breve llamada donde analizaremos tu proyecto y te entregaremos una propuesta personalizada.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-blue-600 font-bold text-xl mb-2">3. Confirmación y desarrollo</div>
                <p className="text-gray-600">
                  Una vez aprobada la propuesta, comenzamos a trabajar. Podrás ver los avances desde tu dashboard.
                </p>
              </div>

            </div>

            <p>
              Nuestro proceso está diseñado para ser rápido, claro y transparente.  
              Si tienes dudas en cualquier momento, estamos aquí para ayudarte.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:bg-blue-700 transition"
            >
              Hablar con un especialista
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;