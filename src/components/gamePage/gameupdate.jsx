import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Gameform from "../general/gameform"
import Loading from "../general/loading"


const Game_update = () => {
    // declaring game id
    const { id } = useParams()
    // definging navigate using usenavigate to search
    const navigate = useNavigate()
    // declaring game
    const [game, setGame] = useState()

    // get game information
    const getGame = async () => {
        const result = await axios(`https://my-games-back-end-11ab8bf14510.herokuapp.com/games/${id}`).then(result => result.data.data.data).catch(err => navigate('/'))
        setGame(result)
    }
    // function to create params for update request
    const createParams = (...values) => {
        var count = 0
        var params = {}
        {Object.keys(game).map((name, index) => {name != "mainPic" && name != "pictures" && name != "__v" && name != "_id" && name != "createdAt" ?
            params[name] = values[0][index - count]
            :
            count = count + 1
        })}
        return params
        
    }
    // funtion to update game
    const update = async (info) => {
        await axios.put(`https://my-games-back-end-11ab8bf14510.herokuapp.com/games/${id}`,  { info }).then(res => navigate(`/game/${id}`)).catch(err => navigate('/'))
    }

    useEffect(() => {
        getGame()
    }, [])

    return(
        <section className="h-screen flex justify-center items-center text-[2vh]">
            {/* loading gif */}
            <Loading games={game}/>
            {game &&
                <div className="bg-slate-600 p-[10vh]">
                    <form onSubmit={(e) => (e.preventDefault(), update((createParams(Object.values(e.target).map(el => el.value)))))} className="grid gap-4 grid-cols-1 text-white" action="">
                        {/* {Object.keys(game).map((name, index) => (name != "mainPic" && name != "pictures" && name != "__v" && name != "_id" && name != "createdAt" &&
                            <Gameform name={name} value={Object.values(game)[index]} key={index}/>
                        ))} */}
                        <Gameform value={game}/>
                        <button className="bg-white rounded-2xl text-black w-[22vh]" type="submit">submit</button>
                    </form>
                </div>
            }
        </section>
    )
}

export default Game_update