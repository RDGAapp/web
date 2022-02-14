import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

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

const HashLinkOutlined = ({ text, route }: ButtonOutlinedProps): JSX.Element => (
  <Button smooth to={route}>
    {text.toUpperCase()}
  </Button>
);

export default HashLinkOutlined;
