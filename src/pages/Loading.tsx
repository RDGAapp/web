import styled from 'styled-components';

import LogoLoader from 'components/LogoLoader';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20rem;
`;

const Loading = () => (
  <Container>
    <LogoLoader />
  </Container>
);

export default Loading;
