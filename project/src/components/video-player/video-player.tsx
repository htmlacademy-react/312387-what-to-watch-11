import {useEffect, useRef} from 'react';
import {ErrorMessage} from '../../const';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isMuted: boolean;
  isPlaying: boolean;
}

function VideoPlayer({isPlaying, src, poster, isMuted}: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      src={src}
      ref={videoRef}
      className="player__video"
      poster={poster}
      muted={isMuted}
    >
      {ErrorMessage.VideoSupport}
    </video>
  );
}

export default VideoPlayer;
