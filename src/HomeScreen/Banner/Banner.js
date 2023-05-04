import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `${
          movie
            ? ` url( "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}") `
            : 'url( "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg") '
        } `,
      }}
    >
      <div className="banner--fadedGradient">
        <div className="banner__content">
          <div className="banner__title">{movie?.name}</div>
          <div className="banner_airDate">
            {movie?.first_air_date +
              " | " +
              movie?.original_language.toUpperCase()}
          </div>
          <div className="banner__button__group">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>
          <div className="banner__description">{movie?.overview}</div>
        </div>
      </div>
      <div className="banner--fadedBottom" />
    </header>
  );
}

export default Banner;
