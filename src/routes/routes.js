import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth } from './../utils/authToken';

import { LayoutNavigation, LayoutNoFooter } from './../views/layouts';

import {
  ToDoPage,
  ToDoTaskPage,
  BillingPage,
  SettingsPage,
  PaymentsPage,
  ContractPage,
  ProjectsPage,
  MessangerPage,
  ProjectsAllPage,
  TimeScreensPage,
  TimeSummaryPage,
  TimeContractPage,
  PendingContractPage,
  InviteFreelancerPage
} from './../views/pages';

const routes = [
  {
    exact: true,
    path: '/',
    page: SettingsPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/settings',
    page: SettingsPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/billing',
    page: BillingPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/payments',
    page: PaymentsPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/activity',
    page: TimeScreensPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/summary',
    page: TimeSummaryPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/contract/pending',
    page: PendingContractPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/contract',
    page: ContractPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/contract/time',
    page: TimeContractPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/invite',
    page: InviteFreelancerPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/projects',
    page: ProjectsPage,
    layout: LayoutNavigation,
  },
  {
    exact: true,
    path: '/projects/all',
    page: ProjectsAllPage,
    layout: LayoutNavigation
  },
  {
    exact: true,
    path: '/todo',
    page: ToDoPage,
    layout: LayoutNavigation
  },
  {
    exact: true,
    path: '/todo/task',
    page: ToDoTaskPage,
    layout: LayoutNavigation
  },
  {
    exact: true,
    path: '/messanger',
    page: MessangerPage,
    layout: LayoutNavigation
  },
  {
    path: '',
    // eslint-disable-next-line react/display-name
    page: SettingsPage,
    layout: LayoutNoFooter,
  },
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
