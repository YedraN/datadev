function Header() {
    return (
        <>
            <div className="flex p-4 items-center shadow-4xl">
                <div className="flex w-[40%] ml-[20%] gap-[4%] items-center">
                    <h2 className="bg-blue-600 px-3 py-1.5 rounded-lg font-bold text-white text-lg">DD</h2>
                    <h2 className="text-2xl font-bold">DataDev</h2>
                </div>
                <div className="flex w-[60%] items-center">
                    <nav>
                        <ul className="flex gap-[30%]">
                            <li className="transition duration-300 hover:cursor-pointer hover:-translate-y-2">Home</li>
                            <li className="opacity-75 transition duration-300 hover:cursor-pointer hover:-translate-y-2">Services</li>
                            <li className="opacity-75 transition duration-300 hover:cursor-pointer hover:-translate-y-2">Projects</li>
                            <li className="opacity-75 transition duration-300 hover:cursor-pointer hover:-translate-y-2">Contact</li>
                        </ul>
                    </nav>
                    <div className="ml-[30%]">
                        <button className="bg-blue-600 px-3 py-1.5 rounded-lg font-bold text-white transition duration-300 hover:-translate-2 hover:cursor-pointer">Let's talk</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header