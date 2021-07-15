import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
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
  
  :hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    transition: background-color 0.3s ease;
  }
`;

interface ButtonOutlinedProps {
  text: string,
  route: string,
}

const LinkOutlined = ({ text, route }: ButtonOutlinedProps): JSX.Element => (
  <Button to={route}>
    {text.toUpperCase()}
  </Button>
);

export default LinkOutlined;
