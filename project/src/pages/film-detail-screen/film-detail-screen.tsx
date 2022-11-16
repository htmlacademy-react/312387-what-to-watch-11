import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import FilmDetails from '../../components/film-details/film-details';
import FilmNav from '../../components/film-nav/film-nav';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmReviews from '../../components/film-reviews/film-reviews';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import {FilmValue, Nav} from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmById, getFilmsByGenre } from '../../services/film';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function FilmDetailScreen(): JSX.Element {

  const [currentView, setCurrentView] = useState('overview');

  const params = useParams();

  const films = useAppSelector((state) => state.films);
  const film = getFilmById(Number(params.id), films);

  if (!film) {
    return <NotFoundScreen />;
  }

  const relatedFilms = getFilmsByGenre(film.genre, films).slice(0, FilmValue.MaxReletedCount);

  const renderSwitchView = (): JSX.Element => {
    switch (currentView) {
      case Nav.Overview:
        return <FilmOverview film={film}/>;
      case Nav.Details:
        return <FilmDetails film={film}/>;
      case Nav.Reviews:
        return <FilmReviews film={film}/>;
      default:
        return <FilmOverview film={film}/>;
    }
  };

  return (
    <>
      <section className="film-card film-card--full">

        <Helmet>
          <title>{film.name}</title>
        </Helmet>

        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button" >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmNav
                currentView={currentView}
                onTabClick={(view: string) => setCurrentView(view)}
              />

              {renderSwitchView()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList smallFilmCards={relatedFilms} />
        </section>

        <footer className="page-footer">
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmDetailScreen;
