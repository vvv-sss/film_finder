import { useEffect, useState } from "react";
import MovieList from "../MovieList";
import { getMoviesFromStorage } from "../../helpers/getMoviesFromStorage";
import { getMovieInfo } from "../../helpers/getMovieInfo";
import { motion } from "framer-motion";

const WatchList = () => {
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        let list = getMoviesFromStorage("watchlist");

        const listOfMoviesPromises = list.map(movieID => getMovieInfo(movieID));
        Promise.all(listOfMoviesPromises).then(resolved => setWatchList(resolved));
    },[]);

    return (
        <section className="watchlist">
            { (watchList.length === 0) ? 
                <motion.p 
                    style={{ 
                        marginTop: "2rem",
                        textAlign: "center" 
                    }}
                    initial={{ 
                        x: "-100vw", 
                        opacity: 0 
                    }}
                    animate={{ 
                        x: 0, opacity: 1, 
                        transition: { 
                            duration: 0.5, 
                            type: "spring" 
                        } 
                    }}
                >
                    There are no added movies yet...
                </motion.p>
                : <MovieList 
                    list={ watchList }
                    setList={ setWatchList }
                    storageListToRemove="watchlist"
                />
            }
        </section>
    );
}

export default WatchList;