import { useState, createContext } from "react";
import { createHashRouter, createRoutesFromElements, HashRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import WatchList from './components/watchlist/WatchList';
import Favorites from './components/favorites/Favorites';
import { setLocalStorage } from "./helpers/setLocalStorage";
import './App.scss';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={ <NavBar /> }>
      <Route path="home" element={ <Home /> } />
      <Route path="watchlist" element={ <WatchList /> } />
      <Route path="favorites" element={ <Favorites /> } />
    </Route>
  )
)

export const watchListCounterContext = createContext();
export const favoritesCounterContext = createContext();

function App() {
  const [watchListCounter, setWatchListCounter] = useState(0);
  const [favoritesCounter, setFavoritesCounter] = useState(0);

  // Setting the initial arrays for watchlist and favorites inside local storage
  setLocalStorage();

  return (
    <div className="App">
          <watchListCounterContext.Provider value={ {watchListCounter, setWatchListCounter} }>
            <favoritesCounterContext.Provider value={ {favoritesCounter, setFavoritesCounter} }>
              <RouterProvider router={ router } />
            </favoritesCounterContext.Provider>
          </watchListCounterContext.Provider>
    </div>
  );
}

export default App;
