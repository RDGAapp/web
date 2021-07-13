import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

interface ButtonUnderlinedProps {
  text: string,
}

const ButtonUnderlined = ({ text }: ButtonUnderlinedProps): JSX.Element => (
  <Button>
    {text.toUpperCase()}
  </Button>
);

export default ButtonUnderlined;
