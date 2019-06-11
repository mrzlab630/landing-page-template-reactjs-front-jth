import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Navbar, Footer } from './../../components';

import * as styles from './LayoutNavigation.less';

const LayoutNavigation = props => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar minimal={false}>
        {children}
        <Footer />
      </Navbar>
    </Fragment>
  );
};

LayoutNavigation.propTypes = {
  children: PropTypes.node,
};

export default LayoutNavigation;
