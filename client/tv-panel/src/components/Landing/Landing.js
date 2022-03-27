import React, { useEffect, useState } from "react";
import "./styles.css";

const Landing = () => {
  const [shows, setShows] = useState();

  //fetch data when component is loaded

  useEffect(() => {
    fetch("http://localhost:3001/api/shows")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="landing">
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
