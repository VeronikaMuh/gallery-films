import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "@entities/movie/model/types";
import styles from "./MovieCard.module.scss";
import { useFavoriteStore } from "@features/favorities/model/favorite";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addFavorite, isFavorite, removeFavorite } = useFavoriteStore();

  const isFavoriteMovie = isFavorite(movie.id!);

  const handleClick = () => {
    if (isFavoriteMovie) {
      removeFavorite(movie.id);
    } else addFavorite(movie.id);
  };
  return (
    <div className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        {movie?.poster?.url ? (
          <img
            className={styles.poster}
            src={movie?.poster?.url}
            alt={movie.name}
          />
        ) : (
          <div className={styles.noPoster}>Постер отсутствует</div>
        )}
        <h3 className={styles.title}>{movie.name}</h3>
      </Link>

      {movie.rating?.kp && (
        <p className={styles.rating}>
          Рейтинг КП: {movie.rating?.kp?.toFixed(1)}
        </p>
      )}
      {movie.rating?.imdb && (
        <p className={styles.rating}>
          Рейтинг IMDB: {movie.rating?.imdb?.toFixed(1)}
        </p>
      )}

      <p className={styles.year}>Год: {movie.year}</p>

      <button onClick={handleClick} className={styles.favoriteButton}>
        {isFavoriteMovie ? "Удалить из избранного" : "Добавить в избранное"}
      </button>
    </div>
  );
};
