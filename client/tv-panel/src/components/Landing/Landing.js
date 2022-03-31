import React, { useEffect, useState } from "react";
import "./styles.css";

const Landing = () => {
  const [shows, setShows] = useState([]);
  const [randomIndex, setRandomIndex] = useState();

  //fetch data when component is loaded

  useEffect(() => {
    fetch("http://localhost:3001/api/shows")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const randomShowIndex = Math.floor(Math.random() * shows.length);
    setRandomIndex(randomShowIndex);
  }, [shows]);

  return (
    <div className="landing">
      <div className="full-image">
        {randomIndex !== undefined && shows.length > 0 && (
          <img
            className="main-img"
            src={`/assets/${shows[randomIndex].image}`}
          />
        )}
        <h2 className="show-title-main">My Cool Shows</h2>
      </div>
      <div className="video">
        {shows.map((show) => (
          <div>{show.name}</div>
        ))}
        {/* <video
          src={`/assets/video.mp4`}
          width="1000"
          height="300"
          controls="controls"
          autoplay="true"
        /> */}
      </div>
    </div>
  );
};

export default Landing;
