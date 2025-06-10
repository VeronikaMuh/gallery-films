import { create } from "zustand";
import type { Movie } from "@entities/movie/model/types";

interface FavoriteState {
  favoriteMovies: Movie["id"][];
  addFavorite: (id: Movie["id"]) => void;
  removeFavorite: (id: Movie["id"]) => void;
  isFavorite: (id: Movie["id"]) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favoriteMovies: [],
  addFavorite: (id) =>
    set((state) => ({ favoriteMovies: [...state.favoriteMovies, id] })),
  removeFavorite: (id) =>
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((movieId) => movieId !== id),
    })),
    isFavorite: (id) => get().favoriteMovies.includes(id)
}));
