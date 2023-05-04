import React, { useState, useEffect, useRef } from "react";
import axios from "../../axios";
import "./row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState();

  const containerRef = useRef(null);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request; // its always better to return smth in async function
    }

    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    function handleScroll(e) {
      if (e.shiftKey) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY;
      }
    }

    const container = containerRef.current;
    container.addEventListener("wheel", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="row">
      <div className="row__title">{title}</div>
      <div className="row__movies" ref={containerRef}>
        {movies?.map((movie) => (
          <img
            className={`${isLargeRow ? "row__largePoster" : "row__poster"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
