export interface Movie {
  id: number; // Уникальный идентификатор фильма
  name: string; // Название фильма
  alternativeName?: string; // Альтернативное название
  description?: string; // Описание фильма
  year?: string; // Год выпуска
  persons?: Array<{ name: string }>;
  poster?: {
    url: string; // URL постера фильма
  };
  rating?: {
    kp?: number; // Рейтинг на кинопоиске
    imdb?: number; // Рейтинг на IMDb
  };
  genres?: Array<{
    name: string; // название жанра
  }>
  countries?: Array<{
    name: string; // название страны
  }>
  premiere?: {
    world?: string;
    [key: string]: string | undefined;
  };
  movieLength?: number; // длительность фильма в минутах
  ageRating?: number; // возрастной рейтинг
  type?: string; // тип (фильм, сериал и тд)
}
