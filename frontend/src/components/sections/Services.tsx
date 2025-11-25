import Card from "../Card"
import landing from '../../assets/landing-example.jpg'
import hosting from '../../assets/hosting.png'
import automatizacion from '../../assets/automatizacion.avif'

function Services () {
    return (
        <>
            <div className="flex justify-center min-h-screen bg-slate-100 p-6 md:p-10 pb-20" id="services">
                <div className="w-full md:w-[80%] mt-4">
                    {/* Texto */}
                    <div id="text" className="flex flex-col gap-6 w-full md:w-140 mb-6 text-center md:text-left">
                        <p className="uppercase tracking-wide text-gray-600">Servicios</p>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Soluciones digitales para tu negocio
                        </h2>
                        <p className="text-gray-700">
                            Ofrezco servicios de <strong>desarrollo web full stack</strong> para empresas y emprendedores que buscan 
                            mejorar su presencia online. Desde la creación de <strong>sitios web modernos y optimizados para SEO</strong>, 
                            hasta el desarrollo de <strong>aplicaciones escalables</strong> con tecnologías como React, Node.js y TailwindCSS. 
                            Mi objetivo es ayudarte a crecer con soluciones digitales rápidas, seguras y adaptadas a tus necesidades.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="flex justify-center w-full">
                        <div id="cards" className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-stretch">
                            <Card 
                                title="Aplicaciones web a medida" 
                                description="Creamos soluciones adaptadas a las necesidades de tu negocio, desde portales corporativos hasta plataformas de ecommerce." 
                                image={landing}
                            />
                            <Card 
                                title="Conectividad y Automatización" 
                                description="Integramos tus sistemas con APIs externas para optimizar procesos y reducir tareas manuales." 
                                image={automatizacion}
                            />
                            <Card 
                                title="Hosting Seguro y Escalable" 
                                description="Ofrecemos alojamiento confiable con soporte técnico y mantenimiento continuo para garantizar el rendimiento de tu web." 
                                image={hosting}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services