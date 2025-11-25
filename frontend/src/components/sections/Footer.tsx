import { useState } from "react";
import '../../App.css'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="bg-slate-100 text-black py-12 px-6" id="contact">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Información */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
          <p className="text-lg mb-6">
            Si tienes alguna idea, proyecto o simplemente quieres saludar, 
            completa el formulario y te responderé lo antes posible.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-600 transition">
              <i className="fa-brands fa-square-x-twitter" id="icon"></i>
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-blue-600 transition">
              <i className="fa-brands fa-github" id="icon"></i>
            </a>
            <a href="mailto:tuemail@ejemplo.com" className="hover:text-blue-600 transition">
              <i className="fa-solid fa-message" id="icon"></i>
            </a>
          </div>
        </div>

        {/* Formulario */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-xl shadow-xl p-8 text-gray-800"
        >
          <div className="mb-4">
            <label className="block font-semibold mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-500 to-pink-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transform transition"
          >
            🚀 Enviar mensaje
          </button>
        </form>
      </div>

      {/* Footer inferior */}
      <div className="text-center mt-12 text-sm opacity-80">
        © {new Date().getFullYear()} Juanjo · Todos los derechos reservados
      </div>
    </footer>
  );
}