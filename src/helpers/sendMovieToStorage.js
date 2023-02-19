export const sendMovieToStorage = (movieID, storageList) => {
    let listOfID;

    try {
        listOfID = JSON.parse(localStorage.getItem(storageList));
    } catch(error) {
        console.log(error);
    }

    if (listOfID.indexOf(movieID) === -1) {
        localStorage.setItem(storageList, JSON.stringify([movieID, ...listOfID]));
    }
}