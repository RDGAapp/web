import styled from 'styled-components';
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 40px;
  font-family: Oswald, sans-serif;
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
}

const ButtonAgitation = ({ text }: ButtonAgitationProps): JSX.Element => (
  <Button>
    <ArrowDown style={{ marginRight: '15px' }} />
    {text.toUpperCase()}
  </Button>
);

export default ButtonAgitation;
