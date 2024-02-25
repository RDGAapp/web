import { Navigate, Outlet } from 'react-router-dom';

import LogoLoader from 'components/LogoLoader';
import routes from 'helpers/routes';
import { useAppSelector } from 'store/hooks';

const Personal = () => {
  const { loading, user } = useAppSelector((state) => state.user);

  if (loading) return <LogoLoader />;

  if (!user) return <Navigate to={routes.Home} />;

  return <Outlet />;
};

export default Personal;
