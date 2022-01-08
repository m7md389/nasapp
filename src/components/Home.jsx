import React from "react";
import MediaCard from "./MediaCard";
import "./../styles/home.css";
function Home({ APOD }) {
  return (
    <div className="home">
      <MediaCard
        title={APOD.title}
        explanation={APOD.explanation}
        media={APOD.url}
        mediaType={APOD.media_type}
        isHome
      />
    </div>
  );
}

export default Home;
