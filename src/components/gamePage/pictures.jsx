import { useState } from "react"

const Pictures = ({game}) => {
    const [link, setLink] = useState(game.mainPic[0]) 
    const [imageOrVideo, setImageOrVideo] = useState('image')
    return(
        <section className="mt-[5vh]">
            <nav className="h-[50vh] w-full flex justify-center items-center">
                {console.log(link)}
                {imageOrVideo == 'image' ? <img className="h-[50vh] w-[100vh] rounded-xl" src={link} alt="" /> :
                <video key={link} className="h-[50vh] w-[100vh] rounded-xl" autoPlay controls>
                    <source src={link} type="video/mp4"></source>
                </video>}
            </nav>
            <div className="h-[25vh] w-full flex justify-around items-center border-[0.3vh] border-stone-950  mt-[5vh]">
                <img onClick={(e) => setLink(e.target.getAttribute('src'), setImageOrVideo('image'))} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" src={game.mainPic[0]} alt="" />
                {game.pictures.map((pic) => (
                    <img onClick={(e) => (setLink(e.target.getAttribute('src')), setImageOrVideo('image'))} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" src={pic} alt="" />
                ))}

                {game.videos && game.videos.map((video) => (
                    <video onClick={(e) => (setLink(video), setImageOrVideo('video'))} src={video} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" loop autoPlay muted>
                        <source src={video} type="video/mp4"></source>
                    </video>
                ))}
            </div>
        </section>
    )
}

export default Pictures