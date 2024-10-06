import { Link } from "react-router-dom"

const Card = ({image, name, desc, id}) => {
    
    return(
        <div className="w-[33vh] h-[40vh] overflow-hidden cursor-pointer"> 
            <Link to={`/game/${id}`}>{
                <>
                    <ul className="h-[30vh] w-100">
                        <img className="relative duration-300 hover:scale-110 hover:brightness-100 h-[40vh] w-[40vh] brightness-75" src={image} alt={name} />
                    </ul>
                    <nav className="bg-zinc-600 h-[10vh] opacity-80 text-white">
                        <p className="text-[4vh] font-mono">{name.length > 10 ? name.slice(0, 10) + '...' : name}</p>
                        <p className="text-[2vh] font-mono">{desc.length > 22 ? desc.slice(0, 22) + '...' : desc}</p>
                    </nav>
                </>
            }</Link>
        </div>
    )
}

export default Card