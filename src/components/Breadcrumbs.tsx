import { Fragment } from 'react';

import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import routes, { routeNames } from 'helpers/routes';

const Container = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;

  & a {
    font-size: inherit;
    text-decoration-color: transparent;
    text-decoration-style: wavy;
    transition: all 0.2s linear;

    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbsParts = location.pathname.split('/');

  return (
    <Container>
      {breadcrumbsParts.slice(0, -1).map((value, index) => {
        const route = breadcrumbsParts.slice(0, index + 1).join('/') || '/';
        return (
          <Fragment key={value}>
            {index > 0 && ' > '}
            <Link to={route}>{routeNames[route as routes]}</Link>
          </Fragment>
        );
      })}
    </Container>
  );
};

export default Breadcrumbs;
