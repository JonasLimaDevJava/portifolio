

export const Grid=()=>{
    return(
        <div className=" m-auto h-full w-5/6 h-96 flex flex-col justify-center items-center ">
            <h1 className="mb-6">Redes Sociais</h1>
            <div className=" grid grid-cols-2 gap-4  ">
            <a href="https://www.github.com/JonasLimah" target="_blank" > <div id="bloco-1" className="hover:scale-y-150 cursor-pointer hover:scale-x-150 transition-all  rounded-full  w-28 h-28 "></div></a>
            <a href="https://br.linkedin.com/in/jonaslimah" target="_blank" > <div id="bloco-2" className=" cursor-pointer hover:scale-y-150 hover:scale-x-150 transition-all rounded-full w-28 h-28"></div></a>
            <a href="#"><div id="bloco-3" className=" cursor-pointer hover:scale-y-150 hover:scale-x-150 transition-all rounded-full w-28 h-28"></div></a>
            <a href="https://api.whatsapp.com/send?phone=5588997733911&text=Olá! gostaria de saber mais sobre seu trabalho." target="_blank" rel="noopener noreferrer"><div id="bloco-4" className=" cursor-pointer hover:scale-y-150 hover:scale-x-150 transition-all rounded-full w-28 h-28"></div></a>
            </div>
            <p className="text-sm mt-6 indent-4 text-justify ">
Nascemos, crescemos e morremos. A inexorável ordem da natureza e do tempo nos coloca entre dois pontos,
 o início e o fim (como na canção de Raul Seixas e Paulo Coelho: o início, o fim e o meio! (**)),
  o nascimento e a morte. E somos o que acontece nesse intervalo, nos afetando por ser importante, pois que é nossa vida,
   e nos moldando à mercê da maré que nos empurra para a frente. Para nós somente é importante, visto que tudo o que nos
    cerca é relativo. Einstein já no início do século XX descrevia a teoria da relatividade, corroborando que tudo na nossa
     breve existência no plano espiritual da vida na terra é relativo. “Mas tudo passa, tudo passará.
 E nada fica, nada ficará…”</p>
        
        <p className=" md:w-96 border p-1 text-xs text-center font-mono italic mt-4 mb-4">
            "Nada detem a indexorável marcha do tempo. Demore o tempo que for para você decidir o que você quer da vida, e depois que decidir não
            recue ante nehum pretexto, porque o mundo tentará te dissuadir."
        </p>
        
        </div>
       
    )
}