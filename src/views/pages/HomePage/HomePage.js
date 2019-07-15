import React from 'react';
import {
    Container,
    Header,
    Button,
    Image,
    Grid,
    Card
} from 'semantic-ui-react';

import * as icoHomePageFirstBlock from '../../../assets/ico-homePage-first-block.svg';
import * as icoDeveloper from '../../../assets/ico-developer.svg';
import * as icoContact from '../../../assets/ico-contact.svg';
import * as icoPost from '../../../assets/ico-post.svg';
import * as picA from '../../../assets/pic-01.svg';
import * as picB from '../../../assets/pic-02.svg';
import * as picC from '../../../assets/pic-03.svg';





import CardForHomePage from './../../components/CardForHomePage';

import * as styles from './HomePage.less';



const HomePage = () =>{

    const cardDataList = [
        {
            title:'Monitor working process',
            ico:icoHomePageFirstBlock,
            color:'#77C8DF',
            leftPosition:false,
            button:{
                link:'/Safe',
                title:'Learn more'},
            info:'Lorem ipsum lorem quisque sodales adipiscing lorem, gravida metus auctor porttitor lorem tempus orci adipiscing. Maecenas mattis: congue, arcu tellus nibh ipsum massa porttitor, congue rutrum porta odio auctor mattis bibendum et.'
        },
        {
            title:'Safe payment',
            ico:icoHomePageFirstBlock,
            color:'#6DD091',
            leftPosition:true,
            button:{
                link:'/Safe',
                title:'Learn more'},
            info:'Payment is simple and fast once you\'re satisfied with the finished product. You pay us and we pay the freelancer only after you approve the work. It\'s a secure, "win-win" arrangement for both sides.'
        },
        {
            title:'Make smarter choices',
            ico:false,
            color:'#F4D462',
            leftPosition:false,
            button:{
                link:'/choices',
                title:'Learn more'},
            info:'We will help you to chose ideal freelancer  for your project. There are very strict rules when selecting and registering freelancers in our platform and those rules include also couple of heavy international technical-interviews done.'
        },
        {
            title:'Project management tool',
            ico:false,
            color:'#A18CD9',
            leftPosition:true,
            button:{
                link:'/tool',
                title:'Learn more'},
            info:'Create contract with your freelancer, use jointohire to chat, create task list, share files, track project milestones, track each task.'
        },
    ];


    const renderCards = cardDataList.map((itm,idx) =>(
        <CardForHomePage
            key={`CardForHomePage-${idx}`}
            title={itm.title}
            icoUrl={itm.ico}
            color={itm.color}
            leftPosition={itm.leftPosition}
            button={itm.button}>
            {itm.info}
        </CardForHomePage>
    ));


    return(
        <div className={styles.HomePage}>

            {/*    First Bloсk     */}

            <Container className={styles.HomePageFirst} fluid textAlign={`center`}>

                <Header as='h1' inverted>
                    <Header.Content>
                        Invite freelancers to get the job done
                    </Header.Content>
                </Header>

                <Header as='h3'  inverted>
                    <Header.Content>
                        Simply describe what type of work you need doing and invite the freelancer to work
                    </Header.Content>
                </Header>

                <Image className={styles.HomePageFirstImg} src={icoHomePageFirstBlock} size={`large`} centered />
                <Button className={styles.HomePageFirstButton}>Get started</Button>

            </Container>


            {/*    Second Bloсk     */}

            <Container className={styles.HomePageSecond}>

                <Grid className={styles.title}>
                    <Grid.Row columns={2}>
                        <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={14}>

                            <Header as='h1'>
                                <Header.Content>
                                    A few benefits
                                </Header.Content>
                            </Header>
                            <Header as='h3'>
                                <Header.Content>
                                    Lorem ipsum fusce, metus, ut et pharetra enim.
                                </Header.Content>
                            </Header>


                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                {
                    renderCards
                }
            </Container>


            {/*    Third  Bloсk     */}

            <Container className={styles.HomePageThird} textAlign={`center`}>
                <Grid className={styles.title}>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                        <p>
                            Lorem ipsum odio, et porttitor malesuada pharetra.
                        </p>
                            <Button className={styles.HomePageThirdButton}>Get Started</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            {/*    Fourth  Bloсk     */}

            <Container className={styles.HomePageFourth} textAlign={`center`} fluid>
                <Grid className={styles.title}>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Header as='h1'>
                                <Header.Content>
                                    Testimonials
                                </Header.Content>
                            </Header>
                            <Header as='h3'>
                                <Header.Content>
                                    Some client love
                                </Header.Content>
                            </Header>
                            <p>
                                “Lorem ipsum lorem quisque sodales adipiscing lorem, gravida metus auctor porttitor lorem tempus orci adipiscing. Maecenas mattis: congue, arcu tellus nibh ipsum massa porttitor, congue rutrum porta odio auctor mattis bibendum et.”
                            </p>

                            <ul className={styles.imgList}>
                                <li><Image src={picA}  size='tiny' circular /></li>
                                <li className={styles.centerImg}><Image src={picB}  size='tiny' circular /></li>
                                <li><Image src={picC}  size='tiny' circular /></li>
                            </ul>



                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            {/*    Fifth  Bloсk     */}

            <Container className={styles.HomePageFifth} fluid>


                <Container>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column className={styles.titleBlock}>
                            <Header as='h1' inverted>
                                <Header.Content>
                                    How it works
                                </Header.Content>
                            </Header>
                            <Header as='h3' inverted>
                                <Header.Content>
                                    Some client love
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>

                            <Card className={styles.cardInfo} >
                                <Image src={icoPost}  />
                                <Card.Content style={{borderTop:'none'}}>
                                    <Card.Header className={styles.title} >Post a job</Card.Header>
                                    <Card.Description className={styles.info}>
                                        Lorem ipsum a nec lorem morbi leo quisque ultricies ut. Vitae, nulla amet, malesuada maecenas malesuada amet.
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                        <Grid.Column>

                            <Card className={styles.cardInfo} >
                                <Image src={icoContact}  />
                                <Card.Content style={{borderTop:'none'}}>
                                    <Card.Header className={styles.title} >Contact dedicated project manager</Card.Header>
                                    <Card.Description className={styles.info}>
                                        Lorem ipsum a nec lorem morbi leo quisque ultricies ut. Vitae, nulla amet, malesuada maecenas malesuada amet.                                    </Card.Description>
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                        <Grid.Column>

                            <Card className={styles.cardInfo} >
                                <Image src={icoDeveloper}  />
                                <Card.Content style={{borderTop:'none'}}>
                                    <Card.Header className={styles.title} >For developer contact for technical interview</Card.Header>
                                    <Card.Description className={styles.info}>
                                        Lorem ipsum a nec lorem morbi leo quisque ultricies ut. Vitae, nulla amet, malesuada maecenas malesuada amet.                                    </Card.Description>
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
            </Container>



        </div>);
};

export default HomePage;