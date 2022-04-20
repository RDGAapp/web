import { useLocation } from 'react-router';
import styled from 'styled-components';

import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Menu from 'components/Menu';
import SWNotification from 'components/SWNotification';
import routes from 'helpers/routes';

const Container = styled.div`
  max-width: 72rem;
  margin: auto;
  padding: 0 1rem;
`;
interface LayoutProps {
  children: JSX.Element[] | JSX.Element,
  openCitySelect: () => void,
}

const shouldNotShowMenuSet = new Set<string>([
  routes.SHOP,
  routes.COMPANIES,
  routes.SPONSORSHIP,
  routes.PLAYERS,
]);

const Layout = ({ children, openCitySelect }: LayoutProps): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <SWNotification />
      <Container>
        <Header openCitySelect={openCitySelect} />
        <Banner />
        {!shouldNotShowMenuSet.has(location.pathname) && <Menu />}
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
