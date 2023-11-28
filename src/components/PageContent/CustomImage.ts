import styled from 'styled-components';

const CustomImage = styled.img<{ $position: 'left' | 'right' }>`
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  aspect-ratio: 1;
  rotate: ${({ $position }) => ($position === 'left' ? '5deg' : '-5deg')};
  transition: rotate 0.3s ease-in-out;

  &:hover {
    rotate: 0deg;
  }
`;

export default CustomImage;
