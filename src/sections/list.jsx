import { useEffect, useState } from "react"
import Card from "../components/homePage/card"
import axios from "axios"
import Loading from "../components/general/loading"
import { Link, useLocation, useParams } from "react-router-dom"

const List = (props) => {

    // declaring in wich page i am with link
    const { id } = useParams()
    // variable to save all the games in
    const [games, setGames] = useState()
    // variable to set and see where is starting and ending list elements indexes which i have ro get for this particilar page
    const [start, setStart] = useState(!Number(id) ? 0 : Number(id)*8-8)
    const [end, setEnd] = useState(!Number(id) ? 8 : Number(id)*8)
    // defining location to get elements from filter_game
    const location = useLocation()

    // function to get all the games from api using axios method
    const getGames = async(info) => {
        var result = await axios.get("https://my-games-back-end-11ab8bf14510.herokuapp.com/games/", {
            params: {
                info
            }
        }).then(
            result => id && !Number(id) ? result.data.data.data.filter(el => el.name.toLowerCase().includes(id.toLowerCase())
        ) : result.data.data.data).catch(err => getGames())
        // id ? result.map(el => el.name == id) : result
        setGames(result)
        console.log(result)
    }
    
    // calling function getGames uning useEffect 
    useEffect(() => {
        const info = location.state
        getGames(info);
        setStart(!Number(id) ? 0 : Number(id)*8-8)
        setEnd(!Number(id) ? 8 : Number(id)*8)
    }, [id, location.state])

    return(
        <section className="h-[100vh] grid place-content-center">
            {/* loading gif */}
            <Loading games={games}/>
            {/* waiting api to get games and then showing front end to client */}
            {games && 
            <>
                <div className=" grid grid-cols-4 grid-rows-2 gap-x-[15vh] gap-y-[5vh] pt-[7vh]">
                    {
                        // showing all the cards of the games
                        games && games.slice(start, end).map((el, index) => (
                            <Card image={el.pictures ? (el.pictures[1] ? el.pictures[1] : el.pictures[0]) : 'test'} name={el.name} desc={el.genre} id={el._id} key={index}/>
                        ))
                    }
                </div>
                {/* showing next and back buttons to navigate home page */}
                <nav className="text-white flex justify-center text-[2vh] mt-[2vh]">
                    <Link to={`/${end/8 - 1}`} onClick={() => {
                        setStart(start - 8);
                        setEnd(end - 8)
                    }} className="m-[1vh] z-50">{games && start > 0 && "back"}</Link>
                    <p className="p-[1vh]">{end/8}/{games && Math.ceil(games.length/8)}</p>
                    <Link to={`/${end/8 + 1}`} onClick={() => {
                        setStart(start + 8);
                        setEnd(end + 8)
                    }} className="m-[1vh] z-50">{games && games.length > 8 && end < games.length && "next"}</Link>
                </nav>
            </>
            }

        </section>
    )
}

export default List