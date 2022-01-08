import React from "react";
import Nasapp from "../models/NasappModel";

function Like(props) {
  const { isSaved, title, media, reloadFavourites } = props;

  const handleLike = async function () {
    if (isSaved) {
      await Nasapp.deleteAstronomyPicture(title);
    } else if (isSaved === false) {
      await Nasapp.saveAstronomyPicture(title, media);
    }
    reloadFavourites();
  };

  const getIcon = function () {
    if (isSaved) return "thumb_down";
    return "thumb_up";
  };

  return (
    <div className="material-icons-round like" onClick={handleLike}>
      {getIcon()}
    </div>
  );
}

export default Like;
