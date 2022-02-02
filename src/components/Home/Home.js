import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "src/api/movieApi";
import { APIKey } from "src/api/MovieApiKey";
import { addMovies } from "src/redux/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
// import {
//   fetchAsyncMovies,
//   fetchAsyncShows,
// } from "../../features/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAsyncMovies());
  //   dispatch(fetchAsyncShows());
  // }, [dispatch]);
  const movieText = "Harry Potter";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      console.log("The response from the API", response.data.Search);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [movieText]);

  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  );
}

export default Home;
