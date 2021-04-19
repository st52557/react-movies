import {useState} from "react";

function MovieForm(){

    const [movieName, setMovieName] = useState("")
    const [movieYear, setMovieYear] = useState(0)


    const onSubmitHandler = event => {
        event.preventDefault()

        const newMovie = {
            movieTitle: movieName,
            movieYear: movieYear
        }

        fetch("https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/st52557/json_db/movies", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'

                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(newMovie) // body data type must match "Content-Type" header
        });

    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type={"text"} value={movieName} onChange={(e) => setMovieName(e.target.value)}/>
            <input type={"number"} value={movieYear} onChange={(e) => setMovieYear(e.target.value)}/>
            <input type={"submit"} />
        </form>
    )
}

export default MovieForm;