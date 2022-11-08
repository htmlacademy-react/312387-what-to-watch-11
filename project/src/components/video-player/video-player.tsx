import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string;
  muted: boolean;
  poster: string;
  isPlaying: boolean;
}

function VideoPlayer({isPlaying, src, poster, muted}: VideoPlayerProps): JSX.Element {

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
      muted={muted}
    >
    </video>
  );
}

export default VideoPlayer;
