import JJ from './../../assets/JJ.jfif'
import './../../App.css'

function Welcome() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-auto md:h-160 bg-slate-200 p-6 md:p-10 items-center">
                {/* Texto */}
                <div id="text" className="flex flex-col gap-6 w-full md:w-140 text-center md:text-left">
                    <p>
                        Desarrollador web full stack freelance especializado en crear sitios modernos y aplicaciones escalables.
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Desarrollo Web Profesional y Optimizado para SEO
                    </h1>
                    <p>
                        Ayudo a empresas y emprendedores a mejorar su presencia digital con páginas rápidas, seguras y optimizadas para buscadores. 
                        Con experiencia en <strong>React, Node.js, TailwindCSS y bases de datos modernas</strong>, 
                        diseño soluciones que potencian tu negocio y generan resultados reales.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <button className="bg-blue-600 px-4 py-2.5 rounded-lg font-bold text-white transition duration-300 hover:-translate-y-2 hover:cursor-pointer">
                            🚀 Trabaja conmigo
                        </button>
                        <a href="https://juanjo-yedra.netlify.app/" className="text-blue-600 font-bold">
                            Ver mi portfolio ➤
                        </a>
                    </div>
                </div>

                {/* Imagen */}
                <div id="image" className="mt-8 md:mt-0 flex justify-center md:block">
                    <img 
                        src={JJ} 
                        alt="Juanjo, desarrollador web full stack freelance" 
                        draggable="false" 
                        className="rounded-full w-60 md:w-100 md:ml-60 border-4 border-blue-400 wave" 
                    />
                </div>
            </div>
        </>
    )
}

export default Welcome