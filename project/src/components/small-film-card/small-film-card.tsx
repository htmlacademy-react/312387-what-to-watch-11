import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

import './small-film-card.css';

type SmallFilmCardProps = {
  film: Film;
  isPlaying: boolean;
  onFilmMouseEnter: () => void;
  onFilmMouseOut: () => void;
}

function SmallFilmCard({film, isPlaying, onFilmMouseEnter, onFilmMouseOut}: SmallFilmCardProps): JSX.Element {
  return (
    <Link
      className="small-film-card catalog__films-card"
      to={`/films/${film.id}`}
      onMouseEnter={onFilmMouseEnter}
      onMouseOut={onFilmMouseOut}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={film.previewVideoLink}
          poster={film.posterImage}
          isPlaying={isPlaying}
          isMuted
        />
      </div>
      <h3 className="small-film-card__title">
        <span className="small-film-card__link">{film.name}</span>
      </h3>
    </Link>
  );
}

export default SmallFilmCard;
