import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function Slider (props) {
    let [slide, setSlide] = useState(0);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
    axios
    .get("./ghibli-data.json")
    .then((response) => setMovie(response.data))
    .catch(err=>console.log(err))
    
    }, []);
    // UseEffect Bullshit

return (
        <div className="container"  >
        
            <div className="movieImage"><img src={movie[slide].image} alt={movie[slide].title}></img></div>
        
       
        <div className="movieText">
            <h1>{movie[slide].title}</h1>
            <h2>{movie[slide].original_title}</h2>
            <p className="movieDescription">{movie[slide].description}</p>
            <p className="release"><b>Released:</b> {movie[slide].release_date}</p>
            <p className="runtime"> <b>Runtime: </b>{movie[slide].running_time} minutes</p>
            { slide > 0 &&
            <button className="first" onClick={() => setSlide(slide = 0)}>First</button>
            }
            { slide > 0 &&
            <button className="prev" onClick={() => setSlide(slide - 1)}>Previous</button>
            }
            { slide < 21 &&
            <button className="next" onClick={() => setSlide(slide + 1)}>Next</button>
            }
            { slide < 21 &&
            <button className="last" onClick={() => setSlide(slide = 21)}>Last</button>
            }
        </div>
        
       
        </div>

)
}