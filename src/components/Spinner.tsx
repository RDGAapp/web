import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.spinner};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backdrop};
  cursor: wait;
`;

const Core = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  margin: 72px auto;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 90px;
  text-indent: -9999em;
  border-radius: 50%;
  transform: translateZ(0);
  animation: load6 1.7s infinite ease, round 1.7s infinite ease;

  @keyframes load6 {
    0% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em,
        0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }

    5%,
    95% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em,
        0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }

    10%,
    59% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em,
        -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }

    20% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em,
        -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }

    38% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em,
        -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }

    100% {
      box-shadow:
        0 -0.83em 0 -0.4em,
        0 -0.83em 0 -0.42em,
        0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }
  }

  @keyframes round {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => (
  <Container>
    <Core>Loading...</Core>
  </Container>
);

export default Spinner;
