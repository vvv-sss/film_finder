export const setLocalStorage = () => {
    // Creating of initial array for liked movies
    if (!localStorage.watchlist) {
        localStorage.setItem(
            'watchlist',
            JSON.stringify([])
        );
    }

    // Creating of initial array of favorite movies
    if (!localStorage.favorites) {
        localStorage.setItem(
            'favorites',
            JSON.stringify([])
        );
    }
}