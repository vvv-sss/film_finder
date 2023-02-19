export const getGenres = async () => {
    
    const tmdbKey = '6be243a48f589d2b9d708c83304ac06a';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const genresArray = await jsonResponse.genres;
            return genresArray;
        } else {
            console.log("Something went wrong!");
            return "Ooops, something went wrong!";
        }
    } catch(error) {
        console.log(error);
        return "Ooops, something went wrong!";
    }
}


