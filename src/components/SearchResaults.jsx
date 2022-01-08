import React from "react";
import MediaCard from "./MediaCard";

function SearchResaults(props) {
  const { searchResaults, isSavedAstronomyPicture, reloadFavourites } = props;

  return searchResaults.map((data) => {
    return (
      <MediaCard
        key={data.data[0].nasa_id}
        title={data.data[0].title}
        media={data.links[0].href}
        reloadFavourites={reloadFavourites}
        isSaved={isSavedAstronomyPicture(data.data[0].title)}
      />
    );
  });
}

export default SearchResaults;
