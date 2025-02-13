import type { JSX } from 'react';

import styled from 'styled-components';

import LinkSvg from 'assets/icons/link.svg?react';
import PlaySvg from 'assets/icons/play.svg?react';

const Container = styled.div<{ $position: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: ${({ $position }) =>
    $position === 'left' ? 'flex-end' : 'flex-start'};

  border-radius: 2rem;

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
  }
`;

const Header = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const VideoPreview = styled.div<{ $image: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 28rem;
  height: 16rem;
  border-radius: 1rem;

  color: transparent;

  background: left center url('${({ $image }) => $image}');
  background-size: cover;
`;

const PlayButton = styled.a`
  cursor: pointer;

  display: grid;
  align-items: center;
  justify-content: center;

  width: 7rem;
  height: 7rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 100vh;

  color: ${({ theme }) => theme.colors.primary};

  background: none;

  transition: scale 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }

  & svg {
    aspect-ratio: 3 / 4;
    width: 2.1rem;
    margin-left: 0.5rem;
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

const VideoName = styled.a`
  display: flex;
  gap: 1rem;

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  transition: scale 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    scale: 1.1;
  }

  &:active {
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
  <Container $position={position}>
    <Header>{header}</Header>
    <VideoPreview $image={image}>
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
