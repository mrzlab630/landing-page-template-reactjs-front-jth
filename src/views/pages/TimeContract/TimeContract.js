import React, { Fragment } from 'react';
import {
    Grid,
    Menu,
    Icon,
    Divider 
} from 'semantic-ui-react';
import {
  DoublePanel,
  UserAvatar,
  Paragraph,
  Sprite,
  Button,
  Text
} from '../../components';
import InvoicesTable from './../../components/InvoicesTable/InvoicesTable';
import avatar from './../../../assets/userAvatar3.svg';
import * as styles from './TimeContract.less';

const customButtonStyle = {
  background: '#F9EDE7',
  borderRadius: '4px',
  color: '#EF6722',
  fontWeight: 300,
  width: '220px',
  height: '45px',
};

const tableButtonStyle = {
  fontWeight: 600,
  color: '#EF6722',
  background: '#F5F6F7'
};

const noMarginStyle = { margin: 0 };

const timeCells = ['6:20', '3:30', '4:25', '6:00', '2:20', '3:12', '0:12'];
const timeFrames = [
  {
    title: 'This week',
    label: '24:20 hrs',
    value: 'Of 40hr limit',
  },
  {
    title: 'Last week',
    label: '19:40 hrs',
    value: '$292.50 Paid',
  },
  {
    title: 'Since start',
    label: '44:00 hrs',
    value: '$660.00',
  },
];

const TimeContractPage = () => {
  const screenSize = window.innerWidth || document.body.clientWidth;
  const isMobile = screenSize < 420;
  const leftSideContent = () => (
    <Fragment>
      <div className={styles.leftSideHeader}>
        <label className={styles.leftSideText}>
          Developer needed for Real Estate Website with IDX integration
        </label>
        <Sprite name='horizontaldots' />
      </div>
      <Menu pointing secondary style={{ marginLeft: '1.5em' }}>
        <Menu.Item name='Time & Payments' active={true} />
        <Menu.Item name='Terms & Settings' active={false} />
      </Menu>
      <div className={styles.leftSideBody}>
        <Grid>
          <Grid.Row>
            {timeFrames.map((timeFrame, key) => (
              <Grid.Column
                key={key}
                computer={4}
                mobile={16}
                className={styles.billingField}
                style={{ paddingBottom: 0 }}
              >
                <p className={styles.billingTitle}>{timeFrame.title}</p>
                <p className={styles.billingLabel}>{timeFrame.label}</p>
                <p className={styles.billingValue}>{timeFrame.value}</p>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <Divider />
        <Grid.Row>
          <Grid.Column width={12}>
            <div className={styles.totalHours}>
              <Text fontSize='16px' color='#000'>
                Timesheet this week
              </Text>
              <Text fontSize='16px' color='#000'>
                Amount: $364.75
              </Text>
            </div>
          </Grid.Column>
        </Grid.Row>
        <br />
        <Grid.Row>
          <Grid columns={!isMobile ? 'equal' : '4'}>
            {timeCells.map((timeCell, key) => (
              <Grid.Column key={key} textAlign='center'>
                <Button customStyle={tableButtonStyle} text={timeCell} />
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid>
            <Grid.Column mobile={16} computer={8} verticalAlign='middle'>
              <Text fontSize='16px' color='#000'>
                All timesheets and earnings
              </Text>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              computer={8}
              verticalAlign='middle'
              textAlign={isMobile ? 'left' : 'right'}
            >
              <Text fontSize='16px' color='#404144'>
                Last 30 days: $292.50&nbsp;
                <Icon name='calendar outline' disabled />
              </Text>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <InvoicesTable />
      </div>
    </Fragment>
  );
  const rightSideContent = () => (
    <Fragment>
      <UserAvatar
        badge='green'
        src={avatar}
        customStyle={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15px',
        }}
      />
      <Paragraph customStyle={noMarginStyle}>
        <Text>Harriett Ambrus</Text>
      </Paragraph>
      <Paragraph customStyle={noMarginStyle}>
        <Text color='#A7A8AA'>United Kingdom, 4:27 PM</Text>
      </Paragraph>
      <Paragraph customStyle={noMarginStyle}>
        <Text color='#A7A8AA'>Start date: </Text>
        <Text color='#404144'>Apr 8, 2019</Text>
      </Paragraph>
      <Paragraph customStyle={noMarginStyle}>
        <Text color='#A7A8AA'>Contract status: </Text>
        <Text color='#EF6722'>Active</Text>
      </Paragraph>
      <Grid.Row>
        <Grid.Column width={16}>
          <Button text='Pay' customStyle={customButtonStyle} />
        </Grid.Column>
      </Grid.Row>
      <br />
      <Grid.Row>
        <Grid.Column width={16}>
          <Button text='Pause' customStyle={customButtonStyle} />
        </Grid.Column>
      </Grid.Row>
      <br />
      <Grid.Row>
        <Grid.Column width={16}>
          <Button text='End contract' customStyle={customButtonStyle} />
        </Grid.Column>
      </Grid.Row>
    </Fragment>
  );
  return (
    <DoublePanel
      breadcrumbs='Dashboard'
      leftSide={leftSideContent()}
      rightSide={rightSideContent()}
    />
  );
};

export default TimeContractPage;
