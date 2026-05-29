import React, { useState, useEffect } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import "./Banner.css";

// helper function (FIXED)
const truncate = (str, n) => {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
};

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        const results = request.data.results;

        if (results && results.length > 0) {
          setMovie(results[Math.floor(Math.random() * results.length)]);
        }
      } catch (error) {
        console.log("Error fetching Netflix originals:", error);
      }
    };

    fetchData();
  }, []);

  const handlePlay = async () => {
    try {
      // close trailer if already open
      if (trailerUrl) {
        setTrailerUrl("");
        return;
      }

      // movie title
      const movieName = movie?.title || movie?.name || movie?.original_name;

      if (!movieName) return;

      // find youtube trailer
      const url = await movieTrailer(movieName);

      if (url) {
        const urlParams = new URLSearchParams(new URL(url).search);

        const videoId = urlParams.get("v");

        setTrailerUrl(videoId);
      }
    } catch (error) {
      console.log("Trailer not found:", error);
    }
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play" onClick={handlePlay}>
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
