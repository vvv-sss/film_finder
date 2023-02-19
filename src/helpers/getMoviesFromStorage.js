export const getMoviesFromStorage = (storageList) => {
    let list;
    try {
        list = JSON.parse(localStorage.getItem(storageList));
        return list;
    } catch(error) {
        console.log(error);
    }
}