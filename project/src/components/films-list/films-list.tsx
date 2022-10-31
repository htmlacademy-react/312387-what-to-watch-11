import {useState} from 'react';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import {Films} from '../../types/film';

type FilmsListProps = {
  smallFilmCards: Films;
}

function FilmsList({smallFilmCards}: FilmsListProps ): JSX.Element {

  const [activeFilmId, setActiveFilmId] = useState(0);

  return (
    <div className="catalog__films-list" data-active-id={activeFilmId} > {/* todo: убрать data-active-id */}
      {smallFilmCards.map((film) => <SmallFilmCard handleFilmMouseEnter={() => setActiveFilmId(film.id) } key={`${film.id}`} film={film} />)}
    </div>
  );
}

export default FilmsList;
