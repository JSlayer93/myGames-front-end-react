
const Gameform = ({value}) => {

    return(
        // <label className="w-[25vh]">
        //     {name}:{"   "}
        //     <input className="h-[4vh] rounded-2xl [5vh] pl-[1vh] bg-slate-500" type="text" placeholder="name" defaultValue={value}/>
        // </label>
        <>
            <label className="w-[25vh]">
                {"name: "}
                <input required className="h-[4vh] rounded-2xl [5vh] pl-[1vh] bg-slate-500" type="text" placeholder="name" defaultValue={value && value["name"]}/>
            </label>
            <label className="w-[25vh]">
                {"genre: "}
                <select required className="text-black" size='4' defaultValue={value && value["genre"]}>
                    <option>shooter</option>
                    <option>adventure</option>
                    <option>platformer</option>
                    <option>horror</option>
                </select>
            </label>
            <label className="w-[25vh]">
                {"rating: "}
                <input required className="h-[4vh] rounded-2xl [5vh] pl-[1vh] bg-slate-500" type="number" max={10} min={0} placeholder="rating" defaultValue={value && value["rating"]}/>
            </label>
            <label className="w-[25vh]">
                {"playcount: "}
                <input required className="h-[4vh] rounded-2xl [5vh] pl-[1vh] bg-slate-500" type="number" placeholder="playcount" defaultValue={value &&value["playCount"]}/>
            </label>
            {!value && 
                <>
                <label className="w-[25vh]">
                    {"main picture: "}
                    <input type="file" accept="image/png, image/jpeg" />
                </label>
                <label className="w-[25vh]">
                    {"other picture: "}
                    <input onChange={e => e.target.files.length > 5 && (alert("upload less"), e.target.value = "")} type="file" multiple accept="image/png, image/jpeg"  />
                </label>
                </>
            }
        </>
    )
}

export default Gameform