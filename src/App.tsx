import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import CitySelectModal from 'components/CitySelectModal';
import Companies from 'pages/Companies';
import Home from 'pages/Home';
import International from 'pages/International';
import Layout from 'components/Layout';
import Master from 'pages/Master';
import Newbie from 'pages/Newbie';
import Players from 'pages/Players';
import Pro from 'pages/Pro';
import Shop from 'pages/Shop';
import Sponsorship from 'pages/Sponsorship';
import Train from 'pages/Train';
import routes from 'helpers/routes';
import theme from 'helpers/theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    margin: 0;
    font-size: 20px;
    font-family: Inter, sans-serif;
  }

  svg {
    flex-shrink: 0;
  }
`;

const App = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <base target="_blank" />
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
