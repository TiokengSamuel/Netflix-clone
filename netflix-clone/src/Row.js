import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return(
        <div className="row">
           <h2>{title}</h2> 

            <div className="row__posters">
                {/*several row__posters */}
                {movies.map(movie => (
                <img className="row__poster"
                key={movie.id}
                 src={`${base_url}${isLargeRow ? movie.poster_path:}`} alt={movie.name}/> 
                ))
                }
            
            </div>

            {/* container -> poster */}
        </div>
    )
}

export default Row;