import DeleteIcon from "../assets/icons/delete_icon.png";
import { getMoviesFromStorage } from "../helpers/getMoviesFromStorage";
import { motion } from "framer-motion";

const ButtonRemove = ( {storageList} ) => {

    const handleRemoveClick = (e) => {
        const movieElementToBeRemoved = e.target.parentElement.parentElement;
        const movieToBeRemovedID = movieElementToBeRemoved.getAttribute("data-key");
        const listOfMoviesFromStorage = getMoviesFromStorage(storageList);
        const listOfMoviesFiltered = listOfMoviesFromStorage.filter(movie => movie != movieToBeRemovedID);
        localStorage.setItem(storageList, JSON.stringify([...listOfMoviesFiltered]));

        movieElementToBeRemoved.style.animation = "exit 0.5s"

        setTimeout(() => {
            movieElementToBeRemoved.remove();
        }, 500);
    }

    return (
        <motion.button 
            whileTap={ { x: -10, transition: { duration: 0.1 } } } 
            onClick={ (e) => handleRemoveClick(e) }
            className="btn-for-movielist"
        >
            <img 
                src={ DeleteIcon } 
                alt="Icon with trash bin"
                className="btn-for-movielist-icon" 
            />
        </motion.button>
    );
}

export default ButtonRemove;