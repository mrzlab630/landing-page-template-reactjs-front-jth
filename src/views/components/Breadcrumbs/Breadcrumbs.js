import PropTypes from 'prop-types';
import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

import arrowLeft from '../../../assets/arrowLeft.svg';
import * as styles from './Breadcrumbs.less';

const Breadcrumbs = ({ breadcrumbs = null }) => (
    <Breadcrumb style={{ marginBottom: '10px' }}>
        <Breadcrumb.Section className={styles.breadcrumb}>
            <img src={arrowLeft} style={{ marginRight: '10px' }} />
            {breadcrumbs}
        </Breadcrumb.Section>
    </Breadcrumb>
);


Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.string
};

export default Breadcrumbs;
