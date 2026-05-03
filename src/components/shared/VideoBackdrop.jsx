import { useEffect, useRef } from "react";
import portfolioBg from "../../assets/portfoliobg.mp4";
import "./VideoBackdrop.css";

function VideoBackdrop({ children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div className="portfolio-video-area">
      <div className="portfolio-video-area__background">
        <video
          ref={videoRef}
          className="portfolio-video-area__media"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={portfolioBg} type="video/mp4" />
        </video>
        <div className="portfolio-video-area__overlay" />
      </div>

      <div className="portfolio-video-area__content">{children}</div>
    </div>
  );
}

export default VideoBackdrop;
