import CalendarIcon from "../assets/icons/calendar_icon.png";
import RuntimeIcon from "../assets/icons/runtime_icon.png";
import StarIcon from "../assets/icons/star_icon.png";
import DollarIcon from "../assets/icons/dollar_icon.png";
import GenreIcon from "../assets/icons/genre_icon.png";
import WorldIcon from "../assets/icons/world_icon.png";
import LinkIcon from "../assets/icons/link_icon.png";
import { motion } from "framer-motion";

const MovieInfo = ( { movieObj } ) => {
    return (
        <motion.div 
            className="movie-info"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
        >
            <span>
                <img src={ CalendarIcon } alt="Icon of the calendar" />
                Release date: { movieObj["release_date"] }
            </span>
            <span>
                <img src={ RuntimeIcon } alt="Icon of the watch" />
                Runtime: { movieObj["runtime"] } minutes
            </span>
            <span>
                <img src={ StarIcon } alt="Icon with a star" />
                Average vote: { movieObj["vote_average"] }
            </span>
            { movieObj["budget"] != 0 && 
                <span>
                    <img src={ DollarIcon } alt="Icon with a dollar sign" />
                    Budget: { movieObj["budget"] }
                </span>}
            { movieObj["genres"].length > 0 &&
            <div className="genres">
                <img src={ GenreIcon } alt="Icon with the action board" />
                <ul>
                    Genres: 
                    { movieObj["genres"].map(obj => {
                            return (
                                <li key={ obj["id"] }>{ obj["name"] }</li>
                            );
                        })
                    }
                </ul>
            </div>
            }
            { movieObj["production_countries"].length > 0 &&
                <div className="countries">
                    <img src={ WorldIcon } alt="Icon with the world sign" />
                    <ul>
                        Production countries: 
                        { movieObj["production_countries"].map(obj => {
                                return (
                                    <li key={ obj["iso_3166_1"] }>{ obj["name"] }</li>
                                );
                            })
                        }
                    </ul>
                </div>
            }
            <span>
                <img src={ LinkIcon } alt="Icon with the link sign" />
                <a href={ movieObj["homepage"].toString() } target="_blank">Homepage</a>
            </span>
            <p>{ movieObj["overview"] }</p>
        </motion.div>
    );
}

export default MovieInfo;