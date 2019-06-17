import React from 'react';
import Masonry from 'react-masonry-css';
import {
    Grid,
    Icon,
    Button,
    Comment,
    Container
} from 'semantic-ui-react';
import { 
    Dot,
    Text,
    Panel,
    Paragraph 
} from './../../components';
import * as styles from './Projects.less';

import userAvatar2 from '../../../assets/userAvatar2.svg';

const panelStyle = {
  minHeight: 'initial',
  padding: 0,
};

const smallTextStyle = {
  fontSize: '13px',
  lineHeight: '12px',
  color: '#A7A8AA',
};

const mediumTextStyle = {
  fontSize: '14px',
  lineHeight: '14px',
  textAlign: 'center',
};

const largeTextStyle = {
  fontSize: '16px',
  lineHeight: '16px',
};

const Projects = () => {
  const screenSize = window.innerWidth || document.body.clientWidth;
  const isMobile = screenSize < 420;
  const ProjectsPanel = () => (
    <Panel
      title='Projects'
      customStyles={panelStyle}
      params={<Button text='New Project' color='orange' />}
    >
      <Grid.Row>
        <div className={styles.flexBetween}>
          <div>
            <Dot color='violetOutline' />
            <Text color='#404144' customStyles={largeTextStyle}>
              Business Management
            </Text>
          </div>
          <Text color='#898A8C' customStyles={mediumTextStyle}>
            3 tasks
          </Text>
          <Icon name='ellipsis vertical' className={styles.greyColor} />
        </div>
      </Grid.Row>
    </Panel>
  );
  const ContractsPanel = () => (
    <Panel
      title='Contracts'
      customStyles={panelStyle}
      params={<Button text='New Contract' color='orange' />}
    >
      <Comment.Group>
        <Comment>
            <Comment.Avatar src={userAvatar2} />
                <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Comment.Author as='a' style={{ fontSize: '14px', lineHeight: '14px', color: '#404144', fontFamily: 'Metropolis' }}>
                            Nolan Pramod
                        </Comment.Author>
                        <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                            United Kingdom, 7:30 PM
                        </Comment.Text>
                        <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                            Status: <span style={orangeText}>Active</span>
                        </Comment.Text>
                    </div>
                    <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                        <Comment.Action style={{ textAlign: 'right' }}>
                            <img src={messageIcon} height='14'/>&nbsp;
                            <img src={ellipsesIcon} />
                        </Comment.Action>
                        <Comment.Action style={{ marginTop: '17px' }}>
                            <Dot color='violetOutline' />
                                {!isMobile && <span style={{ fontSize: '13px' }}>Business Management</span>}
                        </Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        <Divider />
      </Comment.Group>
    </Panel>
  );
  const ActivitiesPanel = () => (
    <Panel title='Activities' customStyles={panelStyle}>
      <Paragraph color='#898A8C' customStyles={mediumTextStyle}>
        There's no activity yet
      </Paragraph>
    </Panel>
  );
  const PendingsPanel = () => (
    <Panel title='Pending Contracts' customStyles={panelStyle}>
      <Paragraph>
        Experienced website designer/ developer needed to build website from
        ground up and manage SEO.
      </Paragraph>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src={userAvatar2} />
          <Comment.Content className={styles.flexBetween}>
            <div>
              <Comment.Author as='a' style={mediumTextStyle}>
                Martin Adriel
              </Comment.Author>
              <Comment.Text style={smallTextStyle}>
                7:30 PM in San Francisco
              </Comment.Text>
            </div>
            <Comment.Actions className={styles.flexColumn}>
              <Comment.Action>27m ago</Comment.Action>
              <Comment.Action className={styles.orangeColor}>
                View offer
              </Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Panel>
  );
  return (
    <div className={styles.projectsWrapper}>
      <Container>
        <Masonry
          className={styles.masonryGrid}
          breakpointCols={isMobile ? 1 : 2}
          columnClassName={styles.masonryColumn}
        >
          {ProjectsPanel()}
          {ContractsPanel()}
          {ActivitiesPanel()}
          {PendingsPanel()}
        </Masonry>
      </Container>
    </div>
  );
};

export default Projects;







































import React from 'react';
import {
    Grid,
    Icon,
    Radio,
    Button,
    Divider,
    Comment,
    Container
} from 'semantic-ui-react';
import { Panel, Dot, TimeLine, UserAvatar } from '../../components';
import * as styles from './ProjectsAll.less';

import Masonry from 'react-masonry-css'

import userAvatar1 from '../../../assets/userAvatar1.svg';
import userAvatar2 from '../../../assets/userAvatar2.svg';
import userAvatar4 from '../../../assets/userAvatar4.svg';
import messageIcon from '../../../assets/messages.svg';
import ellipsesIcon from '../../../assets/ellipses.svg';

const buttonStyle = {
    margin: 0,
    fontWeight: 400
}

const panelStyle = {
    minHeight: 'initial',
    padding: 0
}

const greyText = {
    color: '#898A8C'
}

const blackText = {
    color: '#404144'
}

const orangeText = {
    color: '#EF6722'
}

const yellowText = {
    color: '#FC9E30'
}

// fontFamily: 'MetropolisMedium',
// fontSize: '14px',
// lineHeight: '14px',
// textAlign: 'center'

const ProjectsAll = () => {
    const OrangeButton = ({ text }) => {
        return (
            <Button
                color='orange'
                style={buttonStyle}
                className={styles.fieldText}
            >{text}</Button>
        )
    }
    const screenSize = window.innerWidth  || document.body.clientWidth;
	const isMobile = screenSize < 420
    return (
        <div style={{ minHeight: '75vh', padding: '60px 0' }}>
            <Container>
                <Masonry
                    breakpointCols={isMobile ? 1 : 2}
                    className={styles.masonryGrid}
                    columnClassName={styles.masonryColumn}>
                        <Panel
                            title='Projects'
                            customStyles={panelStyle}
                            params={<OrangeButton text='New Project' />}
                        >
                            <Grid.Row>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Dot color='violetOutline' />
                                        <span style={blackText}>Management</span>
                                    </div>
                                    <span style={greyText}>3 tasks</span>
                                    <Icon name='ellipsis vertical' style={{ color: '#C5C6C7' }} />
                                </div>
                            </Grid.Row>
                            <Divider />
                            <Grid.Row>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Dot color='yellowOutline' />
                                        <span style={blackText}>Development</span>
                                    </div>
                                    <span style={greyText}>17 tasks</span>
                                    <Icon name='ellipsis vertical' style={{ color: '#C5C6C7' }} />
                                </div>
                            </Grid.Row>
                            <Divider />
                            <Grid.Row>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <Dot color='blueOutline' />
                                        <span style={blackText}>Mobile Design</span>
                                    </div>
                                    <span style={greyText}>10 tasks</span>
                                    <Icon name='ellipsis vertical' style={{ color: '#C5C6C7' }} />
                                </div>
                            </Grid.Row>
                            <br /><br />
                        </Panel>
                        <Panel
                            title='Contracts'
                            customStyles={panelStyle}
                            params={<OrangeButton text='New Contract' />}
                        >
                            <Comment.Group>
                                <Comment>
                                    <Comment.Avatar src={userAvatar2} />
                                    <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Comment.Author
                                                as='a'
                                                style={{ fontSize: '14px', lineHeight: '14px', color: '#404144', fontFamily: 'Metropolis' }}
                                            >
                                                Nolan Pramod
                                            </Comment.Author>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                United Kingdom, 7:30 PM
                                            </Comment.Text>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                Status: <span style={orangeText}>Active</span>
                                            </Comment.Text>
                                        </div>
                                        <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Comment.Action style={{ textAlign: 'right' }}>
                                                <img src={messageIcon} height='14'/>&nbsp;
                                                <img src={ellipsesIcon} />
                                            </Comment.Action>
                                            <Comment.Action style={{ marginTop: '17px' }}>
                                                <Dot color='violetOutline' />
                                                {!isMobile && <span style={{ fontSize: '13px' }}>Business Management</span>}
                                            </Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Divider />
                                <Comment>
                                    <Comment.Avatar src={userAvatar1} />
                                    <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Comment.Author
                                                as='a'
                                                style={{ fontSize: '14px', lineHeight: '14px', color: '#404144', fontFamily: 'Metropolis' }}
                                            >
                                                Elene Priyanka
                                            </Comment.Author>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                United Kingdom, 7:30 PM
                                            </Comment.Text>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                Status: <span style={yellowText}>Paused</span>
                                            </Comment.Text>
                                        </div>
                                        <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Comment.Action style={{ textAlign: 'right' }}>
                                                <img src={messageIcon} height='14' />&nbsp;
                                                <img src={ellipsesIcon} />
                                            </Comment.Action>
                                            <Comment.Action style={{ marginTop: '17px' }}>
                                                <Dot color='yellowOutline' />
                                                {!isMobile && <span style={{ fontSize: '13px' }}>Development</span>}
                                            </Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                                <Divider />
                                <Comment>
                                    <Comment.Avatar src={userAvatar4} />
                                    <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Comment.Author
                                                as='a'
                                                style={{ fontSize: '14px', lineHeight: '14px', color: '#404144', fontFamily: 'Metropolis' }}
                                            >
                                                Nolan Pramod
                                            </Comment.Author>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                United Kingdom, 7:30 PM
                                            </Comment.Text>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                Status: <span style={greyText}>Ended</span>
                                            </Comment.Text>
                                        </div>
                                        <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Comment.Action style={{ textAlign: 'right' }}>
                                                <img src={messageIcon} height='14' />&nbsp;
                                                <img src={ellipsesIcon} />
                                            </Comment.Action>
                                            <Comment.Action style={{ marginTop: '17px' }}>
                                                <Dot color='blueOutline' />
                                                {!isMobile && <span style={{ fontSize: '13px' }}>Mobile Design</span>}
                                            </Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Panel>
                        <Panel
                            title='Activities'
                            params={<span style={orangeText}>View All</span>}
                            customStyles={panelStyle}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <Radio
                                        label='New'
                                        name='radioGroup'
                                        value='this'
                                    />
                                    &nbsp;&nbsp;&nbsp;
                                        <Radio
                                        label='Readed'
                                        name='radioGroup'
                                        value='that'
                                    />
                                </div>
                                <span style={orangeText}>Mark as read</span>
                            </div>
                            <Grid.Row>
                                <Divider />
                            </Grid.Row>
                            <TimeLine />
                        </Panel>
                        <Panel
                            title='Pending Contracts'
                            customStyles={panelStyle}
                        >
                            <p>Experienced website designer/ developer needed to build website from ground up and manage SEO.</p>
                            <Comment.Group>
                                <Comment>
                                    <Comment.Avatar src={userAvatar1} />
                                    <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Comment.Author
                                                as='a'
                                                style={{
                                                    fontSize: '14px',
                                                    lineHeight: '14px',
                                                    color: '#404144',
                                                    fontFamily: 'Metropolis'
                                                }}
                                            >
                                                Martin Adriel
                                            </Comment.Author>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                7:30 PM in San Francisco
                                            </Comment.Text>
                                        </div>
                                        <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Comment.Action>27m ago</Comment.Action>
                                            <Comment.Action style={{ color: '#EF6722', paddingTop: '10px', margin: 0 }}>View offer</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                            <Divider />
                            <p>Experienced website designer/ developer needed to build website from ground up and manage SEO.</p>
                            <Comment.Group>
                                <Comment>
                                    <Comment.Avatar src={userAvatar2} />
                                    <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Comment.Author
                                                as='a'
                                                style={{
                                                    fontSize: '14px',
                                                    lineHeight: '14px',
                                                    color: '#404144',
                                                    fontFamily: 'Metropolis'
                                                }}
                                            >
                                                Harriett Ambrus
                                            </Comment.Author>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                7:30 PM in San Francisco
                                            </Comment.Text>
                                        </div>
                                        <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                                            <Comment.Action>27m ago</Comment.Action>
                                            <Comment.Action style={{ color: '#EF6722', paddingTop: '10px', margin: 0 }}>View offer</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Panel>
                    </Masonry>
            </Container>
        </div>
    )
}

export default ProjectsAll;
