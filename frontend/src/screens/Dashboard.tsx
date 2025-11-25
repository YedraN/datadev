import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="relative min-h-screen px-6 py-14 overflow-hidden bg-linear-to-t from-gray-200 via-white to-gray-500">
      {/* FIGURAS FLOTANTES VISIBLES */}
      <span className="absolute top-10 left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl animate-float"></span>

      <span className="absolute bottom-20 left-1/3 w-56 h-56 bg-purple-500/25 rounded-full blur-xl animate-float-slow"></span>

      <span className="absolute top-1/2 right-10 w-48 h-48 bg-indigo-400/25 rounded-full blur-xl animate-float-rev"></span>

      <span className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl animate-float"></span>

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Bienvenido, {user?.given_name || user?.name?.split(" ")[0]}
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explora nuestros servicios diseñados para ayudarte a escalar tu
          negocio con soluciones digitales de alto nivel.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* CARD COMPONENT */}
        <ServiceCard
          icon="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
          title="Aplicaciones Web a Medida"
          description="Construimos plataformas web completas, modernas y escalables, adaptadas exactamente a tus necesidades."
          features={[
            "Frontend + Backend completos",
            "Panel de administración",
            "Integraciones API",
            "Diseño profesional",
            "100% a medida",
          ]}
          priceId="price_1SXRxwKyAMyE9o5MZ2TH1ehj"
        />

        <ServiceCard
          icon="https://cdn-icons-png.flaticon.com/512/9068/9068699.png"
          title="Automatización (Python)"
          description="Automatizamos tareas repetitivas para que tu equipo gane tiempo y mejore su productividad."
          features={[
            "Bots inteligentes",
            "Scrapers avanzados",
            "Automatización de procesos",
            "Integración con IA",
            "Scripts en Python",
          ]}
          priceId="price_1SXRyFKyAMyE9o5Mva6NNe4E"
        />

        <ServiceCard
          icon="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          title="Soluciones Personalizadas"
          description="Si necesitas algo único, creamos herramientas a medida desde cero: APIs, integraciones, software interno…"
          features={[
            "100% personalizado",
            "Consultoría técnica incluida",
            "Integración con tu ecosistema",
            "Escalable",
            "Soporte continuo",
          ]}
          priceId="price_1SXRyXKyAMyE9o5MBSKU8u8A"
        />
      </div>

      {/* CTA FINAL + CONTACTO */}
      <div className="mt-20 text-center space-y-8">
        {/* Divider */}
        <div className="w-full flex justify-center">
          <div className="h-px w-2/3 bg-gray-300"></div>
        </div>

        {/* Contacto directo */}
        <div className="space-y-3 text-gray-700 text-lg">
          <p className="font-semibold text-gray-900 text-xl">
            Contacto directo
          </p>

          <p>
            📞 <span className="font-medium">Teléfono:</span>{" "}
            <a
              href="tel:+34682373824"
              className="text-blue-600 hover:underline"
            >
              (+34) 682 37 38 24
            </a>
          </p>

          <p>
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:juanjo@datadev.es"
              className="text-blue-600 hover:underline"
            >
              juanjo@datadev.es
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  priceId: string;
}

/* TARJETA PROFESIONAL */
const ServiceCard: React.FC<ServiceProps> = ({
  icon,
  title,
  description,
  features,
  priceId,
}) => {
  const handleCheckout = async (priceId: string) => {
    const res = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    window.location.href = data.url; // redirige al checkout de Stripe
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition cursor-pointer">
      {/* ICONO */}
      <div className="flex justify-center mb-6">
        <img
          src={icon}
          alt={title}
          className="w-24 h-24 object-contain opacity-90"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-center text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* FEATURES */}
      <ul className="space-y-2 text-gray-700 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-blue-600 text-lg">✔</span> {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => handleCheckout(priceId)}
        className="mt-8 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
      >
        Contratar
      </button>
    </div>
  );
};
