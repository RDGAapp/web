import styled from 'styled-components';

import VideoPreview from 'assets/images/preview.webp';
import VideoMp4 from 'assets/videos/banner.mp4';

const Container = styled.div`
  isolation: isolate;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 28rem;
  margin: 0 0 1rem;
  border-radius: 2.5rem;

  background-size: cover;
`;

const Video = styled.video`
  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100%;
`;

const VideoBanner = () => (
  <Container>
    <Video muted poster={VideoPreview} autoPlay loop playsInline>
      <source src={VideoMp4} type='video/mp4' />
    </Video>
  </Container>
);

export default VideoBanner;
