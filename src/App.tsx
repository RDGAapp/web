import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CitySelectModal from 'components/CitySelectModal';
import Layout from 'components/Layout';
import GlobalStyle from 'helpers/GlobalStyle';
import routes from 'helpers/routes';
import theme from 'helpers/theme';
import Companies from 'pages/Companies';
import Home from 'pages/Home';
import International from 'pages/International';
import Master from 'pages/Master';
import Newbie from 'pages/Newbie';
import Players from 'pages/Players';
import Pro from 'pages/Pro';
import Shop from 'pages/Shop';
import Sponsorship from 'pages/Sponsorship';
import Train from 'pages/Train';

const App = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout openCitySelect={() => setOpen(true)}>
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.ABOUT} element={<Home />} />
            <Route
              path={routes.MASTER}
              element={<Master openCitySelect={() => setOpen(true)} />}
            />
            <Route path={routes.TRAINING} element={<Train />} />
            <Route
              path={routes.NEWBIE}
              element={<Newbie openCitySelect={() => setOpen(true)} />}
            />
            <Route
              path={routes.PRO}
              element={<Pro openCitySelect={() => setOpen(true)} />}
            />
            <Route path={routes.INTERNATIONAL} element={<International />} />
            <Route path={routes.SHOP} element={<Shop />} />
            <Route path={routes.COMPANIES} element={<Companies />} />
            <Route path={routes.SPONSORSHIP} element={<Sponsorship />} />
            <Route path={routes.PLAYERS} element={<Players />} />
          </Routes>
          <CitySelectModal isOpen={open} onClose={() => setOpen(false)} />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
