import styled from 'styled-components';

const TextDiv = styled.div`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  margin: 0;
`;

interface TextProps {
  children: string | JSX.Element | Array<string | JSX.Element>,
}

const Text = ({ children }: TextProps): JSX.Element => (
  <TextDiv>{children}</TextDiv>
);

export default Text;
