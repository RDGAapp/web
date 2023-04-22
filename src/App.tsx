import { lazy, Suspense, useLayoutEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AdminPanelSections from 'components/Dialogs/AdminPanelSections';
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
  const { Dialog: AdminDialog, openModal: openAdminModal } = useDialog({
    headerText: 'Админ консоль',
  });

  useLayoutEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.key === '`' || event.key === '~') &&
        event.altKey &&
        event.ctrlKey &&
        event.metaKey &&
        event.shiftKey
      ) {
        openAdminModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [openAdminModal]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <TownProvider>
          <Layout>
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
            </Suspense>
            <AdminDialog>
              <AdminPanelSections />
            </AdminDialog>
          </Layout>
        </TownProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
