import { Boddy } from "../components/Boddy";
import { Grid } from "../components/Grid";
import { Header } from "../components/Header";



const page = () => {
  return(
    <div>
       <Header logo="Jonas Limah"/>
       <Boddy>
          <div className=" h-screen  ">
            <Grid/>
          </div>
       </Boddy>
    </div>
  );
};

export default page;