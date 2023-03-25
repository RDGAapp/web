import { ReactNode } from 'react';

import { useLocation } from 'react-router';
import styled from 'styled-components';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SWNotification from 'components/SWNotification';
import VideoBanner from 'components/VideoBanner';
import routes from 'helpers/routes';

const Container = styled.article`
  max-width: 72rem;
  margin: auto;
  padding: 1rem 1rem 2rem;
`;
interface LayoutProps {
  children: ReactNode;
}

const shouldShowBanner = new Set<string>([
  routes.About,
  routes.Master,
  routes.Training,
  routes.Newbie,
  routes.Pro,
  routes.International,
  routes.Players,
  routes.Service,
  routes.Calendar,
]);

const shouldShowVideo = new Set<string>([routes.Home]);

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <SWNotification />
      <Header />
      <Container>
        {shouldShowVideo.has(location.pathname) && <VideoBanner />}
        {shouldShowBanner.has(location.pathname) && <Banner />}
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
