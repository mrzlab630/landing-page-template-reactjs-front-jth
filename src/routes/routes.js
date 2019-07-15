import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from './../utils/authToken';

import { LayoutNavigation, LayoutNoFooter } from './../views/layouts';

import {
  HomePage,
} from './../views/pages';

const routes = [
  {
    exact: true,
    path: '/',
    page: HomePage,
    layout: LayoutNavigation,
  },
    /*
  {
    path: '',
    // eslint-disable-next-line react/display-name
    page: SettingsPage,
    layout: LayoutNoFooter,
  },
  */
];

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={`${process.env.PUBLIC_URL}${route.path}`}
      render={props =>
        !route.isPrivate ||
        (route.isPrivate && auth.isAuthenticated('jwtToken', 'jwtUser')) ? (
          <route.layout>
            <route.page {...props} routes={route.routes} />
          </route.layout>
        ) : (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/login`,
              // eslint-disable-next-line react/prop-types
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

RouteWithSubRoutes.propTypes = {
  route: PropTypes.arrayOf(PropTypes.object),
};

export { routes, RouteWithSubRoutes };
