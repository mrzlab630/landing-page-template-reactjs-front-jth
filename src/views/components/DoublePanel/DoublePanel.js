import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Segment,
    Container
} from 'semantic-ui-react';
import Breadcrumbs from '../Breadcrumbs';
import styles from './DoublePanel.less';

const DoublePanel  = ({ leftSide, rightSide, breadcrumbs }) => (
    <div className={styles.panelWrapper}>
        <Container>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Segment>
                <Grid>
                    <Grid.Column
                        mobile={16}
                        computer={11}
                        verticalAlign='middle'
                        className={styles.panelLeftSideWrapper}
                    >
                        {leftSide}
                    </Grid.Column>
                    <Grid.Column
                        mobile={16}
                        computer={5}
                        textAlign='center'
                        verticalAlign='top'
                        className={styles.panelRightSideWrapper}
                    >
                        <div className={styles.panelSide}>
                            {rightSide}
                        </div>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    </div>
);

DoublePanel.propTypes = {
    leftSide: PropTypes.node,
    rightSide: PropTypes.node,
    breadcrumbs: PropTypes.string
};

export default DoublePanel;