import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as ArrowSvg } from 'assets/icons/arrow.svg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
`;

const Core = styled.div`
  display: flex;
  gap: 1rem;
`;

const Header = styled.h1`
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
  children?: JSX.Element | JSX.Element[],
}

const PageHeader = ({
  text,
  shouldLinkToMainPage = false,
  children,
}: PageHeaderProps): JSX.Element => (
  <Container>
    <Core>
      {shouldLinkToMainPage && <Link to="/" title="Вернуться на главную"><ArrowLeft width={35} /></Link>}
      <Header id="page-header">{text}</Header>
    </Core>
    {children}
  </Container>
);

export default PageHeader;
