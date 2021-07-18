import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import routes from 'helpers/routes';
import { ReactComponent as Home } from 'assets/home.svg';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px 10px;
  gap: 10px;
  
  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

const HomeLink = (): JSX.Element => (
  <StyledLink to={`${routes.HOME}${routes.MENU}`} smooth>
    <Home />
    Назад на главную
  </StyledLink>
);

export default HomeLink;
