import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: Film;
  isPlaying: boolean;
  handleFilmMouseEnter: () => void;
  handleFilmMouseOut: () => void;
}

function SmallFilmCard({film, isPlaying, handleFilmMouseEnter, handleFilmMouseOut}: SmallFilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleFilmMouseEnter}
      onMouseOut={handleFilmMouseOut}
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
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
