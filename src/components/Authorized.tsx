import { ReactElement, useContext } from 'react';

import { Navigate } from 'react-router-dom';

import { AppSettingsContext } from 'context/AppSettings';
import Role from 'enums/roles';
import routes from 'helpers/routes';

interface IAuthorized {
  children: ReactElement;
  requiredRoles: Role[];
}

const Authorized = ({ children, requiredRoles }: IAuthorized) => {
  const { roles } = useContext(AppSettingsContext);

  if (!requiredRoles.some((role) => roles.includes(role)))
    return <Navigate to={routes.Home} />;

  return children;
};

export default Authorized;
