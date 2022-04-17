import { useLocation } from 'react-router';
import styled from 'styled-components';
import SWNotification from 'components/SWNotification';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Menu from 'components/Menu';
import routes from 'helpers/routes';

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
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
      <Wrapper>
        <Header openCitySelect={openCitySelect} />
        <Banner />
        {!shouldNotShowMenuSet.has(location.pathname) && <Menu />}
        {children}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
