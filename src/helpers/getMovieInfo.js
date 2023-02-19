export const getMovieInfo = async (movieID) => {
    const tmdbKey = '6be243a48f589d2b9d708c83304ac06a';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    
    const movieEndpoint = `/movie/${movieID}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const movieInfo = await response.json();
            return movieInfo;
        } else {
            console.log("Something went wrong!");
            return "Ooops, something went wrong!";
        }
    } catch(error) {
        console.log(error);
        return "Ooops, something went wrong!";
    }
};