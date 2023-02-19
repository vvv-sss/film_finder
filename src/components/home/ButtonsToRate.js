import { watchListCounterContext } from "../../App";
import { useContext } from "react";
import LikeButtonIcon from "../../assets/icons/like-button-icon.png";
import DislikeButtonIcon from "../../assets/icons/dislike-button-icon.png";
import { sendMovieToStorage } from "../../helpers/sendMovieToStorage";
import { motion } from "framer-motion";

const ButtonsToRate = ( { setGetMovieAgain, randomMovie } ) => {
    const { setWatchListCounter } = useContext(watchListCounterContext);

    const animation = yValue => {
        return { 
            y: yValue, 
            transition: { type: "spring", duration: -1 }
        }
    }

    // Handle like and dislike buttons
    const handleDislikeBtnClick = () => {
        setGetMovieAgain(true);
    }

    const handleLikeBtnClick = () => {
        setGetMovieAgain(true);
        setWatchListCounter(prevCount => prevCount + 1);
        sendMovieToStorage(randomMovie.id, "watchlist");
    }

    return (
        <div className="rating-container">
            <motion.button 
                className="rate-btn"
                whileTap={ () => animation(10) } 
                onClick={ handleDislikeBtnClick }
            >
                <img src={ DislikeButtonIcon } alt="Icon with thumb down" />
            </motion.button>

            <motion.button 
                className="rate-btn"
                whileTap={ () => animation(-10) } 
                onClick={ handleLikeBtnClick }
            >
                <img src={ LikeButtonIcon } alt="Icon with thumb up" />
            </motion.button>
        </div>
    );
}

export default ButtonsToRate;