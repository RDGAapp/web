import { useLocation } from 'react-router';
import styled from 'styled-components';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import SWNotification from 'components/SWNotification';
import routes from 'helpers/routes';

const Container = styled.article`
  max-width: 72rem;
  margin: auto;
  padding: 0 1rem;
`;
interface LayoutProps {
  children: JSX.Element[] | JSX.Element,
  openTownSelect: () => void,
}

const shouldShowMenuSet = new Set<string>([
  routes.HOME,
  routes.MASTER,
  routes.TRAINING,
  routes.NEWBIE,
  routes.PRO,
  routes.INTERNATIONAL,
]);

const Layout = ({ children, openTownSelect }: LayoutProps): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <SWNotification />
      <Container>
        <Header openTownSelect={openTownSelect} />
        <Banner />
        {shouldShowMenuSet.has(location.pathname) && <Menu />}
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
