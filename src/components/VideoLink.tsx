import styled from 'styled-components';

import { ReactComponent as LinkSvg } from 'assets/link.svg';
import { ReactComponent as PlaySvg } from 'assets/play.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2rem;
`;

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
`;

const VideoPreview = styled.a<{ image: string }>`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 28rem;
  height: 16rem;
  color: transparent;
  background: left center url(${({ image }) => image});
  border-radius: 1rem;

  :hover > button {
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primary};
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const PlayButton = styled.button`
  width: 7rem;
  height: 7rem;
  color: inherit;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.borderContrast};
  border-radius: 100vh;
  cursor: pointer;

  svg {
    width: 2.1rem;
    margin-left: 0.5rem;
    aspect-ratio: 3 / 4;
    stroke: ${({ theme }) => theme.colors.borderContrast};
  }
`;

const VideoName = styled.a`
  display: flex;
  gap: 1rem;
  max-width: max-content;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
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
  <Container>
    <Header>{header.toUpperCase()}</Header>
    <VideoPreview href={link} image={image} target="_blank">
      <PlayButton><PlaySvg /></PlayButton>
    </VideoPreview>
    <VideoName href={link} target="_blank" rel="noreferrer">
      <i>{name.toUpperCase()}</i>
      <LinkSvg width={20} height={20} />
    </VideoName>
  </Container>
);

export default VideoLink;
