import styled from 'styled-components';

const TextContainer = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  grid-area: description;
  gap: 0.8rem;
  align-items: ${({ position }) =>
    position === 'left' ? 'flex-end' : 'flex-start'};
  align-self: flex-start;
  width: 90%;
  margin: auto;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: ${({ position }) => (position === 'left' ? 'end' : 'start')};

  ${({ theme }) => theme.media.mobile} {
    align-items: center;
    text-align: center;
  }

  ul {
    align-self: flex-start;
  }

  li::marker {
    content: ' 🥏 ';
  }
`;

export default TextContainer;
