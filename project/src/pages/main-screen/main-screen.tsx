import {Helmet} from 'react-helmet-async';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import ShowMore from '../../components/show-more/show-more';
import {useEffect, useState } from 'react';
import {FilmValue} from '../../const';
import {Films} from '../../types/film';
import {getFilmsByGenre, getGenresList} from '../../services/film';
import { getActiveGenre, getFilms } from '../../store/film-data/selectors';
import Footer from '../../components/footer/footer';

function MainScreen(): JSX.Element {

  const smallFilmCards = useAppSelector(getFilms);

  const activeGenre = useAppSelector(getActiveGenre);
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

      <FilmCard />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList currentGenre={activeGenre} genres={genresList}/>

          <FilmsList smallFilmCards={visibleFilmCards} />

          {filmsByGenre.length > visibleFilmCards.length && <ShowMore onMore={handleMoreButtonClick} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;
