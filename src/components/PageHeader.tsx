import styled from 'styled-components';

const Header = styled.h1`
  margin: 60px;
  font-weight: 400;
  font-size: 48px;
  font-family: Oswald, sans-serif;
  line-height: 48px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 60px 24px;
  }
`;

interface PageHeaderProps {
  text: string,
}

const PageHeader = ({ text }: PageHeaderProps): JSX.Element => (
  <Header id="page-header">{text}</Header>
);

export default PageHeader;
