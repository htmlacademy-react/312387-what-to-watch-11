import {FilmValue} from '../const';
import {Film, Films} from '../types/film';

// Todo: заменить на получение фильма с сервера
export function getFilmById(id: number, films: Films): Film | undefined {
  return films.find(($item) => $item.id === id );
}

export function getGenresList(films: Films): string[] {
  const genres = new Set(films.map((film) => film.genre));
  return [FilmValue.DefaultStateGenre as string, ...genres];
}

export function getFilmsByGenre(genre: string, films: Films): Films {
  if (genre === FilmValue.DefaultStateGenre) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}
