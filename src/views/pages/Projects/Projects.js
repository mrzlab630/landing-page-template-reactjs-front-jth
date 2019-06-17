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
      <Paragraph color='#898A8C' customStyles={mediumTextStyle}>
        You don't have any active contracts yet
      </Paragraph>
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
