import {useState} from 'react';
import {TimeValue} from '../../const';
import {Films} from '../../types/film';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

type FilmsListProps = {
  smallFilmCards: Films;
}

function FilmsList({smallFilmCards}: FilmsListProps): JSX.Element {

  const [activeFilmId, setActiveFilmId] = useState(0);

  let timeoutId: NodeJS.Timeout|null = null;

  function handleFilmMouseEnter(id: number): void {
    timeoutId = setTimeout(() => {
      setActiveFilmId(id);
    }, TimeValue.PreviewStartTimeout);
  }

  function handleFilmMouseOut(): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveFilmId(-1);
  }

  return (
    <div className="catalog__films-list" >
      {smallFilmCards.map((film) => (
        <SmallFilmCard
          key={`${film.id}`}
          film={film}
          isPlaying={activeFilmId === film.id}
          handleFilmMouseEnter={() => handleFilmMouseEnter(film.id)}
          handleFilmMouseOut={handleFilmMouseOut}
        />
      ))}
    </div>
  );
}

export default FilmsList;
