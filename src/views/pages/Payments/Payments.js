import React from 'react';
import {
  Grid,
  Divider,
  Dropdown
} from 'semantic-ui-react';
import { Panel } from './../../components';
import * as styles from './Payments.less';
import PanelSubTitle from '../../components/PanelSubTitle/PanelSubTitle';
import InvoicesTable from '../../components/InvoicesTable/InvoicesTable';
import PaymentsInfo from '../../components/PaymentsInfo/PaymentsInfo';

const Payments = () => {
  return (
    <Panel title='Payments' breadcrumbs='Reports'>
      <Grid>
        <PanelSubTitle title='Billing' />
        <PaymentsInfo />
        <Divider />
        <Grid.Row className={styles.fieldHeaderWrapper}>
          <Grid.Column computer={16} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <PanelSubTitle title='Invoices' />
            <Dropdown text='Last 30 days' style={{ fontSize: '14px', color: '#F2711C' }}>
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
  )
}

export default Payments;
