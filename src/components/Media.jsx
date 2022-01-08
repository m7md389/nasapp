import React, { Fragment } from "react";
import ReactPlayer from "react-player";

function Media({ media, mediaType }) {
  return (
    <Fragment>
      {mediaType === "video" ? (
        <ReactPlayer className="media" url={media} />
      ) : (
        <img className="media" src={media} alt="" />
      )}
    </Fragment>
  );
}

export default Media;
