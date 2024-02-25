import { useContext } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import routes from 'helpers/routes';

interface IAuthorized {
  requiredRoles: Role[];
}

const Authorized = ({ requiredRoles }: IAuthorized) => {
  const { roles } = useContext(AppSettingsContext);

  if (!requiredRoles.some((role) => roles.has(role)))
    return <Navigate to={routes.Home} />;

  return <Outlet />;
};

export default Authorized;
