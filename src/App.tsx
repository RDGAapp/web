import { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AdminPanel from 'components/Dialogs/AdminPanel';
import TownSelectModal from 'components/Dialogs/TownSelect';
import Layout from 'components/Layout';
import GlobalStyle from 'helpers/GlobalStyle';
import routes from 'helpers/routes';
import theme from 'helpers/theme';
import { TownProvider } from 'hooks/TownContext';
import useDialog from 'hooks/useDialog';
import About from 'pages/About';
import Calendar from 'pages/Calendar';
import Home from 'pages/Home';
import International from 'pages/International';
import Master from 'pages/Master';
import Newbie from 'pages/Newbie';
import NotFound from 'pages/NotFound';
import Players from 'pages/Players';
import Pro from 'pages/Pro';
import Service from 'pages/Service';
import Train from 'pages/Train';

const App = (): JSX.Element => {
  const [isAdminAccessible, setIsAdminAccessible] = useState<boolean>(false);

  const {
    Dialog: TownDialog,
    openModal: openTownModal,
    closeModal: closeTownModal,
  } = useDialog();
  const {
    Dialog: AdminDialog,
    openModal: openAdminModal,
    closeModal: closeAdminModal,
  } = useDialog(() => setIsAdminAccessible(false));

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.key === '`' || event.key === '~') &&
        event.altKey &&
        event.ctrlKey &&
        event.metaKey &&
        event.shiftKey
      ) {
        setIsAdminAccessible(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [setIsAdminAccessible]);

  useEffect(() => {
    if (!isAdminAccessible) return;

    openAdminModal();
  }, [isAdminAccessible, openAdminModal]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <TownProvider>
          <Layout openTownSelect={openTownModal}>
            <Routes>
              <Route path={routes.HOME} element={<Home />} />
              <Route
                path={routes.MASTER}
                element={<Master openTownSelect={openTownModal} />}
              />
              <Route path={routes.TRAINING} element={<Train />} />
              <Route
                path={routes.NEWBIE}
                element={<Newbie openTownSelect={openTownModal} />}
              />
              <Route
                path={routes.PRO}
                element={<Pro openTownSelect={openTownModal} />}
              />
              <Route path={routes.INTERNATIONAL} element={<International />} />
              <Route path={routes.SERVICE} element={<Service />} />
              <Route path={routes.ABOUT} element={<About />} />
              <Route path={routes.CALENDAR} element={<Calendar />} />
              <Route path={routes.PLAYERS} element={<Players />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <TownDialog>
              <TownSelectModal onClose={closeTownModal} />
            </TownDialog>
            {isAdminAccessible && (
              <AdminDialog>
                <AdminPanel onClose={closeAdminModal} />
              </AdminDialog>
            )}
          </Layout>
        </TownProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
