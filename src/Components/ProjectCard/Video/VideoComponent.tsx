import React, {FC, useEffect, useRef} from 'react';

interface VideoComponentProps{
  mp4: string;
  webm: string;
  poster? :string
}
const VideoComponent: FC<VideoComponentProps> = ({ mp4, webm,poster } ) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentVideo = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const video = entries[0];
        if (currentVideo) {
          if (video.isIntersecting) {
            if (currentVideo.paused) {
              currentVideo.play().catch(error => {
                console.error('Error playing video:', error);
              });
            }
          } else {
            if (!currentVideo.paused) {
              currentVideo.pause();
            }
          }
        }
      },
      { threshold: 0.8 }
    );

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);


  return (
    <video ref={videoRef} preload="none" loop muted playsInline className='lazy'
           poster={poster}>
      <source src={webm} type="video/webm"/>
      <source src={mp4} type="video/mp4"/>
      You browser does not support videos =(
    </video>
  );
};

export default VideoComponent;