import React from 'react';
import PropTypes from 'prop-types';
import { 
  Grid, 
  Form, 
  Divider, 
  Dropdown 
} from 'semantic-ui-react';
import { 
  Panel, 
  Sprite, 
  Button, 
  PanelSubTitle 
} from './../../components';
import * as styles from './Billing.less';

const BillingCard = ({ title, value, icon }) => (
  <Form.Field className={styles.billingInfoWrapper}>
    <div className={styles.billingInfo}>
      <Sprite name={icon} />
      <span className={styles.billingMethod}>{title}</span>
    </div>
    <div>
      <label>{value}</label>
    </div>
    <Dropdown text='•••' direction='left' icon={null}>
      <Dropdown.Menu>
        <Dropdown.Item text='Set as primary' />
        <Dropdown.Item text='Remove' />
      </Dropdown.Menu>
    </Dropdown>
  </Form.Field>
);

BillingCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string
}

const Billing = () => {
  return (
    <Panel
      title='Billing Methods'
      params={<Button color='orange' text='Add method' />}
    >
      <div className={styles.billingWrapper}>
        <Grid centered>
          <Grid.Column
            computer={8}
            mobile={16}
            textAlign='left'
            verticalAlign='middle'
          >
            <Form>
              <PanelSubTitle title='Primary method' />
              <BillingCard
                title='Visa'
                value='•••• •••• •••• 2079'
                icon='visa'
              />
              <Divider />
              <PanelSubTitle title='Additional method' />
              <BillingCard
                title='Paypal'
                value='example@example.com'
                icon='paypal'
              />
              <br />
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </Panel>
  );
};

export default Billing;
