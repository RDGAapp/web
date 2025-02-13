import { Suspense, useContext, useLayoutEffect, type JSX } from 'react';

import { Outlet, useLocation } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import routes from 'helpers/routes';
import useDialog from 'hooks/useDialog';
import Loading from 'pages/Loading';

import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import SWNotification from './SWNotification';
import VideoBanner from './VideoBanner';

import 'react-toastify/dist/ReactToastify.css';

const Container = styled.article`
  position: relative;

  flex-grow: 1;

  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
`;

const shouldShowBanner = new Set<string>([
  routes.About,
  routes.Players,
  routes.Service,
  routes.Calendar,
  routes.Partners,
]);

const shouldShowVideo = new Set<string>([routes.Home]);

const Layout = (): JSX.Element => {
  const location = useLocation();
  const { Dialog: FeatureFlagsDialog, openModal: openFeatureFlagsModal } =
    useDialog({
      headerText: 'Feature-флаги',
    });

  const { roles, addRoles, removeRole, featureFlags, toggleFeatureFlag } =
    useContext(AppSettingsContext);

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
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <SWNotification />
      <Header />
      <Container>
        {shouldShowVideo.has(location.pathname) && <VideoBanner />}
        {shouldShowBanner.has(location.pathname) && <Banner />}
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      <FeatureFlagsDialog>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            overflow: 'hidden',
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
      <ScrollRestoration />
      <ToastContainer
        position='bottom-right'
        hideProgressBar
        closeOnClick
        theme='colored'
        newestOnTop
        stacked
        style={{ fontSize: '0.8rem' }}
      />
    </div>
  );
};

export default Layout;
