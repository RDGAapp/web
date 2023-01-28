import { ReactNode } from 'react';

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
  padding: 1rem 1rem 0;
`;
interface LayoutProps {
  children: ReactNode;
  openTownSelect: () => void;
}

const shouldShowBanner = new Set<string>([
  routes.HOME,
  routes.ABOUT,
  routes.MASTER,
  routes.TRAINING,
  routes.NEWBIE,
  routes.PRO,
  routes.INTERNATIONAL,
  routes.PLAYERS,
  routes.SERVICE,
]);

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
      <Header openTownSelect={openTownSelect} />
      <Container>
        {shouldShowBanner.has(location.pathname) && <Banner />}
        {shouldShowMenuSet.has(location.pathname) && <Menu />}
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
