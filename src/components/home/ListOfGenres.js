import React, { useEffect, useState, useContext } from "react";
import { genreContext } from "./Home";
import ErrorMsg from '../ErrorMsg';
import { getGenres } from "../../helpers/getGenres";

const ListOfGenres = () => {
    const [genres, setGenres] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const { setChosenGenreValue } = useContext(genreContext);
    
    // Fetching the list of available genres
    useEffect(() => { 
        getGenres()
            .then(resolved => Array.isArray(resolved) ? setGenres(resolved) : setErrorMsg(resolved))
            .catch(rejected => setErrorMsg(rejected));
    },[]);

    const handleClick = (e) => {
        const listOfAllLabels = document.querySelectorAll(".genre-input");
        const activeLabel = e.target.nextSibling;

        listOfAllLabels.forEach(label => {
            label.style.backgroundColor = "transparent";
        });

        activeLabel.style.backgroundColor = "hsl(29, 68%, 55%)";
        setChosenGenreValue(e.target.value);
    }

    return  errorMsg ? (
        <ErrorMsg errorMsg={ errorMsg } />
    )
    : (genres.length > 0) && ( 
        <div className="genres-container">
            { genres.map(genreObj => {
                return (
                        <React.Fragment key={ `genre-input-${ genreObj["id"] }` }>
                            <input 
                                type="radio"
                                id={ genreObj["id"] }
                                onClick={ (e) => handleClick(e) } 
                                name="genre" 
                                value={ genreObj["id"] }
                            />
                            <label htmlFor={ genreObj["id"] } >
                                { genreObj["name"] }
                            </label>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default ListOfGenres;