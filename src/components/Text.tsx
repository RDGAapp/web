import styled from 'styled-components';

const TextDiv = styled.div`
  width: 100%;
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  font-family: Inter, sans-serif;
  line-height: 29px;
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
