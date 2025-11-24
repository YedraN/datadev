interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Un sitio web personal para mostrar mis trabajos y habilidades.",
    technologies: ["React", "TailwindCSS", "Vite"],
  },
  {
    title: "E-commerce App",
    description:
      "Aplicación de comercio electrónico con carrito de compras y pasarela de pago.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Chat Application",
    description: "App de mensajería en tiempo real con autenticación.",
    technologies: ["Node.js", "Socket.io", "PostgreSQL"],
  },
];

export default function RecentWork() {
  return (
    <section className="flex flex-col items-centerbg-slate-200 p-10">
      <div className="flex flex-col gap-6 w-140 ml-42 mb-10">
        <p>Proyectos</p>
        <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
        <p className="text-gray-700">
          Descubre algunos de los proyectos más destacados que he desarrollado
          como freelance full stack developer. Cada uno está diseñado para
          ofrecer rendimiento, escalabilidad y una experiencia de usuario
          moderna, utilizando tecnologías actuales como React, Node.js y
          TailwindCSS.
        </p>
      </div>

      <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="relative">
            {/* Punto del timeline */}
            <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-slate-200"></div>

            {/* Contenido */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
