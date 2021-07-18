import styled from 'styled-components';

const Header = styled.h1`
  font-family: Oswald, sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  margin: 60px;

  ${({ theme }) => theme.breakpoints.mobile} {
    margin: 60px 24px;
  }
`;

interface PageHeaderProps {
  text: string,
}

const PageHeader = ({ text }: PageHeaderProps): JSX.Element => (
  <Header>{text}</Header>
);

export default PageHeader;
