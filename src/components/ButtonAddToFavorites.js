import { favoritesCounterContext } from "../App";
import { useContext } from "react";
import AddToFavofitesIcon from "../assets/icons/add_to_favorites_icon.jpg";
import { sendMovieToStorage } from "../helpers/sendMovieToStorage";
import { motion } from "framer-motion";

const ButtonAddToFavorites = ( { storageList } ) => {
    const { setFavoritesCounter } = useContext(favoritesCounterContext);

    const handleAddToFavoritesClick = (e) => {
        const movieToBeAdded = e.target.parentElement.parentElement.getAttribute("data-key");
        setFavoritesCounter(prevCount => prevCount + 1);
        sendMovieToStorage(+movieToBeAdded, storageList);
    }

    return (
        <motion.button 
            whileTap={ { x: -10, transition: { duration: 0.1 } } } 
            onClick={ (e) => handleAddToFavoritesClick(e) }
            className="btn-for-movielist"
        >
            <img 
                src={ AddToFavofitesIcon } 
                alt="Add to favorites icon"
                className="btn-for-movielist-icon" 
            />
        </motion.button>
    );
}

export default ButtonAddToFavorites;