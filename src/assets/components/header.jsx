export function Header() {
    return (
        <header className="flex flex-col gap-5 text-center justify-between items-center bg-black
        text-white p-5 uppercase text-[12px] md:flex-row md:text-[16px] lg:text-[18px] lg:flex-row">
            <div className="logo ">
                <i className=" icon fa-solid fa-scale-balanced   text-amber-500 text-2xl"></i>
                <h1 className= "text-[7px]" >Nome da empresa</h1>
                <h2 className= "text-[7px]" >advogados associados</h2>
            </div>
            <nav>
                <ul className="flex justify-between gap-5 ">
                    <li className="text-[10px]  hover:scale-[1.1] hover:text-amber-500 trasnsition duration-500"><a href="#Home">Home</a></li>
                    <li className="text-[10px]  hover:scale-[1.1] hover:text-amber-500 trasnsition duration-500"><a href="#QuemSomos">Quem somos</a></li>
                    <li className="text-[10px]  hover:scale-[1.1] hover:text-amber-500 trasnsition duration-500"><a href="#Atuacao">atuação</a></li>
                    <li className="text-[10px]  hover:scale-[1.1] hover:text-amber-500 trasnsition duration-500"><a href="#Contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}