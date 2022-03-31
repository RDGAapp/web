import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)<{ index: number, selected: boolean }>`
  display: flex;
  flex-direction: column;
  grid-area: item${({ index }) => index};
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  color: black;
  text-decoration: none;
  box-shadow:
    ${({ selected, theme }) => (selected
    ? `inset 0px -4px 0px ${theme.colors.blue}`
    : `inset 0px -2px 0px ${theme.colors.menuShadow}`
  )};
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ theme }) => theme.breakpoints.mobilexs} {
    padding: 18px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const Number = styled.div`
  padding: 8px 12px;
  font-weight: 500;
  font-size: 12px;
  font-family: Inter, sans-serif;
  border: 1px solid black;
  border-radius: 40px;
`;

const Header = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 20px;
  font-family: Oswald, sans-serif;
  line-height: 28px;
`;

const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  font-family: Inter, sans-serif;
  line-height: 14px;
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
  <Wrapper to={route} index={number} selected={selected}>
    <HeaderContainer>
      <Number>{number}</Number>
      <Header>{header}</Header>
    </HeaderContainer>
    <Description>{description}</Description>
  </Wrapper>
);

export default MenuItem;
