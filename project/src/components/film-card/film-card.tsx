import {memo} from 'react';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {getPromo} from '../../store/film-data/selectors';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import PageHeader from '../page-header/page-header';

function FilmCard(): JSX.Element {
  const film = useAppSelector(getPromo);

  if (!film) {
    return (
      <section className="film-card">
        <LoadingScreen />
      </section>
    );
  }

  return (
    <section className="film-card">

      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <FilmCardButtons filmId={film.id} isPromo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FilmCard);
