import styled from 'styled-components';

const TextDiv = styled.div`
  width: 100%;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  margin: 0;
`;

interface TextProps {
  children: string | JSX.Element | Array<string | JSX.Element>,
  id?: string
}

const Text = ({ children, id }: TextProps): JSX.Element => (
  <TextDiv id={id}>{children}</TextDiv>
);

Text.defaultProps = {
  id: '',
};

export default Text;
