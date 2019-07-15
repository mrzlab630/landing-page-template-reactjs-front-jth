import PropTypes from 'prop-types';
import React from 'react';
import { Container, Grid, Menu, Header } from 'semantic-ui-react';


import * as logo from '../../../assets/logo.svg';
import * as facebookIcon from '../../../assets/facebook.svg';
import * as twitterIcon from '../../../assets/twitter.svg';
import * as instagramIcon from '../../../assets/instagram.svg';

import * as styles from './Footer.less';

const greyText = { color: '#000' }


const Footer = () => {

const menuList = {
              company:[
                {link:'/Our-team',title:'Our team'},
                {link:'/contractor',title:'Need a contractor'},
                {link:'/Looking-clients',title:'Looking for clients'},
                {link:'/Service',title:'Terms of Service'},
              ],
              resources:[
                {link:'/SignUp',title:'Sign Up'},
                {link:'/freelancers',title:'Find local freelancers'},
                {link:'/job',title:'Post your job'},
                {link:'/jobs',title:'Find jobs'},
              ],
              help:[
                {link:'/How-it-works',title:'How it works'},
                {link:'/Categories',title:'Categories'},
                {link:'/Contact-Us',title:'Contact Us'},
                {link:'/Blog',title:'Blog'},
              ]
                  };
const copyrightTxT = '© LLC. All rights reserved';
const copyrightInfo = 'Quisque id mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.';

  const renderMenuVertical = Object.keys(menuList).map((itm,idx )=> {

    let rendItems = menuList[itm].map((mItm,mIdx) =>(
        <Menu.Item key={`rendItems-${mIdx}`} style={greyText}>{mItm.title}</Menu.Item>
    ));

    return(
    <Grid.Column style={{paddingTop: '10px'}} key={`renderMenuVertical-${idx}`}>
      <Menu text vertical>
        <Menu.Item>
          <Header as='h3' style={{color: '#EF6722'}}>
            <Header.Content>
              {itm}
            </Header.Content>
          </Header>
        </Menu.Item>
        {
          rendItems
        }
      </Menu>
    </Grid.Column>
  )});

  return(
  <div className={styles.footer}>
    <Container>
      <Grid columns='equal'>
        <Grid.Row className={styles.footerMenuWrapper}>
          <Grid.Column computer={7} mobile={16} className={styles.footerSocialWrapper}>
            <Menu className={styles.footerSocialMenu} text vertical>
              <Menu.Item><img src={logo}/></Menu.Item>
              <Menu.Item className={styles.footerCopyright}>{copyrightInfo}</Menu.Item>
              <Menu.Item>
                <Menu secondary>
                  <Menu.Menu className={styles.footerSocialLinks}>
                    <Menu.Item className={styles.footerSocialLinksIco}><img style={{padding:'0 5px'}} src={facebookIcon}/></Menu.Item>
                    <Menu.Item className={styles.footerSocialLinksIco}><img src={twitterIcon}/></Menu.Item>
                    <Menu.Item className={styles.footerSocialLinksIco}><img src={instagramIcon}/></Menu.Item>
                  </Menu.Menu>
                </Menu>
              </Menu.Item>
              <Menu.Item className={styles.footerCopyright}>{copyrightTxT}</Menu.Item>
            </Menu>
          </Grid.Column>

          {
            renderMenuVertical
          }
        </Grid.Row>
      </Grid>
    </Container>
  </div>
  )};

Footer.propTypes = {
  minimal: PropTypes.bool,
};

export default Footer;
