import ButtonViewMovieInfo from "./ButtonViewMovieInfo";
import ButtonAddToFavorites from "./ButtonAddToFavorites";
import ButtonRemove from "./ButtonRemove";
import MovieInfo from "./MovieInfo";
import { motion } from "framer-motion";

const MovieList = ( { list, storageListToRemove } ) => {

    const movieListVariants = {
        hidden: {
            y: "50vh", 
            opacity: 0
        },
        visible(index) {
            const delayValue = (index + 1) / 4;
            return {
                y: 0,
                scale: [0.5, 1],
                opacity: 1,
                transition: {
                    duration: 0.3,
                    delay: delayValue
                }
            }
        }
    }
    
    return (
        <ul className="movielist">
            { list.map((movieObj, index) => {
                if (movieObj) {
                    return ( 
                        <motion.li 
                            className="movie" 
                            key={ movieObj["id"] } 
                            data-key={ movieObj["id"] }
                            variants={ movieListVariants }
                            initial="hidden"
                            animate={ movieListVariants.visible(index) }
                        >
                            <img 
                                src={ `https://image.tmdb.org/t/p/original/${movieObj["poster_path"]}` } 
                                alt="Poster of the movie" 
                                className="movie-poster" 
                            />
                            <div className="movielist-btns">
                                <ButtonViewMovieInfo />
                                { storageListToRemove === "watchlist" && 
                                    <ButtonAddToFavorites storageList="favorites" /> 
                                }
                                <ButtonRemove 
                                    storageList={ storageListToRemove }
                                />
                            </div>
                            <div className="movielist-description">
                                <h3>{ movieObj["title"] }</h3>
                                <p>{ movieObj["tagline"] }</p>
                            </div>
                            <MovieInfo movieObj={ movieObj } />
                        </motion.li>
                    )}
                })
            }
        </ul>
    );
}

export default MovieList;