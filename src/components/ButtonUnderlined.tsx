import styled from 'styled-components';

const Button = styled.button`
  font-weight: 500;
  font-size: 12px;
  font-family: Inter, sans-serif;
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
