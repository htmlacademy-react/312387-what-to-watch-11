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
      onMouseEnter={handleFilmMouseEnter}
      onMouseOut={handleFilmMouseOut}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer src={film.src} isPlaying={isPlaying} poster={film.img} muted />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
