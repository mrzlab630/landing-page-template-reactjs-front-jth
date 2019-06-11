import React from 'react';
import {
  Grid,
  Icon,
  Button,
  Comment,
  Container
} from 'semantic-ui-react';
import { Panel, Dot } from './../../components';
import * as styles from './Projects.less';

import Masonry from 'react-masonry-css'
import userAvatar2 from '../../../assets/userAvatar2.svg';

const buttonStyle = {
  margin: 0,
  fontWeight: 400
}

const panelStyle = {
    minHeight: 'initial',
    padding: 0
}

const greyText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '14px',
    lineHeight: '14px',
    textAlign: 'center',
    color: '#898A8C'
}

const blackText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#404144'
}

const Projects = () => {
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
                                        <Dot color='violetOutline'/>
                                        <span style={blackText}>Business Management</span>
                                    </div>
                                    <span style={greyText}>3 tasks</span>
                                    <Icon name='ellipsis vertical' style={{ color: '#C5C6C7' }} />
                                </div>
                            </Grid.Row>
                        </Panel>
                        <Panel
                            title='Contracts'
                            customStyles={panelStyle}
                            params={<OrangeButton text='New Contract' />}
                        >
                            <p style={greyText}>You don't have any active contracts yet</p>
                        </Panel>
                        <Panel
                            title='Activities'
                            customStyles={panelStyle}
                        >
                            <p style={greyText}>There's no activity yet</p>
                        </Panel>
                        <Panel
                            title='Pending Contracts'
                            customStyles={panelStyle}
                        >
                            <p>Experienced website designer/ developer needed to build website from ground up and manage SEO.</p>
                            <Comment.Group>
                                <Comment>
                                    <Comment.Avatar src={userAvatar2} />
                                    <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <Comment.Author
                                                as='a'
                                                style={{ fontSize: '14px', lineHeight: '14px', color: '#404144', fontFamily: 'Metropolis' }}
                                            >
                                                Martin Adriel
                                            </Comment.Author>
                                            <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA' }}>
                                                7:30 PM in San Francisco
                                            </Comment.Text>
                                        </div>
                                        <Comment.Actions style={{ display: 'flex', flexDirection: 'column' }}>
                                          <Comment.Action>27m ago</Comment.Action>
                                          <Comment.Action style={{ color: '#EF6722' }}>View offer</Comment.Action>
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

export default Projects;
