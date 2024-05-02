import { Boddy } from "./components/Boddy";
import { Header } from "./components/Header";
import { Image } from "./components/Image";

const page = () => {
  return(
    <div>
       <Header logo="Jonas Limah"/>
       <Boddy>
          <><Image/></>
       </Boddy>
    </div>
  );
};

export default page;