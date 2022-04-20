import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: 0.6rem;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`;

interface ButtonUnderlinedProps {
  text: string,
  onClick: () => void,
}

const ButtonUnderlined = ({ text, onClick }: ButtonUnderlinedProps): JSX.Element => (
  <Button onClick={onClick}>
    {text.toUpperCase()}
  </Button>
);

export default ButtonUnderlined;
