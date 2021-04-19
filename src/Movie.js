import {useState} from "react";


function Movie({movie, onClickHandler}) {

    const [isSeen, setIsSeen] = useState(false)


    return (<div style={{
        width: "150px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        margin: "5px"
    }}>
                <h2>{movie.movieTitle}</h2>
                <div>{movie.movieYear}</div>
                <div>{isSeen && "Seen"}</div>
                <button onClick={()=> {
                    setIsSeen(true);
                    onClickHandler(movie.movieTitle);
                    }
                }>Already seen</button>
            </div>)

}

export default Movie;