import React from 'react';
import {
  Grid,
  Form,
  Button,
  Image,
  Divider,
  Dropdown
} from 'semantic-ui-react';

import Panel from './../../components/Panel';
import PanelSubTitle from './../../components/PanelSubTitle';
import visa from './../../../assets/visa.svg';
import paypal from './../../../assets/paypal.svg';
import * as styles from './Billing.less';

const flexCenter = {
  display: 'flex',
  alignItems: 'center'
};
const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 10
};
const buttonStyle = {
  margin: 0,
  fontWeight: 400
}

const Billing = () => {
  return (
    <Panel
      title='Billing Methods'
      params={() => (
        <Button
          color='orange'
          style={buttonStyle}
          className={styles.fieldText}
        >Add method</Button>
      )}
    >
      <Grid centered>
        <Grid.Column
          computer={8}
          mobile={16}
          textAlign='left'
          verticalAlign='middle'
        >
          <Form>
            <PanelSubTitle title='Primary method' />
            <Form.Field style={rowStyle}>
              <div style={flexCenter}>
                <Image src={visa} />
                <span>&nbsp;Visa</span>
              </div>
              <div className={styles.textWrapper}>
                <label className={styles.fieldText}>
                  •••• •••• •••• 2079
                </label>
              </div>
              <Dropdown text='•••' icon={null} direction='left'>
                <Dropdown.Menu>
                  <Dropdown.Item text='Set as primary' />
                  <Dropdown.Item text='Remove' />
                </Dropdown.Menu>
              </Dropdown>
            </Form.Field>
            <Divider />
            <PanelSubTitle title='Additional method' />
            <Form.Field style={rowStyle}>
              <div style={flexCenter}>
                <Image src={paypal} />
                <span>&nbsp;Paypal</span>
              </div>
              <div className={styles.textWrapper}>
                <label className={styles.fieldText}>
                  example@example.com
                </label>
              </div>
              <Dropdown text='•••' icon={null}>
                <Dropdown.Menu>
                  <Dropdown.Item text='Set as primary' />
                  <Dropdown.Item text='Remove' />
                </Dropdown.Menu>
              </Dropdown>
            </Form.Field>
            <br />
          </Form>
        </Grid.Column>
      </Grid>
    </Panel>
  )
}

export default Billing;
