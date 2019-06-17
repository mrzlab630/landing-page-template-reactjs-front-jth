import React, { Fragment } from 'react';
import {
    Grid, 
    Menu, 
    Divider 
} from 'semantic-ui-react';
import {
    PanelSubTitle,
    DoublePanel,
    UserAvatar,
    Paragraph,
    EditIcon,
    Sprite,
    Button,
    Text
} from '../../components';
import avatar from './../../../assets/userAvatar3.svg';
import * as styles from './Contract.less';

const customButtonStyle = {
    background: '#F9EDE7',
    borderRadius: '4px',
    color: '#EF6722',
    fontWeight: 300,
    width: '220px',
    height: '45px'
}

const noMarginStyle = {
    margin: 0
}

const ContractPage = () => {
    const leftSideContent = () => (
        <Fragment>
            <div className={styles.leftSideHeader}>
                <label className={styles.leftSideText}>
                    Developer needed for Real Estate Website with IDX integration
                </label>
                <Sprite name='horizontaldots' />
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
            <div className={styles.leftSideBody}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16} textAlign='left'>
                            <PanelSubTitle
                                title='Rate and Limit'
                                params={<EditIcon />}
                            />
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
            <Paragraph customStyle={noMarginStyle}>
                <Text color='#A7A8AA'>Start date: </Text>
                <Text color='#404144'>Apr 8, 2019</Text>
            </Paragraph>
            <Paragraph customStyle={noMarginStyle}>
                <Text color='#A7A8AA'>Contract status: </Text>
                <Text color='#EF6722'>Active</Text>
            </Paragraph>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Button text='Pay' customStyle={customButtonStyle} />
                </Grid.Column>
            </Grid.Row>
            <br />
            <Grid.Row>
                <Grid.Column width={16}>
                    <Button text='Pause' customStyle={customButtonStyle} />
                </Grid.Column>
            </Grid.Row>
            <br />
            <Grid.Row>
                <Grid.Column width={16}>
                    <Button text='End contract' customStyle={customButtonStyle} />
                </Grid.Column>
            </Grid.Row>
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

export default ContractPage;