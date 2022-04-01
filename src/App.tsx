import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from 'components/Layout';
import theme from 'helpers/theme';
import routes from 'helpers/routes';
import Home from 'pages/Home';
import Master from 'pages/Master';
import Train from 'pages/Train';
import Newbie from 'pages/Newbie';
import Pro from 'pages/Pro';
import International from 'pages/International';
import Companies from 'pages/Companies';
import Sponsorship from 'pages/Sponsorship';
import Shop from 'pages/Shop';
import Players from 'pages/Players';
import CitySelectModal from 'components/CitySelectModal';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    margin: 0;
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
