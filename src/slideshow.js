import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Slider (props) {
const [movie, setMovie] = React.useState([]);
    React.useEffect(() => {
    axios
    .get("./ghibli-data.json")
    .then((response) => setMovie(response.data))
    .catch(err=>console.log(err))
    }, []);
    // UseEffect Bullshit
    const [slide, setSlide] = useState(0);

return (
     movie.map((movie, index) => (
         
        <div className="container" movie = {movie} index = {index}>
        { index === slide && 
            <div className="movieImage"><img src={movie.image} alt={movie.title}></img></div>
        }
        { index === slide && 
        <div className="movieText">
            <h1>{movie.title}</h1>
            <h2>{movie.original_title}</h2>
            <p>{movie.description}</p>
            <p className="release"><b>Released:</b> {movie.release_date}</p>
            <p className="runtime"> <b>Runtime: </b>{movie.running_time} minutes</p>
            { slide > 0 &&
            <button className="prev" onClick={() => setSlide(slide - 1)}>Previous</button>
            }
            { slide < 21 &&
            <button className="next" onClick={() => setSlide(slide + 1)}>Next</button>
            }
            
        </div>
        }
       
        </div>
    ) )
);
}