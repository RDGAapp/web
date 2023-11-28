import { lazy, Suspense, useContext, useLayoutEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Authorized from 'components/Authorized';
import Layout from 'components/Layout';
import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import GlobalStyle from 'helpers/GlobalStyle';
import routes from 'helpers/routes';
import theme from 'helpers/theme';
import { TownProvider } from 'hooks/TownContext';
import useDialog from 'hooks/useDialog';
import Loading from 'pages/Loading';

const About = lazy(() => import('pages/About'));
const Admin = lazy(() => import('pages/Admin'));
const AdminPlayers = lazy(() => import('pages/Admin/Players'));
const AdminTournaments = lazy(() => import('pages/Admin/Tournaments'));
const Calendar = lazy(() => import('pages/Calendar'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Players = lazy(() => import('pages/Players'));
const Service = lazy(() => import('pages/Service'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const PartnersPage = lazy(() => import('pages/Partners'));

const App = (): JSX.Element => {
  const { Dialog: AdminDialog, openModal: openAdminModal } = useDialog({
    headerText: 'Feature-флаги',
  });

  const { roles, addRoles, removeRole } = useContext(AppSettingsContext);
  const isAdmin = roles.includes(Role.Admin);

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
                <Route path={routes.Partners} element={<PartnersPage />} />
                <Route
                  path={routes.AdminHome}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <Admin />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminPlayers}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminPlayers />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminTournaments}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminTournaments />
                    </Authorized>
                  }
                />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
            <AdminDialog>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  isAdmin ? removeRole(Role.Admin) : addRoles([Role.Admin])
                }
              >
                <input
                  id='isAdmin'
                  type='checkbox'
                  name='isAdmin'
                  checked={isAdmin}
                  onChange={() => {}}
                  style={{ cursor: 'pointer' }}
                />
                <label
                  htmlFor='isAdmin'
                  style={{ cursor: 'pointer' }}
                >
                  Режим администратора
                </label>
              </div>
            </AdminDialog>
          </Layout>
        </TownProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
