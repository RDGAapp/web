import styled from 'styled-components';

import PageHeader from 'components/PageHeader';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 20rem;
`;

const NotFound = () => (
  <Container>
    <PageHeader text="Страница не найдена" />
  </Container>
);

export default NotFound;
