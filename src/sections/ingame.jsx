import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Pictures from "../components/gamePage/pictures"
import Game_details from "../components/gamePage/gamedetails"
import Loading from "../components/general/loading"
import Game_delete from "../components/gamePage/gamedelete"
import Game_update from "../components/gamePage/gameupdate"


const Ingame = () => {
    // declaring game id
    const { id } = useParams()
    // definging navigate using usenavigate to search
    const navigate = useNavigate()
    // defining game
    const [game, setGame] = useState()

    // function to get game information
    const getGame = async () => {
        const result = await axios(`https://my-games-back-end-11ab8bf14510.herokuapp.com/games/${id}`).then(result => result.data.data.data).catch(err => navigate('/'))
        setGame(result)
    }

    useEffect(() => {
        getGame()
    }, [])

    return(
        <section>
            {game ?
                <div className="pt-[5vh]">
                    <nav className="flex justify-center items-center">
                        <h1 className="text-[10vh] text-white">{game.name}</h1>
                    </nav>
                    {/* <nav className="h-[50vh] w-full flex justify-center items-center">
                        <img className="h-[50vh] w-[100vh] rounded-xl" src={imageLink} alt="" />
                    </nav> */}
                    <Pictures game={game} key={Math.random()}/>
                    <div className="text-white text-[2vh] grid grid-cols-4 gap-10 place-items-center mt-[5vh] pb-[5vh]">
                        {Object.keys(game).map((name, index) => (name != "mainPic" && name != "pictures" && name != 'videos' && name != "__v" && name != "_id" && name != "createdAt" &&
                            <Game_details title={name} info={Object.values(game)[index]} key={index}/>
                        ))}
                    </div>
                    <div className="flex">
                        <button onClick={() => navigate(`/game/update/${id}`)} className="bg-slate-100 rounded-md border-black border-[0.4vh]">update game</button>
                        <Game_delete id={id} key={id}/>
                    </div>
                </div>:
                <div className="h-[100vh]">
                    <Loading games={game}/>
                </div>
            }
        </section>
    )
}

export default Ingame