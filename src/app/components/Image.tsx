


export const Image=()=>{

    return(
        <div className=" w-full m-auto  h-full flex flex-col items-center">
            <img  src="https://media.licdn.com/dms/image/D4D03AQHY-fVYBOwg-w/profile-displayphoto-shrink_800_800/0/1714323677576?e=1720051200&v=beta&t=RoQtZ0s8KfJlZmLR_Fgx1sRQlmlGFov7LJybQBUULE0" alt="logo" className=" border-2 w-52 bg-white h-52 rounded-full object-fill" />
            <h1 className="text-lg text-orange-100 font-serif mt-4">Quem sou eu?</h1>
            <div className="w-96 mt-4 border-l-2 p-2">
            <p className="text-sm text-justify indent-2 ">Olá! me chamo Jonas sou Desenvolvedor e autor desse portifólio. Atualmente trabalho como " Gestor de trafego e Marketing Digital "
                para as empresas no ramo de pizzaria e studio de designer em cílios e sobrancelhas.
                Sou responável por criar e analisar criativos, metas e gestão de mídias socias. presto serviços 
                digitais de freelancer para empresa [<strong><a href="https://www.instagram.com/esfihasvitoria" target="_blank">esfihasvitoria</a>, <a href="https://www.instagram.com/esfihasvitoria" target="_blank"> MS Studio de Sobrancelhas e Cílios ]</a></strong> </p>
            <p  className="text-sm text-justify indent-2 mt-4">Trabalho com ênfase em dois pilares fundamentais ná area de Tecnologia. 
                "Organização e Análise de Requisito ou Produto" um bom projeto precisa ser organizado más precisamos antes saber para quem e para qual 
                finalidade o projeto ou produto vai ser desenvolvido.
            </p>
            <p  className="text-sm text-justify indent-2 mt-4">Creio eu que um bom profissional no mercado da Tecnolôgia, precisa estar apto para 
            atuar tando na parte de desenvolvimento web ou micro-services e utilizar os meios digitais como a gestao de tráfego - marketing Digital para gerar engajamento 
            e expandir sua carreira. 
            </p>
            </div>
            <h1 className="text-lg text-orange-100 font-serif mt-4">Formação Acadêmica</h1>
            <div className="w-96 mt-4">
            <p className="text-sm text-justify indent-2 ">- Análise e Desenvolvimento de Sistema [<strong><a href="https://www.unifatecie.com.br/" target="_blank">Unifatécie</a>]</strong> </p>
            <p className="text-sm text-justify indent-2 ">- Tecnólogo em Manutenção Industrial [<strong><a href="https://www.centec.com.br/" target="_blank">Centec/FATEC</a>]</strong> </p>
            </div>
            <h1 className="text-lg text-orange-100 font-serif mt-4">Habilidades</h1>
            <div className="w-96 mt-4">
                <ul>
                    <li className="text-sm">- Desenvolvimento Web.</li>
                    <li className="text-sm">- Desenvolvimento Springboot/Java para micro-services.</li>
                    <li className="text-sm">- Gestor de Tráfego Pago e Orgânico.</li>
                    <li className="text-sm">- Auxiliar em Marketing Digital.</li>
                    <li className="text-sm">- Gestor de Mídias Sociais.</li>
                </ul>
            </div>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5588997733911&text=Olá! gostaria de saber mais sobre seu trabalho." className="bg-orange-300 mt-4 rounded-md p-1 transition-all border-2 border-transparent hover:bg-black hover:border-2 hover:border-white cursor-pointer ">Entrar em Contato</a>
            
        </div>
    );

}