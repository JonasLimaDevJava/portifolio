import { ReactNode } from "react";

type Props = {
    children : ReactNode
}

export const Boddy =({children}: Props)=>{

    return(
        <div className=" p-2 rounded-md m-auto bg-black h-full mt-1 text-white w-10/12">{children}</div>
    );
}