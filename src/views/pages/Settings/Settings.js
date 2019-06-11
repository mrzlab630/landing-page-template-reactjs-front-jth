import React, { useState, Fragment } from 'react';
import {
  Grid,
  Form,
  Button,
  Divider
} from 'semantic-ui-react';

import {
  EditIcon,
  Panel,
  FormInput,
  PanelSubTitle
} from './../../components';

import * as styles from './Settings.less';

const rowStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const columnStyle = {
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const SettingsPage = () => {
  const [state, setState] = useState({
    fields: {
      owner: 'Liora Eustache',
      email: 'example@example.com',
      phone: '+1-541-754-3010',
      country: 'United States',
      address: '7600 Wild Rose Circle, Hempstead, NY 11550',
      lastName: 'Roman',
      firstName: 'Theotimus',
      oldPassword: '123456',
      newPassword: '1234567',
      confirmPassword: '1234567'
    }
  });
  const [editUser, setUserStatus] = useState(true);
  const [editInvoice, setInvoiceStatus] = useState(true);
  const [editPassword, setPasswordStatus] = useState(true);

  const toggleEdit = (field) => {
    switch (field) {
      case 'user':
        setUserStatus(!editUser);
        break;
      case 'password':
        setPasswordStatus(!editPassword);
        break;
      case 'invoice':
        setInvoiceStatus(!editInvoice);
        break;
    }
  }

  const cancelEdit = () => {
    setUserStatus(false);
    setPasswordStatus(false);
    setInvoiceStatus(false);
  }

  const save = () => {
    cancelEdit();
  }

  const cancel = () => {
    cancelEdit();
  }

  const fieldUserStyle = editUser ? columnStyle : rowStyle;
  const fieldInvoiceStyle = editInvoice ? columnStyle : rowStyle;
  const fieldPasswordStyle = editPassword ? columnStyle : rowStyle;
  return (
    <Panel title='Account'>
      <Grid centered>
        <Grid.Column
          mobile={16}
          computer={8}
          textAlign='left'
          verticalAlign='middle'
        >
          <Form>
            <Form.Field className={styles.fieldHeaderWrapper}>
              <PanelSubTitle title='User Info' />
              {!editUser && 
                <div onClick={() => toggleEdit('user')}>
                  <EditIcon />
                </div>
              }
            </Form.Field>
            <FormInput
              edit={editUser}
              title='First Name'
              style={fieldUserStyle}
              value={state.fields.firstName}
            />
            <FormInput
              edit={editUser}
              title='Last Name'
              style={fieldUserStyle}
              value={state.fields.lastName}
            />
            <FormInput
              edit={editUser}
              title='E-mail'
              style={fieldUserStyle}
              value={state.fields.email}
            />
            <Divider />
            <Form.Field className={styles.fieldHeaderWrapper}>
              <PanelSubTitle title='Security Info' />
              {!editPassword && 
                <div onClick={() => toggleEdit('password')}>
                  <EditIcon />
                </div>
              }
            </Form.Field>
            <FormInput
              edit={editPassword}
              title={editPassword ? 'Old password' : 'Password'}
              style={fieldPasswordStyle}
              value={state.fields.newPassword}
            />
            {editPassword && (
              <Fragment>
                <FormInput
                  edit={editPassword}
                  title='New password'
                  style={fieldPasswordStyle}
                  value={state.fields.newPassword}
                />
                <FormInput
                  edit={editPassword}
                  title='Confirm password'
                  style={fieldPasswordStyle}
                  value={state.fields.confirmPassword}
                />
              </Fragment>
            )}
            <Divider />
            <Form.Field className={styles.fieldHeaderWrapper}>
              <PanelSubTitle title='Invoice address' />
              {!editInvoice && 
                <div onClick={() => toggleEdit('invoice')}>
                  <EditIcon />
                </div>
              }
            </Form.Field>
            <FormInput
              edit={editInvoice}
              title='Owner'
              style={fieldInvoiceStyle}
              value={state.fields.owner}
            />
            <FormInput
              edit={editInvoice}
              title='Phone'
              style={fieldInvoiceStyle}
              value={state.fields.phone}
            />
            <FormInput
              edit={editInvoice}
              title='Country'
              style={fieldInvoiceStyle}
              value={state.fields.country}
            />
            <FormInput
              edit={editInvoice}
              title='Invoice address'
              style={fieldInvoiceStyle}
              value={state.fields.address}
            />
            <br />
            {(editUser || editInvoice || editPassword) && (
              <Form.Field>
                <Button
                  color='orange'
                  onClick={() => save()}
                  style={{ fontWeight: 400 }}
                  className={styles.fieldText}
                >Save changes</Button>&nbsp;
                <Button
                  color='orange'
                  onClick={() => cancel()}
                  style={{ fontWeight: 400 }}
                  className={styles.orangeButton}
                >Cancel</Button>
              </Form.Field>
            )}
          </Form>
        </Grid.Column>
      </Grid>
    </Panel>
  )
}

export default SettingsPage;
