import styled from 'styled-components';

import type { JSX } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  margin: 1.5rem 0;

  ${({ theme }) => theme.media.mobile} {
    justify-content: center;
  }
`;

const Header = styled.h1`
  font-family: '${({ theme }) => theme.fontFamily.header}', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1;
`;

interface PageHeaderProps {
  text: string;
  children?: JSX.Element | JSX.Element[];
}

const PageHeader = ({ text, children }: PageHeaderProps): JSX.Element => (
  <Container>
    <Header id='page-header'>{text}</Header>
    {children}
  </Container>
);

export default PageHeader;
