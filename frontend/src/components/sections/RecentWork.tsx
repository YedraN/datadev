interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Pokedex",
    description:
      "Pokedex interactiva hecha con React y Python que consume la API de PokeAPI devolviendo los pokemons que se consulten con todos sus datos.",
    technologies: ["React", "TailwindCSS", "Python"],
  },
  {
    title: "E-commerce",
    description:
      "Aplicación de un supermercado con carrito y pasarela de pago hecha mediante Stripe. Construida con React y Next.js.",
    technologies: ["React", "Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Clon de Twitter",
    description:
      "Clon real y funcional de Twitter (X) hecho con React Native y un backend en Python + PostgreSQL.",
    technologies: ["Python", "React Native", "PostgreSQL"],
  },
];

export default function RecentWork() {
  return (
    <section className="flex flex-col items-center bg-slate-200 p-6 md:p-10" id="projects">
      {/* Texto introductorio */}
      <div className="flex flex-col gap-6 w-full md:w-140 md:ml-42 mb-10 text-center md:text-left">
        <p className="uppercase tracking-wide text-gray-600">Proyectos</p>
        <h2 className="text-2xl md:text-3xl font-bold">Proyectos Destacados</h2>
        <p className="text-gray-700">
          Descubre algunos de los proyectos más destacados que he desarrollado
          como freelance full stack developer. Cada uno está diseñado para
          ofrecer rendimiento, escalabilidad y una experiencia de usuario
          moderna, utilizando tecnologías actuales como React, Node.js y
          TailwindCSS.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12 w-full md:w-auto">
        {projects.map((project) => (
          <div key={project.title} className="relative">
            {/* Punto del timeline */}
            <div className="absolute -left-3 top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-slate-200"></div>

            {/* Contenido */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-600 mb-2">
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