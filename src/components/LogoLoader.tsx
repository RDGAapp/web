import styled from 'styled-components';

import LogoSvg from 'assets/icons/logo.svg?react';

const Container = styled.div`
  @keyframes pulse {
    0%,
    100% {
      scale: 1;
    }

    25% {
      scale: 0.75;
    }

    75% {
      scale: 1.25;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 200px;

  & > svg {
    height: 200px;
    animation: pulse 3s linear infinite;
  }
`;

const LogoLoader = () => (
  <Container>
    <LogoSvg />
  </Container>
);

export default LogoLoader;
