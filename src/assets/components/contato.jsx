export function Contato(){
    return(
        <section className="flex flex-col items-center justify-center gap-5 p-5" id="Contato">
            <div className="flex flex-col text-center ">
                <h2 className="bg-linear-to-r from-amber-500 via-orange-500 to-amber-700 bg-clip-text text-transparent
                text-[28px] lg:text-4xl">Entre em Contato</h2>
                <p>E quaso de dúvidas ou sugestões, entre em contato conosco</p>
            </div>
            
            <div className="container lg:flex flex flex-col   justify-center">
                <div className="flex gap-5 text-2xl md:text-4xl lg:text-5xl justify-center">
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text-pink-600 hover:-translate-y-1 transition duration-700 cursor-pointer"  ></i></a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp text-green-500 hover:-translate-y-1 transition duration-700 cursor-pointer" ></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-blue-500 hover:-translate-y-1  transition duration-700 cursor-pointer" ></i></a>
                    <i></i>
                </div>
                <form action="" className="flex flex-col md:w-100 w-80 mx-auto justify-center gap-2 p-2  ">
                    <input type="text" placeholder="Nome" className="border-2 border-amber-500 rounded-2xl p-2  bg-gray-200 "/>
                    <input type="email" placeholder="Email" className="border-2 border-amber-500 rounded-2xl p-2 bg-gray-200"/>
                    <input type="text" placeholder="Assunto " className="border-2 border-amber-500 rounded-2xl p-2  bg-gray-200" />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Mensagem" className="border-2 border-amber-500 rounded-2xl p-2 bg-gray-200"></textarea>
                    <button type="submit" className="bg-linear-to-t from-amber-600 via-amber-500 to-amber-400 text-white rounded-2xl hover:translate-y-1
                    transition duration-600 ">Enviar</button>
                </form>
            </div>
        </section>
    )
}