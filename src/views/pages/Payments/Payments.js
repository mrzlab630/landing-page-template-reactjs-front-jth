import React from 'react';
import { 
  Grid,
  Divider, 
  Dropdown 
} from 'semantic-ui-react';
import {
  Panel,
  PaymentsInfo,
  PanelSubTitle,
  InvoicesTable,
} from './../../components';
import * as styles from './Payments.less';

const dropDownStyle = { fontSize: '14px', color: '#F2711C' };

const Payments = () => (
  <Panel title='Payments' breadcrumbs='Reports'>
    <Grid>
      <PanelSubTitle title='Billing' />
      <PaymentsInfo />
      <Divider />
      <Grid.Row className={styles.fieldHeaderWrapper}>
        <Grid.Column className={styles.fieldHeader} computer={16}>
          <PanelSubTitle title='Invoices' />
          <Dropdown text='Last 30 days' style={dropDownStyle}>
            <Dropdown.Menu>
              <Dropdown.Item>Last 60 days</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={16}>
          <InvoicesTable />
        </Grid.Column>
      </Grid.Row>
      <br />
    </Grid>
  </Panel>
);

export default Payments;
