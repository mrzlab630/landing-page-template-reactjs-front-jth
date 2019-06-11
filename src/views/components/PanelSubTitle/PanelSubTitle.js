import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from 'semantic-ui-react';

import * as styles from './PanelSubTitle.less';

const PanelSubTitle = ({ title, params = null, customStyle = {}}) => (
    <Grid.Row>
        <Grid.Column width={12}>
            <div className={styles.panelSubTitleWrapper}>
                <span className={styles.panelSubTitle} style={customStyle}>{title}</span>
                {params ? <div>{params}</div>: null}
            </div>
        </Grid.Column>
    </Grid.Row>
);


PanelSubTitle.propTypes = {
    params: PropTypes.any,
    title: PropTypes.string,
    children: PropTypes.node
};

export default PanelSubTitle;
