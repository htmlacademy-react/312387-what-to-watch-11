import {Helmet} from 'react-helmet-async';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks';
import ShowMore from '../../components/show-more/show-more';
import {useEffect, useState } from 'react';
import {FilmValue} from '../../const';
import {Films} from '../../types/film';
import {getFilmsByGenre, getGenresList} from '../../services/film';

function MainScreen(): JSX.Element {

  const promo = useAppSelector((state) => state.promo);
  const smallFilmCards = useAppSelector((state) => state.films);

  const activeGenre = useAppSelector((state) => state.activeGenre);
  const genresList = getGenresList(smallFilmCards);

  const [filmsByGenre, sefFilmsByGenre] = useState<Films>([]);
  const [visibleFilmCards, setVisibleFilmCards] = useState<Films>([]);

  useEffect(() => {
    let isFilmsListMounted = true;

    if (isFilmsListMounted) {
      const sortedFilms = getFilmsByGenre(activeGenre, smallFilmCards);
      sefFilmsByGenre(sortedFilms);
      setVisibleFilmCards(sortedFilms.slice(0, FilmValue.MaxCount));
    }

    return () => {
      isFilmsListMounted = false;
    };
  }, [activeGenre, smallFilmCards]);

  function handleMoreButtonClick() {
    setVisibleFilmCards((prevState) => [
      ...prevState,
      ...filmsByGenre.slice(
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

      {promo ? <FilmCard film={promo}/> : 'Loading...'}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList currentGenre={activeGenre} genres={genresList}/>

          <FilmsList smallFilmCards={visibleFilmCards} />

          {filmsByGenre.length > visibleFilmCards.length && <ShowMore onMore={handleMoreButtonClick} />}
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
