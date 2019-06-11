import React from 'react';
import {
    Grid,
    Menu,
    Button,
    Divider,
    Segment,
    Container
} from 'semantic-ui-react';

import {
    PanelSubTitle,
    Breadcrumbs,
    UserAvatar,
    EditIcon
} from '../../components';

import horizontaldots from './../../../assets/horizontaldots.svg';
import avatar from './../../../assets/userAvatar3.svg';

import * as styles from './Contract.less';

const buttonStyle = {
    background: '#F9EDE7',
    borderRadius: '4px',
    color: '#EF6722',
    fontWeight: 300,
    width: '220px',
    height: '45px'
}

const ContractPage = () => {
    return (
        <div className={styles.panelWrapper}>
            <Container>
                <Breadcrumbs breadcrumbs='Dashboard' />
                <Segment>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            computer={11}
                            verticalAlign='middle'
                            className={styles.panelLeftSideWrapper}
                        >
                            <div className={styles.panelHeader}>
                                <label className={styles.panelHeaderText}>
                                    Developer needed for Real Estate Website with IDX integration
                                </label>
                                <img src={horizontaldots} />
                            </div>
                            <Menu
                                pointing
                                secondary
                                style={{ marginLeft: '1.5em' }}
                            >
                                <Menu.Item
                                    name='Time & Payments'
                                    active={true}
                                />
                                <Menu.Item
                                    name='Terms & Settings'
                                    active={false}
                                />
                            </Menu>
                            <div className={styles.panelBody}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={16} textAlign='left'>
                                            <PanelSubTitle title='Rate and Limit' params={<EditIcon />} />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Rate</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>$7.00 / hr</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Weekly Limit</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>40 hrs / week</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Manual time</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>Manual time allowed</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Start Date</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>Apr 9, 2019</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Hired By</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>Roman Theotimus</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Contract ID</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>301541941</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16} textAlign='left'>
                                            <Divider />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16} textAlign='left'>
                                            <PanelSubTitle title='Description of Work' />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={16}>
                                            <p style={{ margin: 0 }}>Account ever, this trivial annoying enjoy but truth resultant consequences, dislikes — all it undertakes. Human dislikes in any occur, to right nor all is. Man truth is avoids resultant pursues happiness loves right rationally will any chooses, circumstances, you, us to. Desires are great the human you system master or...</p>
                                            <p style={{ margin: 0, color: '#EF6722' }}>View more</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                        </Grid.Column>
                        <Grid.Column
                            mobile={16}
                            computer={5}
                            textAlign='center'
                            verticalAlign='top'
                            className={styles.panelRightSideWrapper}
                        >
                            <div className={styles.panelSide}>
                                <UserAvatar
                                    badge='green'
                                    src={avatar}
                                    customStyle={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}
                                />
                                <p style={{ margin: 0 }}>Harriett Ambrus</p>
                                <p style={{ color: '#A7A8AA' }}>United Kingdom, 4:27 PM</p>
                                <p style={{ margin: 0 }}>
                                    <span style={{ color: '#A7A8AA' }}>Start date: </span>
                                    <span style={{ color: '#404144' }}>Apr 8, 2019</span>
                                </p>
                                <p>
                                    <span style={{ color: '#A7A8AA' }}>Contract status: </span>
                                    <span style={{ color: '#EF6722' }}>Active</span>
                                </p>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Button style={buttonStyle}>Pay</Button>
                                    </Grid.Column>
                                </Grid.Row>
                                <br />
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Button style={buttonStyle}>Pause</Button>
                                    </Grid.Column>
                                </Grid.Row>
                                <br />
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Button style={buttonStyle}>End contract</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        </div>
    )
}

export default ContractPage;
