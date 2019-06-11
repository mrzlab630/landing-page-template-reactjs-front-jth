import PropTypes from 'prop-types';
import React from 'react';
import { Container, Grid, Menu } from 'semantic-ui-react';

import facebookIcon from './../../../assets/facebook.svg';
import twitterIcon from './../../../assets/twitter.svg';
import instagramIcon from './../../../assets/instagram.svg';

import * as styles from './Footer.less';

const greyText = { color: '#A7A8AA' }

const Footer = () => (
  <div className={styles.footer}>
    <Container>
      <Grid columns='equal'>
        <Grid.Row className={styles.footerMenuWrapper}>
          <Grid.Column>
            <Menu text vertical>
              <Menu.Item style={greyText}>About us</Menu.Item>
              <Menu.Item style={greyText}>Blog</Menu.Item>
              <Menu.Item style={greyText}>Feedback</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu text vertical>
              <Menu.Item style={greyText}>Community</Menu.Item>
              <Menu.Item style={greyText}>Trust & Safety</Menu.Item>
              <Menu.Item style={greyText}>Help & Support</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu text vertical>
              <Menu.Item style={greyText}>Terms of Service</Menu.Item>
              <Menu.Item style={greyText}>Privacy Poicy</Menu.Item>
              <Menu.Item style={greyText}>Desktop App</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu text vertical>
              <Menu.Item style={greyText}>Cookie Police</Menu.Item>
              <Menu.Item style={greyText}>Enterprise Solutions</Menu.Item>
              <Menu.Item style={greyText}>Mobile</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column computer={5} mobile={16} className={styles.footerSocialWrapper}>
            <Menu className={styles.footerSocialMenu} text vertical>
              <Menu.Item>
                <Menu secondary>
                  <Menu.Menu className={styles.footerSocialLinks} position='right'>
                    <Menu.Item><img style={{ margin: '0 5px'}} src={facebookIcon} /></Menu.Item>
                    <Menu.Item><img style={{ margin: '0 5px'}} src={twitterIcon} /></Menu.Item>
                    <Menu.Item><img style={{ margin: '0 5px'}} src={instagramIcon} /></Menu.Item>
                  </Menu.Menu>
                </Menu>
              </Menu.Item>
              <Menu.Item className={styles.footerCopyright}>(c) 2019 Join To Hire. All rights reserved</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

Footer.propTypes = {
  minimal: PropTypes.bool,
};

export default Footer;
