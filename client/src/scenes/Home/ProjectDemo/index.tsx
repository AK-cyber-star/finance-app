import { useRef, useState } from "react";

import styles from "./styles.module.css";
import { Play } from "lucide-react";

function ProjectDemo() {
    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement| null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className={styles.videoSection}>
      {!isPlaying ? (
        <div className={styles.cover}>
          <button className={styles.playButton} onClick={() => setIsPlaying(true)}>
            <Play size={50} color="white" />
          </button>
        </div>
      ) : (
        <video autoPlay ref={videoRef} onClick={handleVideoClick} className={styles.video}>
          <source src="/projectVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </section>
  );
}

export default ProjectDemo