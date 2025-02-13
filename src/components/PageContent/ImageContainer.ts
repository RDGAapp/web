import styled from 'styled-components';

const ImageContainer = styled.div`
  grid-area: picture;

  width: 65%;
  margin: auto;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export default ImageContainer;
