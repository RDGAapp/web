import { lazy, useContext } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import GlobalStyle from 'helpers/GlobalStyle';
import routes from 'helpers/routes';
import theme from 'helpers/theme';

// Admin pages
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

// common pages
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

// Wrappers
const Authorized = lazy(() => import('components/Authorized'));
const Personal = lazy(() => import('components/Personal'));

// Personal user roots
const MyProfile = lazy(() => import('pages/MyProfile'));

const App = (): JSX.Element => {
  const { theme: currentTheme } = useContext(AppSettingsContext);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: routes.Home, element: <Home /> },
        { path: routes.Service, element: <Service /> },
        { path: routes.About, element: <About /> },
        { path: routes.Calendar, element: <Calendar /> },
        { path: routes.Players, element: <Players /> },
        { path: `${routes.Players}/:rdgaNumber`, element: <Player /> },
        { path: routes.Contacts, element: <Contacts /> },
        { path: routes.Partners, element: <Partners /> },
        { path: routes.Blog, element: <Blog /> },
        { path: `${routes.Blog}/:postCode`, element: <BlogPost /> },
        {
          element: <Personal />,
          children: [{ path: routes.MyProfile, element: <MyProfile /> }],
        },
        {
          element: <Authorized requiredRoles={[Role.Admin, Role.Author]} />,
          children: [
            { path: routes.AdminHome, element: <Admin /> },
            {
              element: <Authorized requiredRoles={[Role.Admin]} />,
              children: [
                /* Админка игрока */
                { path: routes.AdminPlayers, element: <AdminPlayers /> },
                {
                  path: routes.AdminPlayersCreate,
                  element: <AdminPlayersCreate />,
                },
                {
                  path: routes.AdminPlayersUpdate,
                  element: <AdminPlayersUpdate />,
                },
                {
                  path: routes.AdminPlayersDelete,
                  element: <AdminPlayersDelete />,
                },
                {
                  path: routes.AdminPlayersRenew,
                  element: <AdminPlayersRenew />,
                },

                /* Админка турнира */
                {
                  path: routes.AdminTournaments,
                  element: <AdminTournaments />,
                },
                {
                  path: routes.AdminTournamentsCreate,
                  element: <AdminTournamentsCreate />,
                },
                {
                  path: routes.AdminTournamentsUpdate,
                  element: <AdminTournamentsUpdate />,
                },
                {
                  path: routes.AdminTournamentsDelete,
                  element: <AdminTournamentsDelete />,
                },
              ],
            },

            /* Админка блога */
            { path: routes.AdminBlog, element: <AdminBlog /> },
            { path: routes.AdminBlogCreate, element: <AdminBlogCreate /> },
            { path: routes.AdminBlogUpdate, element: <AdminBlogUpdate /> },
            { path: routes.AdminBlogDelete, element: <AdminBlogDelete /> },
          ],
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
