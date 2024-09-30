import axios from "axios"
import Gameform from "../components/general/gameform"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Loading from "../components/general/loading"

const Add_game = () => {
    // definging navigate using usenavigate to search
    const navigate = useNavigate()
    const [loading, setLoading] = useState()

    const createParams = (info) => {
        const sketch = ["name", "genre", "rating", "playCount"]
        var result = {}
        sketch.map((el, index) => {
            result[el] = info[index]
        })
        return(result)
    }

    const handleUpload = (e) => {
        // filetring e to remove all null elements
        e = e.filter(el => el)
        const formData = new FormData()

        formData.append("mainPic",e[0][0])

        for (let i = 0; i < e[1].length; i++) {
            formData.append("pictures",e[1][i])           
        }
        return formData
    }

    const add_game = async(params, pics) => {
        let formData = new FormData()
        formData = pics
        formData.append("text", JSON.stringify(params))
        axios({ 
            // Endpoint to send files 
            url: "https://my-games-back-end-11ab8bf14510.herokuapp.com/games", 
            method: "POST", 
            // Attaching the form data 
            data: formData
        }).then(res => (alert("game created succesfully"), navigate('/'), setLoading(false))).catch(err => (console.log(err), setLoading(false)))
        setLoading(true)
    }

    return(
        <>
        {!loading ?
            <section className="h-screen flex justify-center items-center text-[2vh]">
                <div className="bg-slate-600 p-[10vh]">
                    <form onSubmit={async (e) => (e.preventDefault(),
                    add_game(
                        createParams(
                            Object.values(e.target).map((el, index) => (
                                index != 4 && index != 5 && el.value
                            )
                        )),handleUpload(
                            Object.values(e.target).map((el, index) => (
                                index == 4 || index == 5 ? el.files : null
                            )
                        ))

                    )
                        )} className="grid gap-4 grid-cols-1 text-white">
                        <Gameform />
                        <button className="bg-white rounded-2xl text-black w-[22vh]" type="submit">submit</button>
                    </form>
                </div>
            </section>
            :
            <div className="h-[100vh]">
                <Loading/>
            </div>
        }
        </>
    )
}

export default Add_game