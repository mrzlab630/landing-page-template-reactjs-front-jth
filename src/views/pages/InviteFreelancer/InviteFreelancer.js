import React, { Fragment } from 'react';
import {
  Grid,
  Input,
  Divider,
  Checkbox,
  Container,
} from 'semantic-ui-react';
import { 
  Text,
  Panel,
  Sprite,
  Button,
  Paragraph,
  FormInput,
  PanelSubTitle
} from '../../components/';
import * as styles from './InviteFreelancer.less';

const formInputStyle = {
  height: '70px',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

const titleStyle = {
  fontFamily: 'MetropolisMedium',
  fontSize: '20px',
  lineHeight: '20px',
  color: '#EF6722'
}

const closeIconStyle = {
  width: '10px',
  marginRight: '15px'
}

const clipIconStyle = {
  width: '20px',
  marginRight: '10px', 
  marginTop: '20px'
}

const attachments = [ 'guidelines.pdf','file_name_14-04-2019.doc','homepage_wireframe.png','test_design.fig' ];

const InviteFreelancerPage = () => {
  const screenSize = window.innerWidth  || document.body.clientWidth;
	const isMobile = screenSize < 420
  return (
    <Panel
      title='Hire a Freelancer'
      params={
        <Fragment>
          <Text>Follow the steps below to hire a freelancer and start your project now</Text>
        </Fragment>
      }
    >
      <Container>
        <Grid centered>
          <Grid.Row></Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <PanelSubTitle title='Freelancer’s email' customStyle={titleStyle} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <FormInput
                edit={true}
                title='Email'
                customStyle={formInputStyle}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPT} centered>
            <Grid.Column computer={10} mobile={16}>
              <PanelSubTitle title='Describe the Job' customStyle={titleStyle} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <FormInput
                edit={true}
                title='Give your project a title'
                customStyle={formInputStyle}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <FormInput
                edit={true}
                type='textarea'
                title='Supply project brief'
                placeholder='Project title'
                customStyle={formInputStyle}
              />
            </Grid.Column>
          </Grid.Row>
          <br />
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Sprite name='clip' customStyle={clipIconStyle} />
              <Text color='#236ee8'>Attach files</Text>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              {attachments.map((attachment, key) => (
                <p key={key} className={styles.attachmentRow}>
                  <Sprite name='close' customStyle={closeIconStyle} />
                  {attachment}
                </p>
              ))}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPT} centered>
            <Grid.Column computer={10} mobile={16}>
              <PanelSubTitle title='Rate and Weekly limit' customStyle={titleStyle} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPadding} centered>
            <Grid.Column computer={10} mobile={16}>
              <Grid>
                <Grid.Column computer={5} mobile={8}>
                  <Paragraph>Rate</Paragraph>
                  <Input
                    fluid
                    labelPosition='right'
                    label={{ basic: true, content: '$/hr', className: styles.inputLabel }}
                  />
                </Grid.Column>
                <Grid.Column computer={5} mobile={8}>
                  <Paragraph>Weekly limit</Paragraph>
                  <Input
                    fluid
                    labelPosition='right'
                    label={{ basic: true, content: 'hrs/week', className: styles.inputLabel }}
                  />
                </Grid.Column>
                <Grid.Column computer={4} mobile={16} verticalAlign={isMobile ? 'top' : 'middle'}>
                  <div className={styles[isMobile ?  'fieldNotDisplayed' : 'fieldHidden']} />
                  <span>= <Text color='#EF6722'>$457.5</Text> max / week</span>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPB} centered>
            <Grid.Column computer={10} mobile={16}>
              <Paragraph>Manually time</Paragraph>
              <Checkbox label='Allow freelancer to log time manually if needed' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={10} mobile={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className={styles.noPT} centered>
            <Grid.Column computer={10} mobile={16}>
              <Button color='orange' text='Send an offer' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
      </Container>
    </Panel>
  )
}

export default InviteFreelancerPage;
