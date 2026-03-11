import { Fragment } from 'react';

import { Link, useLocation } from 'react-router-dom';

import routes, { routeNames } from 'helpers/routes';

import styles from './styles.module.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbsParts = location.pathname.split('/');

  return (
    <div className={styles.container}>
      {breadcrumbsParts.slice(0, -1).map((value, index) => {
        const route = breadcrumbsParts.slice(0, index + 1).join('/') || '/';
        return (
          <Fragment key={value}>
            {index > 0 && ' > '}
            <Link to={route}>{routeNames[route as routes]}</Link>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
