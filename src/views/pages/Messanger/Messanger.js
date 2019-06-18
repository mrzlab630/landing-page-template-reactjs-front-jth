import React, { Fragment } from 'react';
import {
    Grid,
    Icon,
    Label,
    Input,
    Comment,
    Divider
} from 'semantic-ui-react';
import { 
    Panel, 
    Paragraph, 
    Text,
    Button,
    Sprite,
    UserAvatar
} from './../../components';
import * as styles from './Messanger.less';

import userAvatar1 from '../../../assets/userAvatar1.svg';
import userAvatar2 from '../../../assets/userAvatar2.svg';

const textStyle = {
    lineHeight: '20px',
    margin: 0
}

const tagStyle = {
    padding: '3px 10px',
    fontWeight: 400,
    float: 'right'
}

const chatTimestamp = {
    float: 'right',
    display: 'flex',
    alignItems: 'center'
}

const chats = [
    {
        avatar: userAvatar1,
        author: 'Roman',
        timestamp: '08:14 PM',
        messages: '2',
        title: 'Mobile App Design and Developmen...',
        description: 'Dylis: Hello, thank you for intere...'
    },
    {
        avatar: userAvatar1,
        author: 'Reena Pirouz',
        timestamp: '08:14 PM',
        messages: '1',
        title: 'Build a new wordpress website and...',
        description: 'Reena: Hello, thank you for inter...'
    },
    {
        avatar: userAvatar1,
        author: 'Demetria Golbahar',
        timestamp: '08:14 PM',
        messages: '',
        title: 'Single Page Website Design and Lo...',
        description: 'You: No problem.'
    },
    {
        avatar: userAvatar1,
        author: 'Mohandas Mahtab',
        timestamp: 'Yesterday',
        messages: '',
        title: 'Web designer with Wordpress, light...',
        description: 'You: Okay, I’m waiting.'
    },
    {
        avatar: userAvatar1,
        author: 'Ragnarr Lucinda',
        timestamp: '05/04/19',
        messages: '',
        title: 'New Website/Platform for Digital M...',
        description: 'Ragnarr: Hello, thank you for...'
    }
];

const ChatItemInfo = chat => (
    <Fragment>
        <Comment>
            <Comment.Avatar src={chat.avatar} />
            <Comment.Content>
                <Comment.Author as='a'>{chat.author}</Comment.Author>
                <Comment.Metadata style={chatTimestamp}>
                    <Text>{chat.timestamp}</Text>
                </Comment.Metadata>
                <Comment.Text>
                    <Paragraph
                        color='#404144'
                        fontSize='13px'
                        customStyles={textStyle}
                    >{chat.title}</Paragraph>
                    <Paragraph
                        color='#6B6C6F'
                        fontSize='13px'
                        customStyles={textStyle}
                    >
                        {chat.description}
                        {chat.messages.length !== 0 && <Label color='orange' style={tagStyle}>{chat.messages}</Label>}
                    </Paragraph>
                </Comment.Text>
            </Comment.Content>
        </Comment>
        <Divider />
    </Fragment>
);

const ChatHeader = () => (
    <Grid columns='3'>
        <Grid.Row>
            <Grid.Column computer='2' style={{ paddingLeft: 0, paddingRight: 0 }}>
                <UserAvatar src={userAvatar2} customStyle={{ width: '48px', margin: 'auto', display: 'block' }}/>
            </Grid.Column>
            <Grid.Column computer='8' style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Paragraph customStyles={{ margin: 0 }}>
                    <Text fontSize='16px'>Reena Pirouz</Text>&nbsp;
                    <Icon name='star' style={{ color: '#C5C6C7' }} />
                </Paragraph>
                <Paragraph color=' #A7A8AA' fontSize='13px' customStyles={{ margin: 0 }}>7:30 PM in San Francisco</Paragraph>
                <Paragraph customStyles={{ margin: 0 }}>Build a new wordpress website and migrate my old site to it</Paragraph>
            </Grid.Column>
            <Grid.Column computer='6' verticalAlign='middle' style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Button text='View profile' customStyle={{background: '#fff', color: '#EF6722'}} />
                <Button text='Hire Freelancer' customStyle={{background: '#EF6722', color: '#fff'}} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const messages = [
    {
        text: 'Okay, I’m working.',
        author: 'Reena',
        timestamp: '09:55 AM'
    },
    {
        text: 'Praising or procure complete are was',
        author: 'You',
        timestamp: '10:01 AM'
    },
    {
        text: 'Pleasure resultant complete extremely except it a this you',
        author: 'Reena',
        timestamp: '07:47 PM'
    },
    {
        text: 'Because explain desires explain is happiness extremely, actual exercise the explorer, how, master was teachings those, with complete right nor undertakes nor, born.',
        author: 'Reena',
        timestamp: '08:02 PM'
    },
    {
        text: 'Master and encounter explain actual, procure actual because born to human',
        author: 'You',
        timestamp: '08:14 PM'
    },
    {
        text: 'Praising painful teachings can resultant which of know a do know.',
        author: 'You',
        timestamp: ''
    },
    {
        text: 'Some dislikes you, complete ever',
        author: 'You',
        timestamp: ''
    },
    {
        text: 'This some there happiness resultant all from and occur this, painful any',
        author: 'You',
        timestamp: '09:27 PM'
    },
    {
        text: 'Chooses physical and a idea',
        author: 'Reena',
        timestamp: '09:39 PM'
    },
];

const chatMessage = message => {
    const isMyMsg = message.author === 'You';
    const wrapperStyle = isMyMsg ? { alignItems: 'end' } : {};
    const msgStyle = isMyMsg ? { justifyContent: 'end' } : { justifyContent: 'flex-start' };
    const bubbleStyle = isMyMsg ? { background: '#236EE8', color: '#fff' } : { background: '#F5F6F7', color: '#404144' };
    return (
        <div style={wrapperStyle} className={styles.chatMsgWrapper}>
            <Grid.Row style={msgStyle} className={styles.chatMsg}>
                <Label as='a' style={bubbleStyle} className={styles.chatBubble}>
                    {message.text}
                </Label>
                <Sprite name='horizontaldots' />
            </Grid.Row>
            {message.timestamp.length !== 0 && (
                <Grid.Row>
                    <Paragraph>
                        <Text color='#6B6C6F'>{message.author}</Text>,
                        <Text color='#A7A8AA'>{message.timestamp}</Text>
                    </Paragraph>
                </Grid.Row>
            )}
        </div>
    );
}

const Messanger = () => (
    <Panel title=''>
        <Grid>
            <Grid.Column computer={5} className={styles.leftSidePanel}>
                <Comment.Group>
                    <Input
                        style={{ width: '100%', marginBottom: '20px' }}
                        placeholder='Search messages'
                    />
                    {chats.map(chat => ChatItemInfo(chat))}
                </Comment.Group>
            </Grid.Column>
            <Grid.Column computer={11}>
                <ChatHeader />
                <Divider />
                {messages.map(message => chatMessage(message))}
                <Divider />
                <Input
                    icon='attach'
                    iconPosition='left'
                    transparent={true}
                    placeholder='Type a message'
                    style={{ width: '100%' }}
                    action={<Sprite name='send' />}
                />
            </Grid.Column>
        </Grid>
    </Panel>
);

export default Messanger;