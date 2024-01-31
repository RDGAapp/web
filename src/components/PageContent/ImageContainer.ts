import styled from 'styled-components';

const ImageContainer = styled.div`
  grid-area: picture;

  width: 65%;
  margin: auto;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
`;

export default ImageContainer;
