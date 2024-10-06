import { useNavigate } from "react-router-dom"
import Gameform from "../components/general/gameform"

const Filter_games = () => {
    // definging navigate using usenavigate to search
    const navigate = useNavigate()

    const createParams = (info) => {
        const sketch = ["name", "genre", "rating", "playCount"]
        var result = {}
        sketch.map((el, index) => {
            if(info[index] != undefined && info[index] != ""){
                result[el] = info[index]
            }
        })
        navigate('/', {state: result})
    }

    return(
        <>
        <section className="h-screen flex justify-center items-center text-[2vh]">
            <div className="bg-slate-600 p-[10vh]">
                <form onSubmit={(e) => (e.preventDefault(), createParams(Object.values(e.target).map(el => el.value)))} className="grid gap-4 grid-cols-1 text-white" action="">
                    <Gameform filter={true}/>
                    <button className="bg-white rounded-2xl text-black w-[22vh]" type="submit">submit</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Filter_games