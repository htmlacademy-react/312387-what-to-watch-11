import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import AddReview from '../../components/add-review/add-review';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {useAppSelector} from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function AddReviewScreen(): JSX.Element {

  const film = useAppSelector((state) => state.film);

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
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <UserBlock />
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
