import {FilmValue, Rating} from '../const';
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
  if (rating >= Rating.Bad && rating < Rating.Normal) {
    return 'Bad';
  }

  if (rating >= Rating.Normal && rating < Rating.Good) {
    return 'Normal';
  }

  if (rating >= Rating.Good && rating < Rating.VeryGood) {
    return 'Good';
  }

  if (rating >= Rating.VeryGood && rating < Rating.Awesome) {
    return 'Very good';
  }

  if (rating === Rating.Awesome) {
    return 'Awesome';
  }

  return null;
}
