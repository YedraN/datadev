import JJ from './../../assets/JJ.jfif'
import './../../App.css'

function Welcome() {
    return (
        <>
            <div className="flex h-160 bg-slate-200 p-10 items-center">
                <div id="text" className="flex flex-col gap-6 w-140">
                    <p className="">
                        Desarrollador web full stack freelance especializado en crear sitios modernos y aplicaciones escalables.
                    </p>
                    <h1 className="text-5xl font-bold">
                        Desarrollo Web Profesional y Optimizado para SEO
                    </h1>
                    <p>
                        Ayudo a empresas y emprendedores a mejorar su presencia digital con páginas rápidas, seguras y optimizadas para buscadores. 
                        Con experiencia en <strong>React, Node.js, TailwindCSS y bases de datos modernas</strong>, 
                        diseño soluciones que potencian tu negocio y generan resultados reales.
                    </p>
                    <div className="flex items-center gap-10">
                        <button className="bg-blue-600 px-4 py-2.5 rounded-lg font-bold text-white transition duration-300 hover:-translate-2 hover:cursor-pointer">
                            🚀 Trabaja conmigo
                        </button>
                        <a href="/" className="text-blue-600 font-bold">
                            Ver mi portfolio ➤
                        </a>
                    </div>
                </div>
                <div id="image">
                    <img 
                        src={JJ} 
                        alt="Juanjo, desarrollador web full stack freelance" 
                        draggable="false" 
                        className="rounded-full w-100 ml-60 border-4 border-blue-400 wave" 
                    />
                </div>
            </div>
        </>
    )
}

export default Welcome