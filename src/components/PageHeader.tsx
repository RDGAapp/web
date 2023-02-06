import styled from 'styled-components';

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
  font-weight: 400;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
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
