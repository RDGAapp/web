import styled from 'styled-components';

const CustomImage = styled.img<{ $position: 'left' | 'right' }>`
  rotate: ${({ $position }) => ($position === 'left' ? '5deg' : '-5deg')};

  aspect-ratio: 1;
  width: 100%;
  border-radius: 1rem;

  object-fit: cover;

  transition: rotate 0.2s ease-in-out;

  &:hover,
  &:focus-visible {
    rotate: 0deg;
  }
`;

export default CustomImage;
