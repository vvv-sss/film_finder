import { watchListCounterContext } from "../../App";
import { favoritesCounterContext } from "../../App";
import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
    const { watchListCounter, setWatchListCounter } = useContext(watchListCounterContext);
    const { favoritesCounter, setFavoritesCounter } = useContext(favoritesCounterContext);

    const navbarVariants = {
        hidden: {
            y: "-100vh"
        },
        visible: {
            y: 0, 
            transition: {
                duration: 0.5, 
                delay: 0.5, 
                type: "spring"
            }
        }
    }

    return ( 
        <>
            <motion.nav 
                variants={ navbarVariants }
                initial="hidden"
                animate="visible"
            >
                <ul>
                    <li>
                        <NavLink to="home">Home</NavLink>
                    </li>
                    <li onClick={ () => setWatchListCounter(0) }>
                        <NavLink to="watchlist">
                            Watchlist
                            { watchListCounter > 0 && 
                                <span className="watchlist-counter">{ watchListCounter }</span> 
                            }
                        </NavLink>
                    </li>
                    <li onClick={ () => setFavoritesCounter(0) }>
                        <NavLink to="favorites">
                            Favorites
                            { favoritesCounter > 0 && 
                                <span className="favorites-counter">{ favoritesCounter }</span> 
                            }
                        </NavLink>
                    </li>
                </ul>
            </motion.nav>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default NavBar;