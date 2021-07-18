import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Button = styled(Link)<{ active: boolean }>`
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
  ${({ active, theme }) => active && `background-color: ${theme.colors.yellow};`};
  
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
  const history = useHistory();

  return (
    <Button to={route} active={history.location.pathname === route}>
      {text.toUpperCase()}
    </Button>
  );
};

export default LinkOutlined;
