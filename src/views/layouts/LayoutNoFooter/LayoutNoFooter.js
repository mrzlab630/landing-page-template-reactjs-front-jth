import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Navbar } from './../../components';

import * as styles from './LayoutNoFooter.less';

const LayoutNoFooter = props => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar>
        <Fragment>
          {children}
        </Fragment>
      </Navbar>
    </Fragment>
  );
};

LayoutNoFooter.propTypes = {
  children: PropTypes.node,
};

export default LayoutNoFooter;
