import {Helmet} from 'react-helmet-async';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import {getGenresList} from '../../mocks/films';
import {useAppSelector} from '../../hooks';
import {promoFilm} from '../../mocks/films';
import ShowMore from '../../components/show-more/show-more';
import {useEffect, useState } from 'react';
import {FilmValue} from '../../const';
import {Films} from '../../types/film';

function MainScreen(): JSX.Element {

  const smallFilmCards = useAppSelector((state) => state.filmsByGenre);

  const activeGenre = useAppSelector((state) => state.activeGenre);
  const genresList = getGenresList();

  const [visibleFilmCards, setVisibleFilmCards] = useState<Films>([]);

  useEffect(() => {
    let isFilmsListMounted = true;

    if (isFilmsListMounted) {
      setVisibleFilmCards(smallFilmCards.slice(0, FilmValue.MaxCount));
    }

    return () => {
      isFilmsListMounted = false;
    };
  }, [smallFilmCards]);

  function handleMoreButtonClick() {
    setVisibleFilmCards((prevState) => [
      ...prevState,
      ...smallFilmCards.slice(
        visibleFilmCards.length,
        visibleFilmCards.length + FilmValue.MaxCount
      )
    ]);
  }

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

          <FilmsList smallFilmCards={visibleFilmCards} />

          {smallFilmCards.length > visibleFilmCards.length && <ShowMore onMore={handleMoreButtonClick} />}
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
