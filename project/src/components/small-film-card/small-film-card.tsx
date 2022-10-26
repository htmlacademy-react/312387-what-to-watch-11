import {Link} from 'react-router-dom';
import {SmallCard} from '../../index';

type SmallFilmCardProps = {
  film: SmallCard;
}

function SmallFilmCard({film}: SmallFilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
