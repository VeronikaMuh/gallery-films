import React from "react";
import { fetchMovieByIds } from "@entities/movie/api/api";
import { MovieList } from "@entities/movie/ui";
import { useFavoriteStore } from "@features/favorities/model/favorite";
import { useQuery } from "@tanstack/react-query";
export const FavoritePage: React.FC = () => {
  const { favoriteMovies } = useFavoriteStore();
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favoriteMovies", favoriteMovies],
    queryFn: () => fetchMovieByIds(favoriteMovies),
    staleTime: 1000 * 60 * 10,
    enabled: favoriteMovies.length > 0,

  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      { movies && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <div>Нет избранных фильмов</div>
      )}
    </div>
  );
};
