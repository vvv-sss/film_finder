import { useState, createContext } from 'react';
import Form from './Form';
import FetchedMovie from './FetchedMovie';
import GengesBg from '../../assets/images/genres_bg.png';
import { motion } from "framer-motion";

export const genreContext = createContext(null);

const Home = () => {
    const [chosenGenreValue, setChosenGenreValue ] = useState("");
    const [startFetchingMovie, setStartFetchingMovie] = useState(false);

    const animation = {
        scale: 1,
        opacity: 1,
        transition: { 
            duration: 0.7, 
            delay: 0.2, 
            type: "spring" 
        }
    }

    return ( 
        <section className="home">
            <genreContext.Provider value={ { chosenGenreValue, setChosenGenreValue } }>
                { !startFetchingMovie &&
                    <motion.div 
                        initial={ { scale: 0.5, opacity: 0 } } 
                        animate={ animation }  
                        className="home__form-container"
                    >
                        <h1>Film Finder</h1>
                        <p>Choose a genre and rate the film</p>
                        <Form setStartFetchingMovie={ setStartFetchingMovie } />
                        <img src={ GengesBg } alt="Lightning bolt background" id="lightning-bolt" />
                    </motion.div>
                }
                { startFetchingMovie &&
                    <FetchedMovie 
                        startFetchingMovie={ startFetchingMovie }
                        setStartFetchingMovie={ setStartFetchingMovie }
                        animation={ animation }
                    />
                }
            </genreContext.Provider>
        </section> 
    );
}

export default Home;