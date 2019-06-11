import React from 'react';
import {
  Grid,
  Input,
  Button,
  Divider,
  Checkbox,
  Container,
} from 'semantic-ui-react';

import Panel from '../../components/Panel';
import PanelSubTitle from '../../components/PanelSubTitle';
import FormInput from '../../components/FormInput';

import * as styles from './InviteFreelancer.less';
import close from '../../../assets/close.svg';
import clip from '../../../assets/clip.svg';

const formInputStyle = {
  height: '70px',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const title = {
  fontFamily: 'MetropolisMedium',
  fontSize: '20px',
  lineHeight: '20px',
  color: '#EF6722'
}

const clearPadding = {
  padding: 0
}

const greyText = {
  fontFamily: 'Metropolis',
  fontSize: '14px',
  lineHeight: '14px',
  color: '#6B6C6F'
}

const orangeText = {
  color: '#EF6722'
}

const InviteFreelancerPage = () => {
  const SubTitle = () => (
    <span>Follow the steps below to hire a freelancer and start your project now</span>
  )
  const screenSize = window.innerWidth  || document.body.clientWidth;
	const isMobile = screenSize < 420
  return (
    <Panel
      title='Hire a Freelancer'
      params={<SubTitle />}
    >
      <Container>
        <Grid centered>
          <Grid.Row></Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <PanelSubTitle title='Freelancer’s email' customStyle={title} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={clearPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <FormInput
                edit={true}
                title='Email'
                value=''
                customStyle={formInputStyle}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ paddingTop: 0 }} centered>
            <Grid.Column computer={10} mobile={16}>
              <PanelSubTitle title='Describe the Job' customStyle={title} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={clearPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <FormInput
                edit={true}
                title='Give your project a title'
                value=''
                customStyle={formInputStyle}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <FormInput
                edit={true}
                title='Supply project brief'
                placeholder='Project title'
                type='textarea'
                value=''
                customStyle={formInputStyle}
              />
            </Grid.Column>
          </Grid.Row>
          <br />
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <img src={clip} style={{ width: '20px', marginRight: '10px', marginTop: '20px' }} />
              <span style={{ color: '#236ee8' }}>Attach files</span>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={clearPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <p style={{ margin: 0, marginBottom: '2px' }}>
                <img src={close} width='10' />&nbsp;&nbsp;&nbsp;
                guidelines.pdf
              </p>
              <p style={{ margin: 0, marginBottom: '2px' }}>
                <img src={close} width='10' />&nbsp;&nbsp;&nbsp;
                file_name_14-04-2019.doc
              </p>
              <p style={{ margin: 0, marginBottom: '2px' }}>
                <img src={close} width='10' />&nbsp;&nbsp;&nbsp;
                homepage_wireframe.png
              </p>
              <p style={{ margin: 0, marginBottom: '2px' }}>
                <img src={close} width='10' />&nbsp;&nbsp;&nbsp;
                test_design.fig
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ paddingTop: 0 }} centered>
            <Grid.Column computer={10} mobile={16}>
              <PanelSubTitle title='Rate and Weekly limit' customStyle={title} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={clearPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <Grid>
                <Grid.Column computer={5} mobile={8}>
                  <p>Rate</p>
                  <Input
                    fluid
                    label={{ basic: true, content: '$/hr', className: styles.inputLabel }}
                    labelPosition='right'
                  />
                </Grid.Column>
                <Grid.Column computer={5} mobile={8}>
                  <p>Weekly limit</p>
                  <Input
                    fluid
                    label={{ basic: true, content: 'hrs/week', className: styles.inputLabel }}
                    labelPosition='right'
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16} verticalAlign={isMobile ? 'top' : 'middle'}>
                  <p style={isMobile ? { display: 'none' } : { visibility: 'hidden' }}>test</p>
                  <span>= <span style={orangeText}>$457.5</span> max / week</span>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ paddingBottom: 0 }} centered>
            <Grid.Column computer={10} mobile={16}>
              <p>Manually time</p>
              <Checkbox label='Allow freelancer to log time manually if needed' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ paddingTop: 0 }} centered>
            <Grid.Column computer={10} mobile={16}>
              <Button
                  color='orange'
                  style={{ fontWeight: 400 }}
                  className={styles.fieldText}
              >Send an offer</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
      </Container>
    </Panel>
  )
}

export default InviteFreelancerPage;
