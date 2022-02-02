import React, { useEffect } from "react";
// import { useParams } from "react-router";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import style from "./MovieDetail.module.css";
// import {
//   fetchAsyncMovieOrShowDetail,
//   getSelectedMovieOrShow,
//   removeSelectedMovieOrShow,
// } from "../../features/movies/movieSlice";

function MovieDetail() {
  // const { imdbID } = useParams();
  // const { imdbID } = useRouter();
  const dispatch = useDispatch();
  // const data = useSelector(getSelectedMovieOrShow);
  // console.log(data);
  // useEffect(() => {
  //   dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  //   return () => {
  //     dispatch(removeSelectedMovieOrShow());
  //   };
  // }, [dispatch, imdbID]);
  return (
    <div className={style.movieSection}>
      {/* {Object.keys(data).length === 0 ? ( */}
        {/* <div>...Loading</div> */}
      {/* ) : ( */}
        <>
          <div className={style.sectionLeft}>
            {/* <div className={style.movieTitle}>{data.Title}</div> */}
            <div className={style.movieRating}>
              <span>
                {/* IMDB Rating <i className="fa fa-star" /> : {data.imdbRating} */}
              </span>
              <span>
                {/* IMDB Votes <i className="fa fa-thumbs-up" /> : {data.imdbVotes} */}
              </span>
              <span>
                {/* Runtime <i className="fa fa-film" /> : {data.Runtime} */}
              </span>
              <span>
                {/* Year <i className="fa fa-calendar" /> : {data.Year} */}
              </span>
            </div>
            <div className={style.moviePlot}>{data.Plot}</div>
            <div className={style.movieInfo}>
              <div>
                <span>Director</span>
                {/* <span>{data.Director}</span> */}
              </div>
              <div>
                <span>Stars</span>
                {/* <span>{data.Actors}</span> */}
              </div>
              <div>
                <span>Generes</span>
                {/* <span>{data.Genre}</span> */}
              </div>
              <div>
                <span>Languages</span>
                {/* <span>{data.Language}</span> */}
              </div>
              <div>
                <span>Awards</span>
                {/* <span>{data.Awards}</span> */}
              </div>
            </div>
          </div>
          <div className={style.sectionRight}>
            {/* <img src={data.Poster} alt={data.Title} /> */}
          </div>
        </>
      {/* )} */}
    </div>
  );
}

export default MovieDetail;
