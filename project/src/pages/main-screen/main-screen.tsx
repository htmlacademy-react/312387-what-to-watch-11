import {Helmet} from 'react-helmet-async';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import {getGenresList} from '../../mocks/films';
import {useAppSelector} from '../../hooks';
import {promoFilm} from '../../mocks/films';

function MainScreen(): JSX.Element {

  const smallFilmCards = useAppSelector((state) => state.filmsByGenre);

  const activeGenre = useAppSelector((state) => state.activeGenre);
  const genresList = getGenresList();

  return (
    <>
      <Helmet>
        <title>WTW main page</title>
      </Helmet>

      <FilmCard film={promoFilm}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList currentGenre={activeGenre} genres={genresList}/>

          <FilmsList smallFilmCards={smallFilmCards} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
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

export default MainScreen;
