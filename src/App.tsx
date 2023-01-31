import { lazy, Suspense, useEffect, useState } from 'react';

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
import Loading from 'pages/Loading';

const About = lazy(() => import('pages/About'));
const Calendar = lazy(() => import('pages/Calendar'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Players = lazy(() => import('pages/Players'));
const Service = lazy(() => import('pages/Service'));
const ContactsPage = lazy(() => import('pages/Contacts'));

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
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path={routes.Home} element={<Home />} />
                <Route path={routes.Service} element={<Service />} />
                <Route path={routes.About} element={<About />} />
                <Route path={routes.Calendar} element={<Calendar />} />
                <Route path={routes.Players} element={<Players />} />
                <Route path={routes.Contacts} element={<ContactsPage />} />
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
            </Suspense>
          </Layout>
        </TownProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
