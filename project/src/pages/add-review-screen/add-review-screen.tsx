import {Helmet} from 'react-helmet-async';
import {Link, useParams} from 'react-router-dom';
import AddReview from '../../components/add-review/add-review';
import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks';
import {getFilmById} from '../../services/film';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function AddReviewScreen(): JSX.Element {

  const params = useParams();

  const films = useAppSelector((state) => state.films);
  const film = getFilmById(Number(params.id), films);

  if (!film) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full">

      <Helmet>
        <title>{film.name}</title>
      </Helmet>

      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <AddReview />

    </section>
  );
}

export default AddReviewScreen;
