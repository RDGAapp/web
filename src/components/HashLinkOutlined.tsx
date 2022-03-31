import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

const Button = styled(Link)`
  padding: 8px 16px;
  color: black;
  font-weight: 500;
  font-size: 12px;
  font-family: Inter, sans-serif;
  text-decoration: none;
  background: none;
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

const HashLinkOutlined = ({ text, route }: ButtonOutlinedProps): JSX.Element => (
  <Button smooth to={route}>
    {text.toUpperCase()}
  </Button>
);

export default HashLinkOutlined;
