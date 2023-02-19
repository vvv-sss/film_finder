import { useState } from "react";
import ExpandIcon from "../assets/icons/expand_icon.png";
import MinimizeIcon from "../assets/icons/minimize_icon.png";
import { motion } from "framer-motion";

const ButtonViewMovieInfo = () => {
    const [movieInfoExpanded, setMovieInfoExpanded] = useState(false);

    const handleViewInfoClick = (e) => {
        const movieInfo = e.target.parentElement.parentElement.querySelector(".movie-info");
        if (!movieInfoExpanded) {
            movieInfo.style.animation = "movie-info-enter 0.5s ease both";
            setMovieInfoExpanded(true);
        } else {
            movieInfo.style.animation = "movie-info-exit 0.3s ease both";
            setMovieInfoExpanded(false);
        }
    }

    return (
        <motion.button 
            whileTap={ { x: -10, transition: { duration: 0.1 } } } 
            onClick={ (e) => handleViewInfoClick(e) }
            className="btn-for-movielist"
        >
            <img 
                src={ movieInfoExpanded ? MinimizeIcon : ExpandIcon } 
                alt="Expand icon"
                className="btn-for-movielist-icon" 
            />
        </motion.button>
    );
}

export default ButtonViewMovieInfo;