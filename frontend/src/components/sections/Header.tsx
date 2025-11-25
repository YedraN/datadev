function Header() {
    return (
        <>
            <div className="flex p-4 items-center shadow-4xl flex-col md:flex-row md:justify-between">
                {/* Logo + título */}
                <div className="flex items-center gap-[4%] w-full md:w-[40%] md:ml-[20%] justify-center md:justify-start mb-4 md:mb-0">
                    <h2 className="bg-blue-600 px-3 py-1.5 rounded-lg font-bold text-white text-lg">DD</h2>
                    <h2 className="text-2xl font-bold">DataDev</h2>
                </div>

                {/* Navegación + botón */}
                <div className="flex items-center w-full md:w-[60%] flex-col md:flex-row">
                    <nav className="w-full md:w-auto">
                        <ul className="flex gap-[30%] justify-center md:justify-start flex-col md:flex-row">
                            <li className="transition duration-300 hover:cursor-pointer hover:-translate-y-2">
                                <a href="/">Home</a>
                            </li>
                            <li className="opacity-75 transition duration-300 hover:cursor-pointer hover:-translate-y-2">
                                <a href="#services">Servicios</a>
                            </li>
                            <li className="opacity-75 transition duration-300 hover:cursor-pointer hover:-translate-y-2">
                                <a href="#projects">Proyectos</a>
                            </li>
                            <li className="opacity-75 transition duration-300 hover:cursor-pointer hover:-translate-y-2">
                                <a href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="ml-0 md:ml-[30%] mt-4 md:mt-0">
                        <button className="bg-blue-600 px-3 py-1.5 rounded-lg font-bold text-white transition duration-300 hover:-translate-y-2 hover:cursor-pointer">
                            Let's talk
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header