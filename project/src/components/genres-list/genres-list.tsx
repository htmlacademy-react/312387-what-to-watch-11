import cn from 'classnames';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {setActiveGenre} from '../../store/action';

type GenreListProps = {
  currentGenre: string;
  genres: string[];
}

function GenresList({currentGenre, genres}: GenreListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre: string) => (
        <li
          key={genre}
          className={cn(
            'catalog__genres-item',
            {'catalog__genres-item--active': genre === currentGenre}
          )}
        >
          <Link
            to="/"
            className="catalog__genres-link"
            onClick={(evt: React.MouseEvent) => {
              evt.preventDefault();
              dispatch(setActiveGenre({genre: genre}));
            }}
          >
            {genre}
          </Link>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
