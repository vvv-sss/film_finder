export const getMovies = async (genre) => {
    const tmdbKey = '6be243a48f589d2b9d708c83304ac06a';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';

    const discoverMovieEndpoint = '/discover/movie';
    const requestParams = `?api_key=${tmdbKey}&with_genres=${genre}`;
    const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
    
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const movies = jsonResponse.results;
            return movies;
        } else {
            console.log("Something went wrong!");
            return "Ooops, something went wrong!";
        }
    } catch(error) {
        console.log(error);
        return "Ooops, something went wrong!";
    }
};