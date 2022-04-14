import styled from 'styled-components';
import { ReactComponent as PlaySvg } from 'assets/play.svg';
import { ReactComponent as LinkSvg } from 'assets/link.svg';

const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 560px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 40px;
`;

const Header = styled.h3`
  margin: 0 0 12px;
  font-weight: 600;
  font-size: 24px;
  font-family: Inter, sans-serif;
`;

const VideoPreview = styled.a<{ image: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 560px;
  height: 320px;
  margin-bottom: 15px;
  background: left center url(${({ image }) => image});
  border-radius: 20px;
`;

const PlayButton = styled.button`
  width: 140px;
  height: 140px;
  padding: 42px 42px 42px 56px;
  background: none;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
`;

const VideoName = styled.a`
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: 400;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 24px;
  text-decoration: none;
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
      <PlayButton><PlaySvg /></PlayButton>
    </VideoPreview>
    <VideoName href={link} target="_blank">
      <i>{name.toUpperCase()}</i>
      <LinkSvg width={20} height={20} />
    </VideoName>
  </Wrapper>
);

export default VideoLink;
