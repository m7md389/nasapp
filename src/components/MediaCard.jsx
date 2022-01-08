import React from "react";
import Media from "./Media";
import Like from "./Like";
import "./../styles/media-card.css";
import "./../styles/like.css";

function MediaCard({
  title,
  explanation,
  media,
  mediaType,
  isSaved,
  reloadFavourites,
  isHome
}) {
  return (
    <div className="media-card">
      <h1>{title}</h1>
      <Media media={media} mediaType={mediaType} />
      {explanation && <p>{explanation}</p>}
      {!isHome && (
        <Like
          isSaved={isSaved}
          title={title}
          media={media}
          reloadFavourites={reloadFavourites}
        />
      )}
    </div>
  );
}

export default MediaCard;
