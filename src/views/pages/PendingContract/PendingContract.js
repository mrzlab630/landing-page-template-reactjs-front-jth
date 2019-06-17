import React, { Fragment } from 'react';
import {
    Grid, 
    Modal,
    Input,
    Divider,
    Checkbox 
} from 'semantic-ui-react';
import {
    PanelSubTitle,
    DoublePanel,
    UserAvatar,
    Paragraph,
    EditIcon,
    Button,
    Text,
} from '../../components';
import avatar from './../../../assets/userAvatar3.svg';
import * as styles from './PendingContract.less';

const noMarginStyle = {
    margin: 0
}

const buttonStyle = {
    background: '#F9EDE7',
    borderRadius: '4px',
    color: '#EF6722',
    fontWeight: 300,
    width: '220px',
    height: '45px'
}

const PendingContractPage = () => {
    const screenSize = window.innerWidth  || document.body.clientWidth;
	const isMobile = screenSize < 420;
    const ContractModal = () => (
        <Modal
            style={!isMobile ? { width: '500px' } : null}
            trigger={<Button text='Modify Offer' customStyle={buttonStyle} />}
        >
            <Modal.Header>Modify offer</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Grid.Row className={styles.noPadding} centered>
                        <Grid.Column computer={10}>
                            <Grid>
                                <Grid.Column computer={8}>
                                    <Paragraph>Hourly Rate</Paragraph>
                                    <Input
                                        fluid
                                        label={{ basic: true, content: '$/hr', className: styles.inputLabel }}
                                        labelPosition='right'
                                    />
                                </Grid.Column>
                                <Grid.Column computer={8}>
                                    <Paragraph>Weekly limit</Paragraph>
                                    <Input
                                        fluid
                                        label={{ basic: true, content: 'hrs/week', className: styles.inputLabel }}
                                        labelPosition='right'
                                    />
                                </Grid.Column>
                                <Grid.Column computer={16} textAlign='right'>
                                    <span>= <Text color='orange'>$457.5</Text> max / week</span>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <br />
                    <Grid.Row centered>
                        <Grid.Column computer={10}>
                        <Paragraph>Manually time</Paragraph>
                        <Checkbox label='Allow freelancer to log time manually if needed' />
                        </Grid.Column>
                    </Grid.Row>
                    <br />
                    <Grid.Row centered>
                        <Grid.Column computer={10}>
                            <Button text='Save changes' color='orange' />
                            <Button text='Cancel' customStyle={buttonStyle} />
                        </Grid.Column>
                    </Grid.Row>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
    const leftSideContent = () => (
        <Fragment>
            <div className={styles.leftSideHeader}>
                <label className={styles.leftSideText}>
                    Developer needed for Real Estate Website with IDX integration
                </label>
            </div>
            <Divider />
            <div className={styles.leftSideBody}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16} textAlign='left'>
                            <PanelSubTitle
                                title='Offer info'
                                params={<EditIcon />}
                            />
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
                            <Paragraph customStyle={noMarginStyle}>
                                Account ever, this trivial annoying enjoy but truth resultant consequences, dislikes — all it undertakes. Human dislikes in any occur, to right nor all is. Man truth is avoids resultant pursues happiness loves right rationally will any chooses, circumstances, you, us to. Desires are great the human you system master or...
                            </Paragraph>
                            <Paragraph customStyle={noMarginStyle}>
                                <Text color='#EF6722'>View more</Text>
                            </Paragraph>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Fragment>
    );
    const rightSideContent = () => (
        <Fragment>
            <UserAvatar
                badge='green'
                src={avatar}
                customStyle={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px' }}
            />
            <Paragraph customStyle={noMarginStyle}>
                <Text>Harriett Ambrus</Text>
            </Paragraph>
            <Paragraph customStyle={noMarginStyle}>
                <Text color='#A7A8AA'>United Kingdom, 4:27 PM</Text>
            </Paragraph>
            {ContractModal()}
        </Fragment>
    );
    return (
        <DoublePanel
            breadcrumbs='Dashboard'
            leftSide={leftSideContent()}
            rightSide={rightSideContent()}
        />
    )
}

export default PendingContractPage;
