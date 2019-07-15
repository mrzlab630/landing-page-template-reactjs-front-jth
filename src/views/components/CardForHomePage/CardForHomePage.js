import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './CardForHomePage.less';


import {
    Container,
    Header,
    Button,
    Image,
    Card,
    Grid
} from 'semantic-ui-react';


const CardForHomePage = ({color='#77C8DF',leftPosition,title,icoUrl,children,button={link:false,title:false}}) =>{

    const ico = () =>{

        return icoUrl
                    ?
                        <Image
                            className={styles.ico}
                            src={icoUrl}
                            size={`large`}
                            centered
                        />
                    : false;
    };

    const cardInfo = (style) =>(
        <Card className={styles.InfoBlock} style={style}>

            <Card.Content style={{padding:'50px'}}>
                <Card.Header
                    style={{':after':{background:color}}}
                    className={styles.header}>
                    <div className={styles.line} style={{background:color}}></div>
                    {title}
                </Card.Header>
                <Card.Description>
                    <p>
                        {children}
                    </p>
                </Card.Description>
            </Card.Content>
            {
                (button && button.link && button.title)
                ?
                    (  <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic>
                                {button.title}
                            </Button>

                        </div>
                    </Card.Content>)
                :
                    false
            }

        </Card>
    );

    const rightMoved = () =>(
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column width={10}>
                    {
                        ico()
                    }
                </Grid.Column>
                <Grid.Column width={6} floated={`right`}>
                    {
                        cardInfo({right:'10%'})
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );

    const leftMoved = () =>(
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    {
                        cardInfo({left:'10%'})
                    }
                </Grid.Column>
                <Grid.Column width={10}>
                    {
                        ico()
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );

    return(
        <Container className={styles.CardForHomePage} style={{background:color}}>

            {
                leftPosition
                    ?
                        leftMoved()
                    :
                        rightMoved()
            }

        </Container>
    );
};


CardForHomePage.prototype = {
    color:PropTypes.string,
    leftPosition:PropTypes.boolen,
    title:PropTypes.string,
    icoUrl:PropTypes.string,
    button:PropTypes.object,
    children:PropTypes.node
};


export default CardForHomePage;
