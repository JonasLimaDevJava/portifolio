import { Boddy } from "./Boddy";
import { Header } from "./Header";
import { Image } from "./Image";

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

