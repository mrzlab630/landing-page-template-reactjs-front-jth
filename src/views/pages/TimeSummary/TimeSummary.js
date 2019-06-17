import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Grid, Button, Divider } from 'semantic-ui-react';
import { Panel, Text, Paragraph } from './../../components';
import userAvatar1 from './../../../assets/userAvatar1.svg';
import userAvatar2 from './../../../assets/userAvatar2.svg';
import * as styles from './TimeSummary.less';
import UserAvatar from '../../components/UserAvatar/UserAvatar';

const noMargin = { margin: 0 };
const noOffset = {
	margin: 0,
	padding: 0
};
const buttonStyle = {
	fontWeight: 600,
	color: '#EF6722',
	background: '#F5F6F7'
};
const flexColumn = {
	display: 'flex',
	flexDirection: 'column'
}

const TimeSummaryRow = ({ isMobile, title, mon, tue, wed, thu, fri, sat, sun, hrs, total}) => (
	<Grid.Row className={styles.timeSummaryWrapper} style={noOffset}>
		<Grid.Column width={isMobile ? 16 : 5} verticalAlign='bottom'>
			{title()}
		</Grid.Column>
		<Grid.Column width={isMobile ? 16 :11}>
			<Grid columns='equal'>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{mon()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{tue()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{wed()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{thu()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{fri()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{sat()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 4 : null} textAlign='center'>
					{sun()}
				</Grid.Column>
				<Grid.Column width={isMobile ? 8 : null} textAlign='center' verticalAlign='middle'>{hrs}</Grid.Column>
				<Grid.Column width={isMobile ? 8 : null} textAlign='center' verticalAlign='middle'>{total}</Grid.Column>
			</Grid>
		</Grid.Column>
	</Grid.Row>
);

TimeSummaryRow.propTypes = {
	title: PropTypes.any,
	mon: PropTypes.any,
	tue: PropTypes.any,
	wed: PropTypes.any,
	thu: PropTypes.any,
	fri: PropTypes.any,
	sat: PropTypes.any,
	sun: PropTypes.any,
	hrs: PropTypes.any,
	total: PropTypes.any,
	isMobile: PropTypes.bool
}

const TimeSummary = () => {
	const screenSize = window.innerWidth  || document.body.clientWidth;
	const isMobile = screenSize < 420
	return (
		<Panel
			title='Weekly Summary'
			breadcrumbs='Reports'
		>
			<Grid className={styles.timeSummary}>
				<TimeSummaryRow
					title={() => (
						<Text>Contract</Text>
					)}
					mon={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Mon</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					tue={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Tue</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					wed={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Wed</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					thu={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Thu</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					fri={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Fri</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					sat={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Sat</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					sun={() => (
						<Fragment>
							<Paragraph customStyles={noMargin}>Sun</Paragraph>
							<Paragraph customStyles={noMargin}>Apr 16</Paragraph>
						</Fragment>
					)}
					hrs='Hours'
					total='Pending'
					isMobile={isMobile}
				/>
				<Divider />
				<TimeSummaryRow
					title={() => (
						<Fragment>
							<Grid.Column width={2}>
								<div className={styles.userInfoWrapper}>
									<UserAvatar
										badge='green'
										src={userAvatar2}
										customStyle={{ marginRight: 10 }}
									/>
									<p style={flexColumn}>
										<Text color='#EF6722'>Developer needed for Real Estate...</Text>
										<Text>Nolan Pramod</Text>
									</p>
								</div>
							</Grid.Column>
						</Fragment>
					)}
					mon={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					tue={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					wed={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					thu={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					fri={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					sat={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					sun={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					hrs='17:30'
					total='$3350.00'
					isMobile={isMobile}
				/>
				<Divider />
				<TimeSummaryRow
					title={() => (
						<Fragment>
							<Grid.Column width={2}>
								<div className={styles.userInfoWrapper}>
									<UserAvatar
										badge='green'
										src={userAvatar1}
										customStyle={{ marginRight: 10 }}
									/>
									<p style={flexColumn}>
										<Text color='#EF6722'>Developer needed for Real Estate...</Text>
										<Text>Harriett Ambrus</Text>
									</p>
								</div>
							</Grid.Column>
						</Fragment>
					)}
					mon={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					tue={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					wed={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					thu={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					fri={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					sat={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					sun={() => (
						<Fragment>
							<Button style={buttonStyle}>6:20</Button>
						</Fragment>
					)}
					hrs='17:30'
					total='$3350.00'
					isMobile={isMobile}
				/>
				<Divider />
				<Grid.Row className={styles.fieldHeaderWrapper} style={noOffset}>
					<Grid.Column computer={12} mobile={4}></Grid.Column>
					<Grid.Column
						mobile={4}
						computer={1}
						textAlign='center'
					>Total:</Grid.Column>
					<Grid.Column
						mobile={4}
						computer={2}
						textAlign='center'
					>25:30</Grid.Column>
					<Grid.Column
						mobile={4}
						computer={1}
						textAlign='center'
					>$3803</Grid.Column>
				</Grid.Row>
				<br />
			</Grid>
		</Panel>
	)
}

export default TimeSummary;
