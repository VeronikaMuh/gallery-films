import axios from "axios";
import type { Movie } from "@entities/movie/model/types";

const BASE_URL = "https://api.kinopoisk.dev/v1.4";

const movieApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-API-KEY": import.meta.env.VITE_API_KEY,
  },
});

export async function fetchPopularMovies(): Promise<Movie[] | undefined> {
  try {
    const { data } = await movieApi.get("/movie", {
      params: {
        limit: 20,
        sortField: "rating.kp",
        sortType: -1,
      },
    });
    return data.docs;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieByIds(
  ids: Movie["id"][]
): Promise<Movie[] | undefined> {
  try {
    const { data } = await movieApi.get("/movie", {
      params: {
        id: ids,
      },
      paramsSerializer: {
        serialize: (params) => {
          return params.id.map((id: Movie["id"]) => `id=${id}`).join("&");
        },
      },
    });
    return data.docs;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieById(id: Movie["id"]): Promise<Movie | undefined> {
    try {
        const { data } = await movieApi.get(`/movie/${id}`)
        return data;
    } catch (error) {
        console.log(error)
    }
}