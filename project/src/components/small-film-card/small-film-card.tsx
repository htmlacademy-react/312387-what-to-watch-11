import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

type SmallFilmCardProps = {
  film: Film;
  handleFilmMouseEnter: () => void;
}

function SmallFilmCard({film, handleFilmMouseEnter}: SmallFilmCardProps): JSX.Element {
  return (
    <article onMouseEnter={handleFilmMouseEnter} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.img} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
