import React from 'react';
import {
    Grid,
    Menu,
    Icon,
    Button,
    Segment,
    Container,
    Divider
} from 'semantic-ui-react';

import UserAvatar from '../../components/UserAvatar';
import Breadcrumbs from '../../components/Breadcrumbs';
import InvoicesTable from '../../components/InvoicesTable/InvoicesTable';
import * as styles from './TimeContract.less';
import userAvatar1 from './../../../assets/userAvatar3.svg';
import horizontaldots from './../../../assets/horizontaldots.svg';

const buttonStyle = {
    background: '#F9EDE7',
    borderRadius: '4px',
    color: '#EF6722',
    fontWeight: 300,
    padding: '13px 65px',
    width: '220px',
    height: '45px'
}

const buttonStyle2 = {
    fontWeight: 600,
    color: '#EF6722',
    background: '#F5F6F7'
}

const TimeContractPage = () => {
    const screenSize = window.innerWidth  || document.body.clientWidth;
	const isMobile = screenSize < 420
    return (
        <div className={styles.panelWrapper}>
            <Container>
                <Breadcrumbs breadcrumbs='Dashboard' />
                <Segment>
                    <Grid>
                        <Grid.Column
                            mobile={16}
                            computer={11}
                            verticalAlign='top'
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
                                        <Grid.Column computer={4} mobile={16} className={styles.billingField} style={{ paddingBottom: 0 }}>
                                            <p className={styles.billingTitle}>This week</p>
                                            <p className={styles.billingLabel}>24:20 hrs</p>
                                            <p className={styles.billingValue}>Of 40hr limit </p>
                                        </Grid.Column>
                                        <Grid.Column computer={4} mobile={16} className={styles.billingField}>
                                            <p className={styles.billingTitle}>Last week</p>
                                            <p className={styles.billingLabel}>19:40 hrs</p>
                                            <p className={styles.billingValue}>$292.50 Paid</p>
                                        </Grid.Column>
                                        <Grid.Column computer={4} mobile={16} className={styles.billingField}>
                                            <p className={styles.billingTitle}>Since start</p>
                                            <p className={styles.billingLabel}>44:00 hrs</p>
                                            <p className={styles.billingValue}>$660.00</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <Divider />
                                <Grid.Row>
                                    <Grid.Column width={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '16px', color: '#000' }}>Timesheet this week</span>
                                            <span style={{ fontSize: '16px', color: '#000' }}>Amount: $364.75</span>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <br />
                                <Grid.Row>
                                    <Grid columns={!isMobile ? 'equal' : '4'}>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                        <Grid.Column textAlign='center'>
                                            <Button style={buttonStyle2}>6:20</Button>
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Row>
                                <Divider />
                                <Grid.Row>
                                    <Grid>
                                        <Grid.Column mobile={16} computer={8} verticalAlign='middle'>
                                            <span style={{ fontSize: '16px', color: '#000' }}>All timesheets and earnings</span>
                                        </Grid.Column>
                                        <Grid.Column mobile={16} computer={8} verticalAlign='middle' textAlign={isMobile ? 'left' : 'right'}>
                                            <span style={{ fontSize: '16px', color: '#404144' }}>
                                                Last 30 days: $292.50&nbsp;
                                                <Icon name="calendar outline" disabled />
                                            </span>
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Row>
                                <InvoicesTable />
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
									src={userAvatar1}
									customStyle={{
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginBottom: '15px',
                                        width: '64px'
                                    }}
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

export default TimeContractPage;
