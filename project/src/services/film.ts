import {FilmValue} from '../const';
import {Films} from '../types/film';

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

export function getFilmRating (rating: number): string {
  if (Math.trunc(rating) === rating) {
    return `${rating},0`;
  }

  return rating.toString().replace('.', ',');
}

export function getFilmRatingLevel (rating: number): string|null {
  if (rating >= 0 && rating < 3) {
    return 'Bad';
  }

  if (rating >= 3 && rating < 5) {
    return 'Normal';
  }

  if (rating >= 5 && rating < 8) {
    return 'Good';
  }

  if (rating >= 8 && rating < 10) {
    return 'Very good';
  }

  if (rating === 10) {
    return 'Awesome';
  }

  return null;
}
