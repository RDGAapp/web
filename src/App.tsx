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

const Admin = lazy(() => import('pages/Admin'));
const AdminPlayers = lazy(() => import('pages/Admin/Players'));
const AdminPlayersCreate = lazy(() => import('pages/Admin/Players/Create'));
const AdminPlayersUpdate = lazy(() => import('pages/Admin/Players/Update'));
const AdminPlayersDelete = lazy(() => import('pages/Admin/Players/Delete'));
const AdminPlayersRenew = lazy(() => import('pages/Admin/Players/Activate'));
const AdminTournaments = lazy(() => import('pages/Admin/Tournaments'));
const AdminTournamentsCreate = lazy(
  () => import('pages/Admin/Tournaments/Create'),
);
const AdminTournamentsUpdate = lazy(
  () => import('pages/Admin/Tournaments/Update'),
);
const AdminTournamentsDelete = lazy(
  () => import('pages/Admin/Tournaments/Delete'),
);
const AdminBlog = lazy(() => import('pages/Admin/Blog'));
const AdminBlogCreate = lazy(() => import('pages/Admin/Blog/Create'));

const About = lazy(() => import('pages/About'));
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

  const { roles, addRoles, removeRole, theme: currentTheme } = useContext(AppSettingsContext);

  const isAdmin = roles.has(Role.Admin);
  const isAuthor = roles.has(Role.Author);

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
    <ThemeProvider theme={theme[currentTheme]}>
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
                    <Authorized requiredRoles={[Role.Admin, Role.Author]}>
                      <Admin />
                    </Authorized>
                  }
                />

                {/* Админка игрока */}
                <Route
                  path={routes.AdminPlayers}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminPlayers />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminPlayersCreate}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminPlayersCreate />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminPlayersUpdate}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminPlayersUpdate />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminPlayersDelete}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminPlayersDelete />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminPlayersRenew}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminPlayersRenew />
                    </Authorized>
                  }
                />

                {/* Админка турнира */}
                <Route
                  path={routes.AdminTournaments}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminTournaments />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminTournamentsCreate}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminTournamentsCreate />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminTournamentsUpdate}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminTournamentsUpdate />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminTournamentsDelete}
                  element={
                    <Authorized requiredRoles={[Role.Admin]}>
                      <AdminTournamentsDelete />
                    </Authorized>
                  }
                />

                {/* Админка блога */}
                <Route
                  path={routes.AdminBlog}
                  element={
                    <Authorized requiredRoles={[Role.Admin, Role.Author]}>
                      <AdminBlog />
                    </Authorized>
                  }
                />
                <Route
                  path={routes.AdminBlogCreate}
                  element={
                    <Authorized requiredRoles={[Role.Admin, Role.Author]}>
                      <AdminBlogCreate />
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
                <label htmlFor='isAdmin' style={{ cursor: 'pointer' }}>
                  Режим администратора
                </label>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  isAuthor ? removeRole(Role.Author) : addRoles([Role.Author])
                }
              >
                <input
                  id='isAuthor'
                  type='checkbox'
                  name='isAuthor'
                  checked={isAuthor}
                  onChange={() => {}}
                  style={{ cursor: 'pointer' }}
                />
                <label htmlFor='isAuthor' style={{ cursor: 'pointer' }}>
                  Режим автора
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
