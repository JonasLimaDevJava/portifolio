type Props = { 
    id : number,
    img: string,
    title : string,
    link : string,
    subtitle: string
}

export const Item =({id,img,title,link,subtitle}:Props) => {
    return(
        <div key={id} className="max-w-md  flex justify-around cursor-pointer border-2 p-2 rounded-md">
            <img className="min-w-32 min-h-32 rounded-md " src={img} alt="image"  />
            <div className="bg-white w-full flex flex-col justify-center rounded-md ml-2 text-black text-center">
                <h1 className=" text-xl font-mono font-bold  flex flex-col justify-center">{title}</h1>
                <p className=" text-sm font-sans flex flex-col justify-center">{link}</p>
                <p className=" text-lg flex flex-col justify-center">{subtitle}</p>
            </div>
        </div>
    )
}