import { listItem } from "@/data/listItem";
import { Boddy } from "../components/Boddy";
import { Header } from "../components/Header";
import { Item } from "../components/Item";


 const home = () => {
   
    return(
        <div className="max-h-screen">
           <Header logo="Jonas Limah"/>
           <Boddy>
            <div className="text-center m-2 border-2 p-1 rounded-md ">
             <h1 className="font-mono text-lg">Projetos e link para github</h1>
             <p className="text-sm text-justify indent-4">Alguns projetos podem está em fase de conclusão, por tanto se estiver sem thumbnail ou faltando
                  alguma informação peço encarecidamente que ignore. esse portifólio esta em fase de desenvolvimento pode conter Alguns
                  bugs. Caso encontre algum irei deixar uma aba de feedback para que possa nos contatar ✉.

             </p>
            </div>
             
              <div className=" m-auto sm:m-0  h-96 max-w-96 p-1 overflow-y-scroll scroll" >
                  {listItem.map(item => <li  className="m-2 " key={item.id}><Item
                     id={item.id}
                     img={item.img}
                     title={item.title}
                     link={item.link}
                     subtitle= { item.subtitle}
                  />
                  </li>)}
              </div>
              <div className="text-center m-2 border-2 p-1 rounded-md ">
             <h1 className="font-mono text-lg">Projetos e link para github</h1>
             <p className="text-sm text-justify indent-4">Alguns projetos podem está em fase de conclusão, por tanto se estiver sem thumbnail ou faltando
                  alguma informação peço encarecidamente que ignore. esse portifólio esta em fase de desenvolvimento pode conter Alguns
                  bugs. Caso encontre algum irei deixar uma aba de feedback para que possa nos contatar ✉.

             </p>
            </div>
           
           </Boddy>
        </div>);
}

export default home;
