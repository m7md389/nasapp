import React, { useEffect } from "react";
import MediaCard from "./MediaCard";
import "./../styles/favourites.css";

function Favourites(props) {
  const { favourites, reloadFavourites } = props;

  useEffect(reloadFavourites, []);

  return (
    <div className="favourites">
      {favourites.length === 0 && <h1>No Favourites to Show</h1>}
      {favourites.length > 0 &&
        favourites.map((favourite) => (
          <MediaCard
            key={favourite.title}
            title={favourite.title}
            media={favourite.image}
            reloadFavourites={reloadFavourites}
            isSaved={true}
          />
        ))}
    </div>
  );
}

export default Favourites;
