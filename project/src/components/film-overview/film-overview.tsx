import { getFilmRating, getFilmRatingLevel } from '../../services/film';
import {Film} from '../../types/film';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{getFilmRating(film.rating)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.slice(0, 4)} {film.starring.length > 4 && 'and other'}</strong></p>
      </div>
    </>
  );
}

export default FilmOverview;
