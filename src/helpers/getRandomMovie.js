export const getRandomMovie = (movies, setRandomMovie) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setRandomMovie(movies[randomIndex]);
};