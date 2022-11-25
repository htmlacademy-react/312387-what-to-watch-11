import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import FilmDetails from '../../components/film-details/film-details';
import FilmNav from '../../components/film-nav/film-nav';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmReviews from '../../components/film-reviews/film-reviews';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import PageHeader from '../../components/page-header/page-header';
import {FilmValue, Nav} from '../../const';
import {useAppSelector} from '../../hooks';
import {getFilmsByGenre } from '../../services/film';
import {store} from '../../store';
import {fetchFilmAction, fetchReviewsAction} from '../../store/api-actions';
import {getFilm, getFilmDataLoadingStatus, getFilms, getReviews} from '../../store/film-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function FilmDetailScreen(): JSX.Element {

  const [currentView, setCurrentView] = useState('overview');

  const params = useParams();

  useEffect(() => {
    let isFilmDetailMounted = true;

    if (isFilmDetailMounted) {
      store.dispatch(fetchFilmAction(Number(params.id)));
      store.dispatch(fetchReviewsAction(Number(params.id)));
    }

    return () => {
      isFilmDetailMounted = false;
    };
  }, [params.id]);

  const reviews = useAppSelector(getReviews);
  const films = useAppSelector(getFilms);
  const film = useAppSelector(getFilm);

  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);

  if (isFilmDataLoading) {
    return (
      <LoadingScreen />
    );
  }

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
        return <FilmReviews reviews={reviews}/>;
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

          <PageHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmCardButtons filmId={film.id}/>
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

        <Footer />
      </div>
    </>
  );
}

export default FilmDetailScreen;
