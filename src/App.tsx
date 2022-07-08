import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import TownSelectModal from 'components/TownSelectModal';
import GlobalStyle from 'helpers/GlobalStyle';
import routes from 'helpers/routes';
import theme from 'helpers/theme';
import { TownProvider } from 'hooks/TownContext';
import About from 'pages/About';
import Companies from 'pages/Companies';
import Home from 'pages/Home';
import International from 'pages/International';
import Master from 'pages/Master';
import Newbie from 'pages/Newbie';
import Players from 'pages/Players';
import Pro from 'pages/Pro';
import Shop from 'pages/Shop';
import Train from 'pages/Train';

import useDialog from './hooks/useDialog';

const App = (): JSX.Element => {
  const { Dialog, openModal, closeModal } = useDialog();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <TownProvider>
          <Layout openTownSelect={openModal}>
            <Routes>
              <Route path={routes.HOME} element={<Home />} />
              <Route
                path={routes.MASTER}
                element={<Master openTownSelect={openModal} />}
              />
              <Route path={routes.TRAINING} element={<Train />} />
              <Route
                path={routes.NEWBIE}
                element={<Newbie openTownSelect={openModal} />}
              />
              <Route
                path={routes.PRO}
                element={<Pro openTownSelect={openModal} />}
              />
              <Route path={routes.INTERNATIONAL} element={<International />} />
              <Route path={routes.SHOP} element={<Shop />} />
              <Route path={routes.COMPANIES} element={<Companies />} />
              <Route path={routes.ABOUT} element={<About />} />
              <Route path={routes.PLAYERS} element={<Players />} />
            </Routes>
            <Dialog>
              <TownSelectModal onClose={closeModal} />
            </Dialog>
          </Layout>
        </TownProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
