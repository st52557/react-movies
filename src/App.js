
import './App.css';
import Movie from "./Movie";
import {useState, useEffect} from "react";
import MovieForm from "./movie-forms";

function App() {

    const [seen, setSeen] = useState([])
    const [data, setData] = useState([])
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{

        setTimeout(() => {
            fetch("https://cors-anywhere.herokuapp.com/https://my-json-server.typicode.com/st52557/json_db/movies")
                .then(response => {
                    if(response.ok){
                       console.log("response OK");
                       return response.json();
                    }
                    throw new Error(`Cant load db data:${response.statusText}`);
                })
                .then(responseData => {console.log(responseData); return responseData;})
                .then(json => setData(json))
                .catch((err) => setError(err.message))
                .finally(() => setisPending(false))
            console.log("Spusteno")
        }, 100)
    },[])

    const handler = function(movie){
        const newSeen = [...seen];
        console.log(movie)
        newSeen.push(movie);
        console.log(seen.length);
        setSeen(newSeen);
    }

  return (

    <div className="App">
        {!isPending && seen.length}
        {isPending && "Loading data..."}
        {error && <div>{error}</div>}

        <div style={{
            display: "flex",
            margin: "10px",
            flexWrap: "wrap"
        }}>
            {!isPending && data.map(item => <Movie key={item.id} movie={item} onClickHandler={handler}/>)}
        </div>

        <MovieForm/>

    </div>
  );
}

export default App;
