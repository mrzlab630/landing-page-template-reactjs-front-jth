import './styling/semantic.less';

import React, { Fragment } from 'react';
import { Router, Switch } from 'react-router-dom';

import { routes, RouteWithSubRoutes } from './routes/routes';
import history from './utils/history';
import ScrollToTop from './utils/ScrollToTop';

const App = () => (
  <Fragment>
    <Router basename={'/'} history={history}>
      <ScrollToTop>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </ScrollToTop>
    </Router>
  </Fragment>
);

export default App;
