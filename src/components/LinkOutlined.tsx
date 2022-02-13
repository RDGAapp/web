import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Button = styled(Link)<{ $active: boolean }>`
  background: none;
  border: 1px solid black;
  border-radius: 40px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  padding: 8px 16px;
  cursor: pointer;
  ${({ $active, theme }) => $active && `background-color: ${theme.colors.yellow};`};

  ${({ theme }) => theme.breakpoints.mobilexs} {
    font-size: 11px;
    padding: 6px 14px;
  }
  
  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    transition: background-color 0.3s ease;
  }
`;

interface ButtonOutlinedProps {
  text: string,
  route: string,
}

const LinkOutlined = ({ text, route }: ButtonOutlinedProps): JSX.Element => {
  const location = useLocation();

  return (
    <Button to={route} $active={location.pathname === route || false}>
      {text.toUpperCase()}
    </Button>
  );
};

export default LinkOutlined;
