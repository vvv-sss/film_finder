import React from 'react';
import { useState, useEffect } from "react";
import MovieList from '../MovieList';
import { getMoviesFromStorage } from "../../helpers/getMoviesFromStorage";
import { getMovieInfo } from "../../helpers/getMovieInfo";
import { motion } from "framer-motion";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    console.log("🚀 ~ file: Favorites.js:10 ~ Favorites ~ favorites", favorites)

    useEffect(() => {
        let list = getMoviesFromStorage("favorites");
        const listOfMoviesPromises = list.map(movieID => getMovieInfo(movieID));
        Promise.all(listOfMoviesPromises).then(resolved => setFavorites(resolved));
    },[]);

    return (
        <section className="favorites">
            { (favorites.length === 0) ? 
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
                    list={ favorites }
                    setList={ setFavorites }
                    storageListToRemove="favorites"
                    />
            }
        </section>
    )
}

export default Favorites;