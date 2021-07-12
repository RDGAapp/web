import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 1px solid black;
  border-radius: 40px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 16px;
`;

interface ButtonOutdatedProps {
  text: string,
}

const ButtonOutlined = ({ text }: ButtonOutdatedProps): JSX.Element => (
  <Button>
    {text.toUpperCase()}
  </Button>
);

export default ButtonOutlined;
