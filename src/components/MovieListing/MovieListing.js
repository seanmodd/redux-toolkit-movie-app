import React from "react";
import { useSelector } from "react-redux";
// import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { getAllMovies } from "src/redux/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import style from "./MovieListing.module.css";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  console.log(
    "This is movies that we call from the destructured useSelector: ",
    movies
  );
  // const shows = useSelector(getAllShows);
  let renderMovies;
  const renderShows = "";

  // renderMovies =
  //   movies.Response === "True" ? (
  //     movies.Search.map((movie, index) => (
  //       <MovieCard key={index} data={movie} />
  //     ))
  //   ) : (
  //     <div className="movies-error">
  //       <h3>{movies.Error}</h3>
  //     </div>
  //   );

  // renderShows =
  //   shows.Response === "True" ? (
  //     shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  //   ) : (
  //     <div className="shows-error">
  //       <h3>{shows.Error}</h3>
  //     </div>
  //   );
  return (
    <div className={style.movieWrapper}>
      <div className={style.movieList}>
        <h2>Movies</h2>
        {/* <div className="movie-container">{renderMovies}</div> */}
      </div>
      <div className={style.showList}>
        <h2>Shows</h2>
        {/* <div className="movie-container">{renderShows}</div> */}
      </div>
    </div>
  );
}

export default MovieListing;
