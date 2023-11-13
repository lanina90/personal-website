import React, {FC, useEffect, useRef} from 'react';

interface VideoComponentProps{
  mp4: string;
  webm: string;
  poster? :string
}
const VideoComponent: FC<VideoComponentProps> = ({ mp4, webm,poster } ) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const video = entries[0];
        if(videoRef.current){
          if (video.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.8
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
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