import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled(Link)<{ index: number, selected: boolean }>`
  display: flex;
  flex-direction: column;
  grid-area: item${({ index }) => index};
  gap: 0.6rem;
  padding: 1.2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  box-shadow:
    ${({ selected, theme }) => (selected
    ? css`inset 0 -4px 0 ${theme.colors.secondary}`
    : css`inset 0 -2px 0 ${theme.colors.menuInactive}`
  )};
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.secondary};
  }
`;

const Number = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  aspect-ratio: 1 / 1;
  font-size: 0.6rem;
  line-height: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100vh;
`;

const Header = styled.p`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1.4;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1;
`;

interface MenuItemProps {
  header: string,
  description: string,
  number: number,
  route: string,
  selected: boolean,
}

const MenuItem = ({
  header, description, number, route, selected,
}: MenuItemProps): JSX.Element => (
  <Container to={route} index={number} selected={selected}>
    <Number>{number}</Number>
    <Header>{header}</Header>
    <Description>{description}</Description>
  </Container>
);

export default MenuItem;
