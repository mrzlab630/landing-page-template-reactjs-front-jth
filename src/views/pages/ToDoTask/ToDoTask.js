import React from 'react';
import {
    Grid,
    Label,
    Input,
    Header,
    Button,
    Divider,
    Comment,
    Checkbox,
    Container
} from 'semantic-ui-react';
import { Panel } from '../../components';
import * as styles from './ToDoTask.less';

import Masonry from 'react-masonry-css'

import orangeplus from '../../../assets/orangeplus.svg';
import greyhamburger from '../../../assets/greyhamburger.svg';
import greenbadge from '../../../assets/greenbadge.svg';
import redbadge from '../../../assets/redbadge.svg';
import userAvatar1 from '../../../assets/userAvatar2.svg';
import userAvatar4 from '../../../assets/userAvatar4.svg';
import horizontaldots from '../../../assets/horizontaldots.svg';
import screenShot1 from '../../../assets/screenShot1.svg';
import screenShot2 from '../../../assets/screenShot2.svg';

const flexCenter = {
    display: 'flex',
    alignItems: 'center'
}

const buttonStyle = {
    margin: 0,
    fontWeight: 400
}

const panelStyle = {
    minHeight: 'initial',
    padding: 0
}

const blackText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#404144'
}

const greyText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '13px',
    lineHeight: '12px',
    color: '#A7A8AA'
}

const blueText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#236EE8',
    margin: '0 10px'
}

const todoText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '14px',
    lineHeight: '14px',
    color: '#404144'
}

const titleText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '13px',
    lineHeight: '12px',
    color: '#898A8C',
    margin: '20px 0px 0px 25px'
}

const orangeText = {
    color: '#EF6722'
}

const ToDoTask = () => {
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
                                title='Invite freelancer for a project or create project'
                                customStyles={panelStyle}
                            >
                                <Comment.Group>
                                    <Header as='h3'>
                                        Comments
                                        <Label style={{ minWidth: '1em' }} color='blue' horizontal>4</Label>
                                    </Header>
                                    <Comment>
                                        <Comment.Avatar src={userAvatar1} />
                                        <Comment.Content style={{ marginTop: '15px' }}>
                                            <Comment.Author as='a'>Roman</Comment.Author>
                                            <Comment.Metadata style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                                                <div>08:14 PM</div>
                                                <img src={horizontaldots} />
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                Who again except resultant ever toil there him: do born take, toil. Us complete avoids the system right know find ever has all a.
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                    <Comment>
                                        <Comment.Avatar src={userAvatar1} />
                                        <Comment.Content style={{ marginTop: '15px' }}>
                                            <Comment.Author as='a'>Roman</Comment.Author>
                                            <Comment.Metadata style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                                                <div>08:29 PM</div>
                                                <img src={horizontaldots} />
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                Procure teachings extremely master consequences fault
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div style={{ width: '49%'}}>
                                                        <img src={screenShot1} style={{ width: '100%'}} />
                                                        <p style={greyText}>Dashboard 1.1 - New User.png • 907KB</p>
                                                    </div>
                                                    <div style={{ width: '49%'}}>
                                                        <img src={screenShot2} style={{ width: '100%'}} />
                                                        <p style={greyText}>dashboard 1-4.png • 1.2MB</p>
                                                    </div>
                                                </div>
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                    <Comment>
                                        <Comment.Avatar src={userAvatar4} />
                                        <Comment.Content style={{ marginTop: '15px' }}>
                                            <Comment.Author as='a'>Nolan Pramod</Comment.Author>
                                            <Comment.Metadata style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                                                <div>Apr 17, 10:07 AM</div>
                                                <img src={horizontaldots} />
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                Will praising denouncing desires anyone actual toil this example who is to it mistaken laborious. Denouncing some idea mistaken trivial pain avoids, laborious example truth idea a pursue which.
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                    <Comment>
                                        <Comment.Avatar src={userAvatar1} />
                                        <Comment.Content style={{ marginTop: '15px' }}>
                                            <Comment.Author as='a'>Roman</Comment.Author>
                                            <Comment.Metadata style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                                                <div>Apr 17, 10:31 PM </div>
                                                <img src={horizontaldots} />
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                Yes, it’s good.
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                    <Comment>
                                        <Comment.Avatar src={userAvatar1} />
                                        <Comment.Content>
                                            <Comment.Text>
                                                <Input
                                                    placeholder='Add a comment or upload a file...'
                                                    style={{ width: '100%' }} 
                                                />
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>                     
                            </Panel>
                            <Panel
                                title='Tasks'
                                customStyles={panelStyle}
                                params={<OrangeButton text='New list' />}
                            >
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <div className={styles.panelSubTitleWrapper}>
                                            <div style={flexCenter}>
                                                <img src={redbadge} />
                                                <span style={blueText}>Main Page design</span>
                                                <img src={horizontaldots} />
                                            </div>
                                            <span style={greyText}>1/4 completed</span>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Invite freelancer for a project or create project</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>4</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>View offer in case of pending</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>To-dos section</span>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <div style={flexCenter}>
                                            <div style={{ margin: '20px 0px 10px 25px' }}>
                                                <img src={orangeplus} />
                                                <span style={orangeText}>Add a to-do</span>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <div style={flexCenter}>
                                            <span style={titleText}>Completed</span>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Task inner page</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='grey' horizontal>17</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Divider />
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <div className={styles.panelSubTitleWrapper}>
                                            <div style={flexCenter}>
                                                <img src={greenbadge} />
                                                <span style={blueText}>Product Card</span>
                                                <img src={horizontaldots} />
                                            </div>
                                            <span style={greyText}>0/6 completed</span>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Create costume email</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Chat page design</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Dispute and request refund from freelancer</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Project dashboard</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Weekly Summary</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12} style={{ margin: '10px 0' }}>
                                        <div style={flexCenter}>
                                            <img src={greyhamburger} />
                                            <Checkbox style={{ margin: '0px 15px' }} />
                                            <span style={todoText}>Sales section</span>
                                            <Label style={{ minWidth: '1em', margin: '0 10px' }} color='blue' horizontal>1</Label>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <div style={flexCenter}>
                                            <div style={{ margin: '20px 0px 10px 25px' }}>
                                                <img src={orangeplus} />
                                                <span style={orangeText}>Add a to-do</span>
                                            </div>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <br />
                            </Panel>
                    </Masonry>
            </Container>
        </div>
    )
}

export default ToDoTask;
