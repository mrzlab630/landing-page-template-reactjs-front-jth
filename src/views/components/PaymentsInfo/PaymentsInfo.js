import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import * as styles from './PaymentsInfo.less';

const PaymentsInfo = () => (
    <Grid.Row>
        <Grid.Column computer={4} mobile={16} className={styles.billingField} style={{ paddingBottom: 0 }}>
            <label className={styles.billingLabel}>your balance</label>
            <label className={styles.billingValue}>$2420.00</label>
        </Grid.Column>
        <Grid.Column computer={4} mobile={16} className={styles.billingField}>
            <label className={styles.billingLabel}>Last paid: Apr 12</label>
            <label className={styles.billingValue}>$2000.00</label>
        </Grid.Column>
        <Grid.Column computer={4} mobile={16} className={styles.billingField}>
            <label className={styles.billingLabel}>Bonus</label>
            <label className={styles.billingValue}>$0.00</label>
        </Grid.Column>
        <Grid.Column computer={2} mobile={8}>
            <Button color='orange' className={styles.paymentButton}>Pay now</Button>
        </Grid.Column>
        <Grid.Column computer={2} mobile={8}>
            <Button color='orange' className={styles.paymentButton}>Withdraw</Button>
        </Grid.Column>
    </Grid.Row>
);

export default PaymentsInfo;
