
type Props = {
    logo : string
}

export const Header = ({logo}:Props) =>{
    return(
        <div className="mt-2 rounded-md w-10/12 h-20 m-auto bg-black flex justify-between items-center text-white p-2">
            <div>
                <a href="/">
                <h1 className="text-lg text-orange-100 font-serif">{logo}</h1>
                <p className="font-sans text-xs ms-4 bg-slate-400 p-1 rounded-md">Desenvolvedor & Marketing Digital</p>
                </a>
                
            </div>
            <nav className="w-6/12 ">
                <ul className="flex justify-around  ">
                    <li> <a href="/home " className="bg-black mt-4 rounded-md p-1 border-white transition-all border-2 hover:border-transparent hover:bg-orange-300 hover:border-2  ">Home</a></li>
                    <li> <a href="/" className="bg-black mt-4 rounded-md p-1 border-white transition-all border-2 hover:border-transparent hover:bg-orange-300 hover:border-2  ">Sobre</a></li>
                    <li> <a href="/contato" className="bg-black mt-4 rounded-md p-1 border-white transition-all border-2 hover:border-transparent hover:bg-orange-300 hover:border-2  ">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}