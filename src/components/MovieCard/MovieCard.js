import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./MovieCard.module.css";

function MovieCard(props) {
  // const { data } = props;
  return (
    <div className={style.cardItem}>
      {/* <Link href={`/movie/${data.imdbID}`}> */}
      <div className={style.cardInner}>
        <div className={style.cardTop}>
          {/* <Image src={data.Poster} alt={data.Title} height={500} width={500} /> */}
        </div>
        <div className={style.cardBottom}>
          <div className={style.cardInfo}>
            {/* <h4>{data.Title}</h4> */}
            {/* <p>{data.Year}</p> */}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default MovieCard;
