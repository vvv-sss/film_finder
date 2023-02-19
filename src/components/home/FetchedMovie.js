import { useEffect, useContext, useState } from "react";
import { genreContext } from "./Home";
import BtnIcon from "../../assets/icons/btn_icon.png";
import CalendarIcon from "../../assets/icons/calendar_icon.png";
import StarIcon from "../../assets/icons/star_icon.png";
import ErrorMsg from '../ErrorMsg';
import ButtonsToRate from "./ButtonsToRate";
import { getMovies } from "../../helpers/getMovies";
import { getRandomMovie } from "../../helpers/getRandomMovie";
import { motion } from "framer-motion";

const FetchedMovie = ( { startFetchingMovie, setStartFetchingMovie, animation } ) => {
    const { chosenGenreValue } = useContext(genreContext);

    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null);
    const [getMovieAgain, setGetMovieAgain] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    // Fetching the list of movies of chosen genre
    useEffect(() => {
        getMovies(chosenGenreValue)
            .then(resolved => Array.isArray(resolved) ? setMovies(resolved) : setErrorMsg(resolved))
            .catch(rejected => setErrorMsg(rejected));
    },[startFetchingMovie]);

    // Choosing random movie from the fetched above list
    useEffect(() => {
        (movies.length > 0) && getRandomMovie(movies, setRandomMovie)
    },[movies]);

    // Fetching movie again after clicking like and dislike buttons
    if (getMovieAgain) {
        setTimeout(() => {
            getMovies(chosenGenreValue)
                .then(resolved => Array.isArray(resolved) ? setMovies(resolved) : setErrorMsg(resolved))
                .catch(rejected => setErrorMsg(rejected));
            (movies.length > 0) && getRandomMovie(movies, setRandomMovie);
            setGetMovieAgain(false);
        }, 500);
    }

    return errorMsg ? (
        <ErrorMsg errorMsg={ errorMsg } />
    )
    : randomMovie && (
        <motion.div
            initial={ { scale: 0.5, opacity: 0 } }  
            animate={ animation } 
            className="home__movie-container"
        > 
            <button 
                className="change-genre-btn"
                onClick={ () => setStartFetchingMovie(false) }
            >
                <img src={ BtnIcon } alt="Button icon" />
                Choose another genre
            </button>
            <div className="movie-poster-container">
                { !getMovieAgain && (
                    <motion.img 
                        src={ `https://image.tmdb.org/t/p/original/${randomMovie["poster_path"]}` } 
                        alt="Poster of the movie" 
                        initial={ { opacity: 0, y: -300 } }
                        animate={ { opacity: 1, y: 0, transition: { duration: 0.5 } } }
                    />
                    )
                }
            </div>

            <ButtonsToRate setGetMovieAgain={ setGetMovieAgain } randomMovie={ randomMovie } />
            
            <div style={ { minHeight: "20rem" } }>
                { !getMovieAgain && (
                    <motion.div 
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1, transition: { duration: 0.75 } } }
                    >
                        <h3>{ randomMovie["title"] }</h3>
                        <p>
                            <img src={ CalendarIcon } alt="Icon of the calendar" id="calendar-icon" />
                            Release date: { randomMovie["release_date"] }
                        </p>
                        <p>
                            <img src={ StarIcon } alt="Icon with a star" id="star-icon" />
                            Vote average: { randomMovie["vote_average"] }
                        </p>
                        <p>{ randomMovie["overview"] }</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}

export default FetchedMovie;