import type { JSX } from 'react';

import styled from 'styled-components';

const TextDiv = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5rem;

  & * {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

interface TextProps {
  children: string | JSX.Element | Array<string | JSX.Element>;
  id?: string;
}

const Text = ({ children, id }: TextProps): JSX.Element => (
  <TextDiv id={id}>{children}</TextDiv>
);

export default Text;
