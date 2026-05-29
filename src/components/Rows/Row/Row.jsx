import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // ✅ FIXED (was missing)

  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetch movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data?.results || []);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    if (fetchUrl) fetchData();
  }, [fetchUrl]);

  // Play trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (!url) return;

          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer error:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={
              movie?.poster_path || movie?.backdrop_path
                ? `${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`
                : ""
            }
            alt={movie?.name || movie?.title || "movie"}
          />
        ))}
      </div>

      {trailerUrl && (
        <div className="row__trailer">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
