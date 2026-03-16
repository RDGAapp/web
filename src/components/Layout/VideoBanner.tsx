import VideoPreview from 'assets/images/preview.webp';
import VideoMp4 from 'assets/videos/banner.mp4';

import styles from './styles.module.css';

const VideoBanner = () => (
  <div className={styles['video-banner']}>
    <video muted poster={VideoPreview} autoPlay loop playsInline>
      <source src={VideoMp4} type='video/mp4' />
    </video>
  </div>
);

export default VideoBanner;
