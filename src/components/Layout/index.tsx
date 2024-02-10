import { ReactNode, useLayoutEffect } from 'react';

import { useLocation } from 'react-router';
import styled from 'styled-components';

import routes from 'helpers/routes';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import SWNotification from './SWNotification';
import VideoBanner from './VideoBanner';

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
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}
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
