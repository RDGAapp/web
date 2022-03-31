import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Button = styled(Link)<{ $active: boolean }>`
  padding: 8px 16px;
  color: black;
  font-weight: 500;
  font-size: 12px;
  font-family: Inter, sans-serif;
  text-decoration: none;
  background: none;
  ${({ $active, theme }) => $active && `background-color: ${theme.colors.yellow};`}
  border: 1px solid black;
  border-radius: 40px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.mobilexs} {
    padding: 6px 14px;
    font-size: 11px;
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
