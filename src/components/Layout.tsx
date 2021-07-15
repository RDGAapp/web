import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Menu from 'components/Menu';

interface LayoutProps {
  children: JSX.Element,
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <Banner />
    <Menu />
    {children}
    <Footer />
  </>
);

export default Layout;
