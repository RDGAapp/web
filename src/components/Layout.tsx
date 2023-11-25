import { ReactNode, useLayoutEffect } from 'react';

import { useLocation } from 'react-router';
import styled from 'styled-components';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SWNotification from 'components/SWNotification';
import VideoBanner from 'components/VideoBanner';
import routes from 'helpers/routes';

const Container = styled.article`
  flex-grow: 1;
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
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
  routes.Partners,
]);

const shouldShowVideo = new Set<string>([routes.Home]);

let scrollToTimeout: null | NodeJS.Timeout = null;

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const tryToScrollToElement = () => {
        const elementId = location.hash.replaceAll('#', '');

        if (elementId) {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView();
            return;
          }
        }

        scrollToTimeout = setTimeout(tryToScrollToElement, 500);
      };

      tryToScrollToElement();
    }

    window.scrollTo({ top: 0 });

    return () => {
      if (scrollToTimeout) clearTimeout(scrollToTimeout);
    };
  }, [location.pathname]);

  return (
    <div
      style={{ minHeight: '100vmin', display: 'flex', flexDirection: 'column' }}
    >
      <SWNotification />
      <Header />
      <Container>
        {shouldShowVideo.has(location.pathname) && <VideoBanner />}
        {shouldShowBanner.has(location.pathname) && <Banner />}
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
