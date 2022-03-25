import styled from 'styled-components';
import { ReactComponent as Play } from 'assets/play.svg';
import { ReactComponent as Link } from 'assets/link.svg';

const Wrapper = styled.div`
  max-width: 560px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 40px;
  flex-grow: 1;
`;

const Header = styled.h3`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin: 0 0 12px;
`;

const VideoPreview = styled.a<{ image: string }>`
  width: 100%;
  max-width: 560px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: left center url(${({ image }) => image});
  border-radius: 20px;
  margin-bottom: 15px;
`;

const PlayButton = styled.button`
  width: 140px;
  height: 140px;
  background: none;
  border: 1px solid white;
  border-radius: 50%;
  padding: 42px 42px 42px 56px;
  cursor: pointer;
`;

const VideoName = styled.a`
  display: flex;
  justify-content: space-between;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;
  color: black;
`;

interface VideoLinkProps {
  header: string,
  image: string,
  link: string,
  name: string,
}

const VideoLink = ({
  header, image, link, name,
}: VideoLinkProps): JSX.Element => (
  <Wrapper>
    <Header>{header.toUpperCase()}</Header>
    <VideoPreview href={link} image={image} target="_blank">
      <PlayButton><Play /></PlayButton>
    </VideoPreview>
    <VideoName href={link} target="_blank">
      <i>{name.toUpperCase()}</i>
      <Link width={20} height={20} />
    </VideoName>
  </Wrapper>
);

export default VideoLink;
