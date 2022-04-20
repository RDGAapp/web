import styled from 'styled-components';

const Header = styled.h1`
  margin: 3rem 0;
  font-weight: 400;
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
`;

interface PageHeaderProps {
  text: string,
}

const PageHeader = ({ text }: PageHeaderProps): JSX.Element => (
  <Header id="page-header">{text}</Header>
);

export default PageHeader;
