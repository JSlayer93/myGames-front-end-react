// importing loading.wenm to display loading gif
import loading from "../resourses/web-loading.gif"


const Loading = ({games}) => {
    return(
        <>
            {!games && 
                <div className="absolute w-full h-full flex justify-center items-center">
                    <img className="w-[10vh] h-[10vh]" src={loading} alt="loading..." />
                </div>
            }
        </>
    )

}

export default Loading