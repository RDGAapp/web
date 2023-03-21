import styled from 'styled-components';

import { ReactComponent as LinkSvg } from 'assets/icons/link.svg';
import { ReactComponent as PlaySvg } from 'assets/icons/play.svg';

const Container = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: ${({ position }) => (position === 'left' ? 'flex-end' : 'flex-start')};
  border-radius: 2rem;

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
  }
`;

const Header = styled.h3`
  font-weight: 600;
  font-size: 1.2rem;
`;

const VideoPreview = styled.div<{ image: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 28rem;
  height: 16rem;
  color: transparent;
  background: left center url("${({ image }) => image}");
  border-radius: 1rem;
`;

const PlayButton = styled.a`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 100vh;
  cursor: pointer;
  transition: scale 0.3s ease-in-out;

  :hover {
    scale: 1.1;
  }

  :active {
    scale: 0.9;
  }

  svg {
    width: 2.1rem;
    margin-left: 0.5rem;
    aspect-ratio: 3 / 4;
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

const VideoName = styled.a`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1;
  text-decoration: none;
  transition: scale 0.3s ease-in-out;

  :hover {
    scale: 1.1;
  }

  :active {
    scale: 0.9;
  }
`;

interface VideoLinkProps {
  header: string;
  image: string;
  link: string;
  name: string;
  position: 'left' | 'right';
}

const VideoLink = ({
  header,
  image,
  link,
  name,
  position,
}: VideoLinkProps): JSX.Element => (
  <Container position={position}>
    <Header>{header}</Header>
    <VideoPreview image={image}>
      <PlayButton href={link} target='_blank' rel='noreferrer'>
        <PlaySvg />
      </PlayButton>
    </VideoPreview>
    <VideoName href={link} target='_blank' rel='noreferrer'>
      <i>{name}</i>
      <LinkSvg width={20} height={20} />
    </VideoName>
  </Container>
);

export default VideoLink;
