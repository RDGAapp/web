import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)<{ index: number, selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  grid-area: item${({ index }) => index};
  cursor: pointer;
  gap: 12px;
  box-shadow: ${({ selected, theme }) => (selected
    ? `inset 0px -4px 0px ${theme.colors.blue}`
    : `inset 0px -2px 0px ${theme.colors.menuShadow}`
  )};
  text-decoration: none;
  color: black;
  transition: all 0.3s ease;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
  }

  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const Number = styled.div`
  border: 1px solid black;
  border-radius: 40px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 12px;
  padding: 8px 12px;
`;

const Header = styled.h5`
  font-family: Oswald, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 0;
`;

const Description = styled.p`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin: 0;
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
