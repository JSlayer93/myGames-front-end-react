import { useState } from "react"

const Pictures = ({game}) => {
    const [imageLink, setImageLink] = useState(game.mainPic[0]) 

    return(
        <section className="mt-[5vh]">
            <nav className="h-[50vh] w-full flex justify-center items-center">
                <img className="h-[50vh] w-[100vh] rounded-xl" src={imageLink} alt="" />
            </nav>
            <div className="h-[25vh] w-full flex justify-around items-center border-[0.3vh] border-stone-950  mt-[5vh]">
                <img onClick={(e) => setImageLink(e.target.getAttribute('src'))} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" src={game.mainPic[0]} alt="" />
                {game.pictures.map((pic) => (
                    <img onClick={(e) => setImageLink(e.target.getAttribute('src'))} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" src={pic} alt="" />
                ))}
            </div>
        </section>
    )
}

export default Pictures