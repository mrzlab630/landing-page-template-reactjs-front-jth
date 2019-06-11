import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Navbar, Footer } from './../../components';

import * as styles from './LayoutNoNavigation.less';

const LayoutNoNavigation = props => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar  minimal={false}>
        {children}
      </Navbar>
      <Footer minimal />
    </Fragment>
  );
};

LayoutNoNavigation.propTypes = {
  children: PropTypes.node,
};

export default LayoutNoNavigation;
