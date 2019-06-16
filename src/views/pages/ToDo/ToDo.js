import React from 'react';
import {
    Grid,
    Label,
    Button,
    Divider,
    Comment,
    Checkbox,
    Container
} from 'semantic-ui-react';
import { Panel } from '../../components';
import * as styles from './ToDo.less';

import Masonry from 'react-masonry-css'

import orangeplus from '../../../assets/orangeplus.svg';
import greyhamburger from '../../../assets/greyhamburger.svg';
import greenbadge from '../../../assets/greenbadge.svg';
import redbadge from '../../../assets/redbadge.svg';
import fileIcon from '../../../assets/file.svg';
import userAvatar1 from '../../../assets/userAvatar2.svg';
import screenShot1 from '../../../assets/screenShot1.svg';
import screenShot2 from '../../../assets/screenShot2.svg';
import horizontaldots from '../../../assets/horizontaldots.svg';

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

const ToDo = () => {
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
                        <div>
                            <Panel
                                title='Files'
                                customStyles={panelStyle}
                            >
                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar src={fileIcon} style={{ marginTop: '10px', height: '20px' }} />
                                        <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Comment.Author
                                                    as='a'
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: '14px',
                                                        lineHeight: '14px',
                                                        color: '#404144'
                                                    }}
                                                >
                                                    Invite Freelancer's - email.pdf
                                                </Comment.Author>
                                                <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                    5m ago
                                                </Comment.Text>
                                            </div>
                                            <Comment.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                <Comment.Action>370KB</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                    <Divider />
                                    <Comment>
                                        <Comment.Avatar src={screenShot1} />
                                        <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Comment.Author
                                                    as='a'
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: '14px',
                                                        lineHeight: '14px',
                                                        color: '#404144'
                                                    }}
                                                >
                                                    Dashboard.png
                                                </Comment.Author>
                                                <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                    9m ago
                                                </Comment.Text>
                                            </div>
                                            <Comment.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                <Comment.Action>642KB</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                    <Divider />
                                    <Comment>
                                        <Comment.Avatar src={fileIcon} style={{ marginTop: '10px', height: '20px' }} />
                                        <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Comment.Author
                                                    as='a'
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: '14px',
                                                        lineHeight: '14px',
                                                        color: '#404144'
                                                    }}
                                                >
                                                    Guidelines.txt
                                                </Comment.Author>
                                                <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                    5m ago
                                                </Comment.Text>
                                            </div>
                                            <Comment.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                <Comment.Action>370KB</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                    <Divider />
                                    <Comment>
                                        <Comment.Avatar src={screenShot2}/>
                                        <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <Comment.Author
                                                    as='a'
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: '14px',
                                                        lineHeight: '14px',
                                                        color: '#404144'
                                                    }}
                                                >
                                                    Invite Freelancer.png
                                                </Comment.Author>
                                                <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                    14.04.19
                                                </Comment.Text>
                                            </div>
                                            <Comment.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                <Comment.Action>642KB</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>                     
                            </Panel>
                            <div style={{ background: '#F5F6F7', width: '100%', height: '30px' }} />
                            <Panel
                                title='Mobile Design'
                                customStyles={panelStyle}
                            >
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Comment.Group>
                                            <Comment>
                                                <Comment.Avatar src={userAvatar1}/>
                                                <Comment.Content style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <Comment.Author
                                                            as='a'
                                                            style={blackText}
                                                        >
                                                            Nolan Pramod
                                                        </Comment.Author>
                                                        <Comment.Text style={{ fontSize: '13px', lineHeight: '12px', color: '#A7A8AA', paddingTop: '10px', margin: 0 }}>
                                                            United Kingdom
                                                        </Comment.Text>
                                                    </div>
                                                    <Comment.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                        <p style={blackText}>22 May 2019</p>
                                                        <p style={greyText}>Due date</p>
                                                    </Comment.Actions>
                                                </Comment.Content>
                                            </Comment>
                                        </Comment.Group>
                                        <p style={{ margin: 0 }}>Praising great annoying it, itself happiness, anyone, not nor example has nor advantage actual avoids enjoy, or actual, dislikes was. Rationally you system one, except that actual...</p>
                                        <p style={{ margin: 0, color: '#EF6722' }}>View more</p>
                                        <br />
                                    </Grid.Column>
                                </Grid.Row>
                            </Panel>
                        </div>
                    </Masonry>
            </Container>
        </div>
    )
}

export default ToDo;
