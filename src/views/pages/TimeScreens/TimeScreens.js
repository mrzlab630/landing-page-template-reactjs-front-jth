import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid,
  Divider,
  Progress
} from 'semantic-ui-react';
import Panel from './../../components/Panel';
import Dot from './../../components/Dot';
import screentime from './../../../assets/screentime.svg';
import emptytime from './../../../assets/emptytime.svg';
import manualtime from './../../../assets/manualtime.svg';
import * as styles from './TimeScreens.less';
// import Datepicker from '../../components/Datepicker/Datepicker';

const boldText = {
  fontWeight: 600,
  paddingRight: 0
}

const HourActivityCell = ({ time, percent, type }) => {
  let screenshot;
  switch (type) {
    case 'screen':
      screenshot = screentime;
      break;
    case 'manual':
      screenshot = manualtime;
      break;
    case 'empty':
      screenshot = emptytime;
      break;
  }
  return (
    <Grid>
      <Grid.Column computer={16}>
        <img src={screenshot} style={{ width: '100%' }} />
      </Grid.Column>
      <Grid.Column computer={8} style={{ paddingTop: 0, paddingRight: 0 }} verticalAlign='middle'>
        <span>{time}</span>
      </Grid.Column>
      <Grid.Column computer={8} style={{ paddingTop: 0 }} verticalAlign='middle'>
        <Progress
          size='tiny'
          color='green'
          percent={percent}
          className={styles.hourProgress}
        />
      </Grid.Column>
    </Grid>
  )
}

HourActivityCell.propTypes = {
  type: PropTypes.string,
  time: PropTypes.string,
  percent: PropTypes.number
}

const HourActivityRow = () => (
  <Grid>
    <Grid.Column mobile={12} computer={16} verticalAlign='middle'>
      <Grid>
        <Grid.Column computer={1} mobile={0}></Grid.Column>
        <Grid.Column computer={9} mobile={9}>
          <Progress percent={100} color='orange' size='small' style={{ margin: 0 }} />
        </Grid.Column>
        <Grid.Column computer={6} mobile={5}>
          <Progress percent={100} color='yellow' size='small' style={{ margin: 0 }} />
        </Grid.Column>
      </Grid>
    </Grid.Column>
    <Grid.Column mobile={4} computer={1} textAlign='left' verticalAlign='middle' style={boldText}>
      <span>10 AM</span>
    </Grid.Column>
    <Grid.Column mobile={16} computer={15}>
      <Grid columns='equal'>
        <Grid.Column className={styles.cellStyleWrapper}>
          <HourActivityCell time='10:00 AM' percent={80} type='screen' />
        </Grid.Column>
        <Grid.Column className={styles.cellStyleWrapper}>
          <HourActivityCell time='10:00 AM' percent={80} type='screen' />
        </Grid.Column>
        <Grid.Column className={styles.cellStyleWrapper}>
          <HourActivityCell time='10:00 AM' percent={80} type='screen' />
        </Grid.Column>
        <Grid.Column className={styles.cellStyleWrapper}>
          <HourActivityCell time='10:00 AM' percent={80} type='manual' />
        </Grid.Column>
        <Grid.Column className={styles.cellStyleWrapper}>
          <HourActivityCell time='10:00 AM' percent={80} type='manual' />
        </Grid.Column>
        <Grid.Column className={styles.cellStyleWrapper}>
          <HourActivityCell time='10:00 AM' percent={80} type='empty' />
        </Grid.Column>
      </Grid>
    </Grid.Column>
  </Grid>
)

const TimeScreens = () => (
  <Panel
    title='Activity'
    breadcrumbs='Reports'
  >
    <Grid>
      <Grid.Column mobile={12} computer={2} textAlign='left' verticalAlign='middle'>
        Total: <span style={boldText}>14:30</span>
      </Grid.Column>
      <Grid.Column mobile={12} computer={3} textAlign='left' verticalAlign='middle'>
        <Dot color='orange' />Auto-tracked: <span style={boldText}>14:30</span>
      </Grid.Column>
      <Grid.Column mobile={12} computer={3} textAlign='left' verticalAlign='middle'>
        <Dot color='yellow' />Manual time: <span style={boldText}>14:30</span>
      </Grid.Column>
    </Grid>
    <Divider />
    <HourActivityRow />
    <Divider />
    <HourActivityRow />
    <Divider />
    <HourActivityRow />
  </Panel>
)

export default TimeScreens;
