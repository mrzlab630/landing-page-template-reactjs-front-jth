import PropTypes from 'prop-types';
import React from 'react';
import {
    Segment,
    Container
} from 'semantic-ui-react';

import Breadcrumbs from '../Breadcrumbs';

import * as styles from './Panel.less';

const Panel = ({ breadcrumbs = null, customStyles, title, params, ...props}) => (
    <div className={styles.panelWrapper} style={customStyles}>
        <Container>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            <Segment.Group raised>
                {title.length != 0 && (
                    <Segment className={styles.panelHeader}>
                        <label className={styles.panelHeaderText}>{title}</label>
                        {params ? params : null}
                    </Segment>
                )}
                <Segment className={styles.panelBody}>
                    {props.children}
                </Segment>
            </Segment.Group>
        </Container>
    </div>
);


Panel.propTypes = {
    title: PropTypes.string,
    params: PropTypes.node,
    children: PropTypes.node,
    breadcrumbs: PropTypes.string,
    customStyles: PropTypes.object
};

export default Panel;
