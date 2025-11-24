import Card from "../Card"

function Services () {
    return (
        <>
            <div className="flex justify-center min-h-screen bg-slate-100 p-10 pb-20">
                <div className="w-[80%] mt-4">
                    <div id="text" className="flex flex-col gap-6 w-140 mb-4">
                        <p className="uppercase tracking-wide text-gray-600">Servicios</p>
                        <h2 className="text-3xl font-bold">
                            Soluciones digitales para tu negocio
                        </h2>
                        <p className="text-gray-700">
                            Ofrezco servicios de <strong>desarrollo web full stack</strong> para empresas y emprendedores que buscan 
                            mejorar su presencia online. Desde la creación de <strong>sitios web modernos y optimizados para SEO</strong>, 
                            hasta el desarrollo de <strong>aplicaciones escalables</strong> con tecnologías como React, Node.js y TailwindCSS. 
                            Mi objetivo es ayudarte a crecer con soluciones digitales rápidas, seguras y adaptadas a tus necesidades.
                        </p>
                    </div>
                    <div className="flex justify-center w-full">
                        <div id="cards" className="flex gap-12">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services