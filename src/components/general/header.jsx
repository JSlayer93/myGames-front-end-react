import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    // definging navigate using usenavigate to search
    const navigate = useNavigate()

    return(
        <section className="bg-zinc-500 h-[7vh] w-screen fixed z-50 opacity-80 flex flex-row items-center">
            <nav className="flex-initial w-7/12 max-md:w-3/12">
                <img onClick={() => navigate('/')} className="h-[5vh] pl-[1vh] w-[9vh] cursor-pointer" src="https://w7.pngwing.com/pngs/594/540/png-transparent-super-nintendo-entertainment-system-video-game-game-controllers-computer-icons-video-games-miscellaneous-game-logo.png" alt="logo" />
            </nav>
            <nav className="w-7/12 max-md:w-11/12 flex justify-around text-white text-[2vh]">
                {/* going to home page and passing value of searchbar to it */}
                <form onSubmit={(e) => {navigate(e.target[0].value ? `/search/${e.target[0].value}` : "/"); e.preventDefault(); e.target[0].value = ""}}>
                    <input className="w-[40vh] max-md:w-[10vh] rounded-xl pl-[1vh] text-black" type="text" placeholder="search" />
                </form>
                <Link to="/add">add</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/filter">Filter</Link>
            </nav>
        </section>
    )
}

export default Header