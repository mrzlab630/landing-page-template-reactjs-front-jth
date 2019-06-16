import React from 'react';
import {
    Grid,
    Icon,
    Input,
    Header,
    Comment,
    Container
} from 'semantic-ui-react';
import { Panel } from './../../components';
import * as styles from './Messanger.less';
import userAvatar1 from '../../../assets/userAvatar2.svg';

const blackText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#404144',
    margin: 0
}

const greyText = {
    fontFamily: 'MetropolisMedium',
    fontSize: '13px',
    lineHeight: '12px',
    color: '#A7A8AA',
    margin: 0
}

const Messanger = () => (
    <Panel title=''>
        <Grid>
            <Grid.Column computer={5}>
                <Comment.Group>
                    <Header as='h3'>
                        <Input placeholder='Search messages' />
                    </Header>
                    <Comment>
                        <Comment.Avatar src={userAvatar1} />
                        <Comment.Content>
                            <Comment.Author as='a'>Roman</Comment.Author>
                            <Comment.Metadata style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                                <div>08:14 PM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                                <p style={blackText}>Mobile App Design and Developmen...</p>
                                <p style={greyText}>Dylis: Hello, thank you for intere...</p>
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </Grid.Column>
            <Grid.Column computer={12}></Grid.Column>
        </Grid>
    </Panel>
);

export default Messanger;