import { useState, useContext } from "react";
import { genreContext } from './Home';
import ListOfGenres from './ListOfGenres';
import { motion } from "framer-motion";

const Form = ( { setStartFetchingMovie } ) => {
    const { chosenGenreValue } = useContext(genreContext);
    const [helpMsg, setHelpMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (chosenGenreValue) {
            setHelpMsg(false);
            setStartFetchingMovie(true);
        } else {
            setHelpMsg(true);
            setStartFetchingMovie(false);
        }
    }

    return (
        <form onSubmit={ (e) => handleSubmit(e) }>
            <ListOfGenres />
            <motion.button
                className="submit-btn"
                whileHover={{
                    scale: [1.1, 1], 
                    transition: {duration: 1, repeat: Infinity}
                }}
            >
                Get started !
            </motion.button>
            <span 
                className="help-msg" 
                style={ helpMsg ? { opacity: "1" } : { opacity: "0" } }
            >
                Please, choose a genre!
            </span>
        </form>
    );
}

export default Form;