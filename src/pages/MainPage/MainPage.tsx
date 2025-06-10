import { useQuery } from "@tanstack/react-query";
import { MovieList } from "@entities/movie/ui";
import { fetchPopularMovies } from "@entities/movie/api";

export const MainPage: React.FC = () => {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchPopularMovies,
    staleTime: 1000 * 60 * 10,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>{movies && <MovieList movies={movies} />}</div>;
};
