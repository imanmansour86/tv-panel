import React, { useEffect, useState } from "react";
import InfiniteCarousel from "react-leaf-carousel";
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
        <h1 className="show-title-main">All Original Shows</h1>
        <h2 className="show-title-sub">
          Exclusively on tvPanel.Tune on Sunday
        </h2>
      </div>

      <div className="landing-main">
        <div className="section">
          <h2 className="main-title">
            Tom and Jerry: Oscar Winner-Best Picture
          </h2>
          <h3 className="subtitle">Tom and Jerry: Oscar Winner-Best Picture</h3>
          {randomIndex !== undefined && shows.length > 0 && (
            <InfiniteCarousel
              breakpoints={[
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
              ]}
              dots={true}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={4}
              slidesToShow={4}
              scrollOnDevice={true}
            >
              <div>
                <img
                  className="section-img"
                  alt=""
                  src={`/assets/${shows[2].image}`}
                />
              </div>
              <div>
                <img
                  className="section-img"
                  alt=""
                  src={`/assets/${shows[2].image}`}
                />
              </div>
              <div>
                <img
                  className="section-img"
                  alt=""
                  src={`/assets/${shows[2].image}`}
                />
              </div>
              <div>
                <img
                  className="section-img"
                  alt=""
                  src={`/assets/${shows[2].image}`}
                />
              </div>
              <div></div>
            </InfiniteCarousel>
          )}
        </div>

        <div className="section">
          <h2 className="main-title">Watch Entire Seasons</h2>

          {shows.length > 0 && (
            <InfiniteCarousel
              breakpoints={[
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
              ]}
              dots={true}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={4}
              slidesToShow={4}
              scrollOnDevice={true}
            >
              {shows.map((show) => (
                <div>
                  <img
                    className="section-img"
                    alt="show-images"
                    src={`/assets/${show.image}`}
                  />
                </div>
              ))}
            </InfiniteCarousel>
          )}
        </div>
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
