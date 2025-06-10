import React from "react";
import type { Movie } from "@entities/movie/model/types";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from './MovieList.module.scss'

type MovieListProps = {
  movies: Movie[];
};
export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
