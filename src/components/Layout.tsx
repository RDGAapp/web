import { useHistory } from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Menu from 'components/Menu';
import routes from 'helpers/routes';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element,
  openCitySelect: () => void,
}

const shouldNotShowMenuSet = new Set<string>([
  routes.SHOP,
  routes.COMPANIES,
  routes.SPONSORSHIP,
]);

const Layout = ({ children, openCitySelect }: LayoutProps): JSX.Element => {
  const history = useHistory();

  return (
    <>
      <Header openCitySelect={openCitySelect} />
      <Banner />
      {!shouldNotShowMenuSet.has(history.location.pathname) && <Menu />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
