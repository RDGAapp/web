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
const AdminBlogUpdate = lazy(() => import('pages/Admin/Blog/Update'));
const AdminBlogDelete = lazy(() => import('pages/Admin/Blog/Delete'));

const About = lazy(() => import('pages/About'));
const Calendar = lazy(() => import('pages/Calendar'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));
const Players = lazy(() => import('pages/Players'));
const Player = lazy(() => import('pages/Player'));
const Service = lazy(() => import('pages/Service'));
const Contacts = lazy(() => import('pages/Contacts'));
const Partners = lazy(() => import('pages/Partners'));
const Blog = lazy(() => import('pages/Blog'));
const BlogPost = lazy(() => import('pages/BlogPost'));

const App = (): JSX.Element => {
  const { Dialog: FeatureFlagsDialog, openModal: openFeatureFlagsModal } =
    useDialog({
      headerText: 'Feature-флаги',
    });

  const {
    roles,
    addRoles,
    removeRole,
    theme: currentTheme,
    featureFlags,
    toggleFeatureFlag,
  } = useContext(AppSettingsContext);

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
        openFeatureFlagsModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [openFeatureFlagsModal]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={routes.Home} element={<Home />} />
              <Route path={routes.Service} element={<Service />} />
              <Route path={routes.About} element={<About />} />
              <Route path={routes.Calendar} element={<Calendar />} />
              <Route path={routes.Players} element={<Players />} />
              <Route
                path={`${routes.Players}/:rdgaNumber`}
                element={<Player />}
              />
              <Route path={routes.Contacts} element={<Contacts />} />
              <Route path={routes.Partners} element={<Partners />} />
              <Route path={routes.Blog} element={<Blog />} />
              <Route path={`${routes.Blog}/:postCode`} element={<BlogPost />} />

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
              <Route
                path={routes.AdminBlogUpdate}
                element={
                  <Authorized requiredRoles={[Role.Admin, Role.Author]}>
                    <AdminBlogUpdate />
                  </Authorized>
                }
              />
              <Route
                path={routes.AdminBlogDelete}
                element={
                  <Authorized requiredRoles={[Role.Admin, Role.Author]}>
                    <AdminBlogDelete />
                  </Authorized>
                }
              />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
          <FeatureFlagsDialog>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <input
                  id='isAdmin'
                  type='checkbox'
                  name='isAdmin'
                  checked={isAdmin}
                  onChange={() =>
                    isAdmin ? removeRole(Role.Admin) : addRoles([Role.Admin])
                  }
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
              >
                <input
                  id='isAuthor'
                  type='checkbox'
                  name='isAuthor'
                  checked={isAuthor}
                  onChange={() =>
                    isAuthor ? removeRole(Role.Author) : addRoles([Role.Author])
                  }
                  style={{ cursor: 'pointer' }}
                />
                <label htmlFor='isAuthor' style={{ cursor: 'pointer' }}>
                  Режим автора
                </label>
              </div>
              {Object.keys(featureFlags).map((key) => (
                <div
                  key={key}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    id={key}
                    type='checkbox'
                    name={key}
                    checked={featureFlags[key as keyof typeof featureFlags]}
                    onChange={() =>
                      toggleFeatureFlag(key as keyof typeof featureFlags)
                    }
                    style={{ cursor: 'pointer' }}
                  />
                  <label htmlFor={key} style={{ cursor: 'pointer' }}>
                    {key}
                  </label>
                </div>
              ))}
            </div>
          </FeatureFlagsDialog>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
