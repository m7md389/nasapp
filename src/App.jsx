import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NasaModel from "./models/NasaModel";
import Nasapp from "./models/NasappModel";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Search from "./components/Search";

/*
  - Keep deleted images rendered
  - Snackbars
  - Fix Search Route
*/

function App() {
  let [AstronomyPictureOfTheDay, setAstronomyPictureOfTheDay] = useState({});
  let [favourites, setFavourites] = useState([]);

  const reloadAPOD = async function () {
    setAstronomyPictureOfTheDay(await NasaModel.getAstronomyPictureOfTheDay());
  };

  const reloadFavourites = async function () {
    setFavourites(await Nasapp.getFavoriteAstronomyPictures());
  };

  const isSavedAstronomyPicture = function (astronomyTitle) {
    for (const favourite of favourites) {
      if (favourite.title === astronomyTitle) return true;
    }
    return false;
  };

  useEffect(() => {
    reloadAPOD();
    reloadFavourites();
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          path="/favourites"
          render={() => (
            <Favourites
              favourites={favourites}
              reloadFavourites={reloadFavourites}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              isSavedAstronomyPicture={isSavedAstronomyPicture}
              reloadFavourites={reloadFavourites}
            />
          )}
        />
        <Route path="/404" render={() => <PageNotFound />} />
        <Route
          exact
          path="/"
          render={() => <Home APOD={AstronomyPictureOfTheDay} />}
        />
        <Redirect to="404"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
