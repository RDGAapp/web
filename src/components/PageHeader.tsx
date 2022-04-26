import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Header = styled.h1`
  margin: 3rem 0;
  font-weight: 400;
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.fontFamily.header};
  line-height: 1;
`;

const ArrowLeft = styled(ArrowSvg)`
  color: ${({ theme }) => theme.colors.text.primary};
  transform: rotate(180deg);
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface PageHeaderProps {
  text: string,
  shouldLinkToMainPage?: boolean,
}

const PageHeader = ({ text, shouldLinkToMainPage }: PageHeaderProps): JSX.Element => (
  <Container>
    {shouldLinkToMainPage && <Link to="/" title="Вернуться на главную"><ArrowLeft height={35} /></Link>}
    <Header id="page-header">{text}</Header>
  </Container>
);

PageHeader.defaultProps = {
  shouldLinkToMainPage: false,
};

export default PageHeader;
