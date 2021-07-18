import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

const Button = styled(Link)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 40px;
  color: black;
  font-family: Oswald, sans-serif;
  text-decoration: none;
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  padding: 16px 24px;
  cursor: pointer;
  
  :hover {
    border: 1px solid black;
    transition: border 0.3s ease;
  }
`;

interface ButtonAgitationProps {
  text: string,
  link: string,
}

const ButtonAgitation = ({ text, link }: ButtonAgitationProps): JSX.Element => (
  <Button to={link} smooth>
    <ArrowDown style={{ marginRight: '15px' }} />
    {text.toUpperCase()}
  </Button>
);

export default ButtonAgitation;
