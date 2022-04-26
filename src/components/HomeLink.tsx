import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

import { ReactComponent as HomeSvg } from 'assets/icons/home.svg';
import routes from 'helpers/routes';

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    height: 1.5rem;
    fill: transparent;
    stroke: ${({ theme }) => theme.colors.text.primary};
  }
`;

const HomeLink = (): JSX.Element => (
  <StyledLink to={`${routes.HOME}${routes.MENU}`} smooth>
    <HomeSvg />
    Назад на главную
  </StyledLink>
);

export default HomeLink;
