import axios from "axios"
import { useNavigate } from "react-router-dom"


const Game_delete = ({id}) => {
    // definging navigate using usenavigate to search
    const navigate = useNavigate()

    // function to send axios request to server to delete game
    const deleteGame = async () => {
        axios.delete(`http://localhost:5000/games/${id}`).then((el) => {navigate("/"); alert("game got deleted")}).catch(err => alert(err))
    }

    return(
        <button onClick={deleteGame} className="bg-red-600 rounded-md text-white border-black border-[0.4vh]">delete game</button>
    )
}

export default Game_delete