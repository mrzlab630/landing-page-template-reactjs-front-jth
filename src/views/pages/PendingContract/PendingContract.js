import React from 'react';
import {
    Grid,
    Menu,
    Button,
    Modal,
    Input,
    Checkbox,
    Divider,
    Segment,
    Container
} from 'semantic-ui-react';

import { 
    Breadcrumbs,
    PanelSubTitle,
    UserAvatar
} from '../../components';

import avatar from './../../../assets/userAvatar3.svg';

import * as styles from './PendingContract.less';

const buttonStyle = {
    background: '#F9EDE7',
    borderRadius: '4px',
    color: '#EF6722',
    fontWeight: 300,
    width: '220px',
    height: '45px'
}

const clearPadding = {
  padding: 0
}

const orangeText = {
  color: '#EF6722'
}

const PendingContractPage = () => {
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
                            <div
                                style={{ marginBottom: '25px' }}
                                className={styles.panelHeader}
                            >
                                <label className={styles.panelHeaderText}>
                                    Developer needed for Real Estate Website with IDX integration
                                </label>
                            </div>
                            <Divider />
                            <div className={styles.panelBody}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={16} textAlign='left'>
                                            <PanelSubTitle title='Offer info' />
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Status</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>Pending - expires on Apr 14, 2019</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Hourly Rate</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>$7.00 / hr</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Offer Date</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>Apr 9, 2019</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Weekly Limit</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>40 hrs / week</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8} textAlign='left'>Manual Time Allowed</Grid.Column>
                                        <Grid.Column width={8} textAlign='left'>Yes</Grid.Column>
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
                                <Modal
                                    style={!isMobile ? { width: '500px' } : null}
                                    trigger={<Button style={buttonStyle}>Modify Offer</Button>}
                                >
                                    <Modal.Header>Modify offer</Modal.Header>
                                    <Modal.Content image>
                                        <Modal.Description>
                                            <Grid.Row style={clearPadding} centered>
                                                <Grid.Column computer={10}>
                                                    <Grid>
                                                        <Grid.Column computer={8}>
                                                            <p>Hourly Rate</p>
                                                            <Input
                                                                fluid
                                                                label={{ basic: true, content: '$/hr', className: styles.inputLabel }}
                                                                labelPosition='right'
                                                            />
                                                        </Grid.Column>
                                                        <Grid.Column computer={8}>
                                                            <p>Weekly limit</p>
                                                            <Input
                                                                fluid
                                                                label={{ basic: true, content: 'hrs/week', className: styles.inputLabel }}
                                                                labelPosition='right'
                                                            />
                                                        </Grid.Column>
                                                        <Grid.Column computer={16} textAlign='right'>
                                                            <span>= <span style={orangeText}>$457.5</span> max / week</span>
                                                        </Grid.Column>
                                                    </Grid>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <br />
                                            <Grid.Row centered>
                                                <Grid.Column computer={10}>
                                                <p>Manually time</p>
                                                <Checkbox label='Allow freelancer to log time manually if needed' />
                                                </Grid.Column>
                                            </Grid.Row>
                                            <br />
                                            <Grid.Row centered>
                                                <Grid.Column computer={10}>
                                                    <Button
                                                        color='orange'
                                                        style={{ fontWeight: 400 }}
                                                        className={styles.fieldText}
                                                    >Save changes</Button>
                                                    <Button
                                                        className={styles.fieldText}
                                                        style={{ background: '#F9EDE7', color: '#EF6722', fontWeight: 400 }}
                                                    >Cancel</Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        </div>
    )
}

export default PendingContractPage;
