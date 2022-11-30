import {useState, useEffect, useRef} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute, ErrorMessage, TimeValue} from '../../const';
import {useAppSelector} from '../../hooks';
import {store} from '../../store';
import {fetchFilmAction} from '../../store/api-actions';
import {getFilm, getFilmDataLoadingStatus} from '../../store/film-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';


function PlayerScreen(): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const navigate = useNavigate();

  const params = useParams();

  const film = useAppSelector(getFilm);

  const [isPlaying, setIsPlaying] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);

  const tooglerValue = `${((currentTime / durationTime) * TimeValue.Hundred)}%`;

  function countTimeLeft(): string {
    const timeDifference = durationTime - currentTime;

    const minutes = Math.trunc(timeDifference / TimeValue.DefaultSecondsCount);
    const seconds = Math.trunc(timeDifference % TimeValue.DefaultSecondsCount);
    const hours = Math.trunc(minutes / TimeValue.DefaultSecondsCount);

    const result = [];

    hours && result.push((`0${hours}`).slice(-2));
    result.push((`0${minutes}`).slice(-2));
    result.push((`0${seconds}`).slice(-2));

    return result.join(':');
  }

  function openCrossFullScreen(element: HTMLVideoElement): void {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullscreen) {
      element.mozRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  useEffect(() => {
    let isFilmDetailMounted = true;

    if (isFilmDetailMounted) {
      store.dispatch(fetchFilmAction(Number(params.id)));
    }

    return () => {
      isFilmDetailMounted = false;
    };
  }, [params.id]);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (videoRef.current && isVideoPlayerMounted) {
        setDurationTime(Math.trunc(videoRef.current.duration));
        videoRef.current.play();
      }
    });

    videoRef.current.addEventListener('timeupdate', () => {
      if (videoRef.current && isVideoPlayerMounted) {
        setCurrentTime(Math.trunc(videoRef.current.currentTime));
      }
    });

    return () => {
      isVideoPlayerMounted = false;
    };

  });

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();

  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (fullScreen) {
      openCrossFullScreen(videoRef.current);
    }

    return () => setFullScreen(false);
  }, [fullScreen]);

  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);

  if (isFilmDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!film) {
    return <NotFoundScreen />;
  }

  function getPlayButton(): JSX.Element {
    return (
      <>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </>
    );
  }

  function getPauseButton(): JSX.Element {
    return (
      <>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </>
    );
  }

  return (
    <div className="player">
      <video
        src={film.videoLink}
        ref={videoRef}
        className="player__video"
        poster={film.posterImage}
        muted
      >
        {ErrorMessage.VideoSupport}
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(AppRoute.Root)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={durationTime}></progress>
            <div className="player__toggler" style={{left: tooglerValue}}>Toggler</div>
          </div>
          <div className="player__time-value">- {countTimeLeft()}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={() => setIsPlaying(!isPlaying)} type="button" className="player__play">
            {isPlaying ? getPauseButton() : getPlayButton()}
          </button>
          <div className="player__name">{film.name}</div>

          <button onClick={() => setFullScreen(true)} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
