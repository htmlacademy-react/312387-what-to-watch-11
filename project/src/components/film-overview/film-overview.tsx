import {Film} from '../../types/film';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview({film}: FilmOverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
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
