import React, { Fragment } from 'react';
import Masonry from 'react-masonry-css';
import {
    Grid,
    Icon,
    Radio,
    Divider,
    Comment,
    Container
} from 'semantic-ui-react';
import { 
    Dot,
    Text,
    Panel,
    Button,
    Sprite,
    TimeLine,
    Paragraph 
} from './../../components';
import * as styles from './ProjectsAll.less';

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

const projectsList = [
    {
        avatar: userAvatar2,
        author: 'Nolan Pramod',
        info: 'United Kingdom, 7:30 PM',
        status: 'Active',
        type: 'Business Management',
        tasks: '24 tasks'
    },
    {
        avatar: userAvatar2,
        author: 'Elene Priyanka',
        info: 'United Kingdom, 7:30 PM',
        status: 'Paused',
        type: 'Development',
        tasks: '17 tasks'
    },
    {
        avatar: userAvatar2,
        author: 'Nolan Pramod',
        info: 'United Kingdom, 7:30 PM',
        status: 'Ended',
        type: 'Mobile Design',
        tasks: '10 tasks'
    }
];

const contractsList = [
    {
        avatar: userAvatar2,
        author: 'Martin Adriel',
        info: '7:30 PM in San Francisco',
        timestamp: '27m ago',
        description: 'Experienced website designer/ developer needed to build website from ground up and manage SEO.'
    },
    {
        avatar: userAvatar2,
        author: 'Harriett Ambrus',
        info: '2:32 PM in London',
        timestamp: '1d ago',
        description: 'Developer needed for Real Estate Website with IDX integration.'
    }
];

const Projects = () => {
  const screenSize = window.innerWidth || document.body.clientWidth;
  const isMobile = screenSize < 420;

  const getColorByProjectType = (type, code = false) => {
      let color = '';
      switch (type) {
          case 'Business Management':
              color = !code ? 'violetOutline' : '#EF6722';
              break;
          case 'Development':
              color = !code ? 'yellowOutline' : '#FC9E30';
              break;
          case 'Mobile Design':
              color = !code ? 'blueOutline' : '#898A8C';
              break;
          default:
              break;
      }
      return color;
  };
  const ContractItemInfo = (contract, index) => (
    <Comment key={index}>
        <Comment.Avatar src={contract.avatar} />
        <Comment.Content className={styles.flexBetween}>
            <div>
                <Comment.Author as='a' className={styles.author}>
                    {contract.author}
                </Comment.Author>
                <Comment.Text className={styles.info}>
                    {contract.info}
                </Comment.Text>
                <Comment.Text className={styles.status}>
                    <Text>Status: </Text>
                    <Text color={getColorByProjectType(contract.type, true)}>{contract.status}</Text>
                </Comment.Text>
            </div>
            <Comment.Actions className={styles.flexColumn}>
                <Comment.Action className={styles.textRight}>
                    <Sprite name='messageIcon' customStyles={{ height: '14px' }} />
                    &nbsp;
                    <Sprite name='ellipsesIcon' />
                </Comment.Action>
                <Comment.Action style={{ marginTop: '17px' }}>
                    <Dot color={getColorByProjectType(contract.type)} />
                    {!isMobile && <Text fontSize='13px'>{contract.type}</Text>}
                </Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>
  );
  const ProjectItemInfo = project => (
    <Grid.Row>
        <div className={styles.flexBetween}>
          <div>
            <Dot color={getColorByProjectType(project.type)} />
            <Text color='#404144' customStyles={largeTextStyle}>
              {project.type}
            </Text>
          </div>
          <Text color='#898A8C' customStyles={mediumTextStyle}>
            {project.tasks}
          </Text>
          <Icon name='ellipsis vertical' className={styles.greyColor} />
        </div>
    </Grid.Row>
  );
  const PendingItemInfo = contract => (
    <Comment>
        <Comment.Avatar src={contract.avatar} />
        <Comment.Content className={styles.flexBetween}>
            <div>
              <Comment.Author as='a' style={mediumTextStyle}>
                {contract.author}
              </Comment.Author>
              <Comment.Text style={smallTextStyle}>
                {contract.info}
              </Comment.Text>
            </div>
            <Comment.Actions className={styles.flexColumn}>
              <Comment.Action>{contract.timestamp}</Comment.Action>
              <Comment.Action className={styles.orangeColor}>
                View offer
              </Comment.Action>
            </Comment.Actions>
        </Comment.Content>
    </Comment>
  );
  const ProjectsPanel = () => (
    <Panel
      title='Projects'
      customStyles={panelStyle}
      params={<Button text='New Project' color='orange' />}
    >
        {projectsList.map((contract, key) => (
            <div key={key}>
                {ProjectItemInfo(contract, key)}
                <Divider />
            </div>
        ))}
    </Panel>
  );
  const ContractsPanel = () => (
    <Panel
      title='Contracts'
      customStyles={panelStyle}
      params={<Button text='New Contract' color='orange' />}
    >
      <Comment.Group>
        {projectsList.map((contract, key) => (
            <div key={key}>
                {ContractItemInfo(contract, key)}
                <Divider />
            </div>
        ))}
      </Comment.Group>
    </Panel>
  );
  const ActivitiesPanel = () => (
    <Panel title='Activities' customStyles={panelStyle}>
        <div className={styles.flexBetween}>
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
            <Text color='#EF6722'>Mark as read</Text>
        </div>
        <Grid.Row>
            <Divider />
        </Grid.Row>
        <TimeLine />
    </Panel>
  );
  const PendingsPanel = () => (
    <Panel title='Pending Contracts' customStyles={panelStyle}>
        {contractsList.map((contract, key) => (
            <div key={key}>
                <Paragraph>
                    {contract.description}
                </Paragraph>
                <Comment.Group>
                    {PendingItemInfo(contract)}
                </Comment.Group>
                <Divider />
            </div>
        ))}
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