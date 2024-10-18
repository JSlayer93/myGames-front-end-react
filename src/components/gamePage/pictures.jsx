import { useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pictures = ({game}) => {
    const [link, setLink] = useState(game.mainPic[0]) 
    const [imageOrVideo, setImageOrVideo] = useState('image')

    const sliderSettings = {
        slidesToShow: window.innerWidth <= 768 ? 3 : 5, // Number of slides visible at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        arrows: true, // Display navigation arrows
        autoplay: true, // Automatically slide to the next image
        autoplaySpeed: 3000, // Autoplay interval in milliseconds
    };

    return(
        <section className="mt-[5vh]">
            <nav className="h-[50vh] w-full flex justify-center items-center">
                {console.log(link)}
                {imageOrVideo == 'image' ? <img className="h-[50vh] max-md:h-[45vh] w-[100vh] max-md:w-[45vh] rounded-xl" src={link} alt="" /> :
                <video key={link} className="h-[50vh] w-[100vh] rounded-xl" autoPlay controls>
                    <source src={link} type="video/mp4"></source>
                </video>}
            </nav>
            <div className="h-[25vh] w-full flex justify-around items-center border-[0.3vh] border-stone-950  mt-[5vh]">
                <Slider {...sliderSettings} className="w-[170vh] max-md:w-[40vh]">
                    <img onClick={(e) => setLink(e.target.getAttribute('src'), setImageOrVideo('image'))} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" src={game.mainPic[0]} alt="" />
                    {game.pictures.map((pic) => (
                        <img onClick={(e) => (setLink(e.target.getAttribute('src')), setImageOrVideo('image'))} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" src={pic} alt="" />
                    ))}
                    {game.videos && game.videos.map((video) => (
                        <video onClick={(e) => (setLink(video), setImageOrVideo('video'))} src={video} className="h-[20vh] w-[30vh] rounded-xl cursor-pointer" loop autoPlay muted>
                            <source src={video} type="video/mp4"></source>
                        </video>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Pictures