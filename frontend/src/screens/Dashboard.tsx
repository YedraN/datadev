import { useAuth0 } from "@auth0/auth0-react";
import SEO from "../components/SEO";
import "../App.css";

const Dashboard: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="relative min-h-screen px-6 py-20 overflow-hidden bg-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <SEO
        title="Dashboard - DataDev"
        description="Gestiona tus proyectos y servicios con DataDev desde tu panel de control."
      />
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] animate-float"></div>
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
          <span className="text-blue-400 font-semibold text-sm tracking-wide uppercase">Panel de Cliente</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Bienvenido, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{user?.given_name || user?.name?.split(" ")[0]}</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Selecciona el plan perfecto para escalar tu negocio. Soluciones digitales de alto impacto diseñadas para ti.
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {/* CARD 1 */}
        <ServiceCard
          icon="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
          title="Web a Medida"
          description="Plataformas web completas y escalables."
          features={[
            "Frontend + Backend",
            "Panel de administración",
            "Integraciones API",
            "Diseño UX/UI Premium",
          ]}
          priceId="price_1SXRxwKyAMyE9o5MZ2TH1ehj"
          delay={0}
        />

        {/* CARD 2 (Featured) */}
        <ServiceCard
          icon="https://cdn-icons-png.flaticon.com/512/9068/9068699.png"
          title="Automatización"
          description="Bots y scripts para ahorrar tiempo."
          features={[
            "Bots inteligentes",
            "Scraping de datos",
            "Procesos automáticos",
            "Integración IA",
          ]}
          priceId="price_1SXRyFKyAMyE9o5Mva6NNe4E"
          featured={true}
          delay={100}
        />

        {/* CARD 3 */}
        <ServiceCard
          icon="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          title="Personalizado"
          description="Soluciones únicas para necesidades únicas."
          features={[
            "Desarrollo desde cero",
            "Consultoría técnica",
            "Soporte prioritario",
            "Escalabilidad total",
          ]}
          priceId="price_1SXRyXKyAMyE9o5MBSKU8u8A"
          delay={200}
        />
      </div>

      {/* CONTACT SECTION */}
      <div className="relative z-10 max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">¿Tienes dudas o necesitas algo específico?</h3>
        <p className="text-slate-400 mb-8">Hablemos directamente. Estamos aquí para ayudarte a tomar la mejor decisión.</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <a href="tel:+34682373824" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <span className="text-xl">📞</span>
            </div>
            <span className="font-medium">(+34) 682 37 38 24</span>
          </a>
          
          <div className="hidden md:block w-px h-10 bg-slate-700"></div>

          <a href="mailto:juanjo@datadev.es" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <span className="text-xl">📧</span>
            </div>
            <span className="font-medium">juanjo@datadev.es</span>
          </a>
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
  featured?: boolean;
  delay?: number;
}

const ServiceCard: React.FC<ServiceProps> = ({
  icon,
  title,
  description,
  features,
  priceId,
  featured = false,
  delay = 0,
}) => {
  const handleCheckout = async (priceId: string) => {
    try {
      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned from checkout session");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div 
      className={`relative group flex flex-col h-full p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2
        ${featured 
          ? "bg-slate-800/80 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)]" 
          : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 shadow-xl"
        } backdrop-blur-xl`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wider uppercase">
          Más Popular
        </div>
      )}

      <div className="mb-6 p-4 rounded-2xl bg-slate-700/30 w-20 h-20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={title} className="w-12 h-12 object-contain opacity-90 drop-shadow-lg" />
      </div>

      <h2 className="text-2xl font-bold text-white text-center mb-3">{title}</h2>
      <p className="text-slate-400 text-center text-sm leading-relaxed mb-8 flex-grow">{description}</p>

      <div className="space-y-4 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
            <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${featured ? "bg-blue-500/20 text-blue-400" : "bg-slate-700 text-slate-400"}`}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleCheckout(priceId)}
        className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300
          ${featured
            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/25"
            : "bg-slate-700 hover:bg-slate-600 text-white hover:text-white border border-transparent hover:border-slate-500"
          }`}
      >
        Elegir Plan
      </button>
    </div>
  );
};
