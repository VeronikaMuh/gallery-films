import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styles from "./MoviePage.module.scss";
import { fetchMovieById } from "@entities/movie/api/api";
export const MoviePage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(Number(id)),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!movie) return <div>Фильм не найден</div>;
  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        Назад
      </button>
      <div className={styles.wrapper}>
        {movie.poster?.url ? (
          <img
            className={styles.poster}
            src={movie.poster.url}
            alt={movie.name}
          />
        ) : (
          <div className={styles.noPoster}>постер отсутствует</div>
        )}
        <div className={styles.info}>
          <p>Рейтинг: {movie.rating?.kp?.toFixed(2)}</p>
          <p>Год: {movie.year}</p>
          <p>Страна: {movie.countries?.map((country) => country.name)}</p>
          <p>Жанр: {movie.genres?.map((genre) => genre.name).join(", ")}</p>
          <p>
            Актёры: {movie.persons?.map((person) => person.name).join(", ")}
          </p>
          <p>Описание: {movie.description}</p>
        </div>
      </div>
    </>
  );
};
