import PropTypes from 'prop-types';
import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as styles from './NavbarDesktop.less';
import { navbarLinks } from './../../../utils/navbarLinks';
import logo from './../../../assets/logo-w.svg';
import notificationIcon from './../../../assets/notification.svg';
import * as logoW from '../../../assets/logo-w.svg';


const NavbarDesktop = ({ minimal = true }) => {

  const links = navbarLinks.filter(link => link.key === 'HowItWorks'
                                                                      || link.key === 'Freelancers'
                                                                      || link.key === 'Login'
                                                                      || link.key === 'SignUp'
                                                                      || link.key === 'PostaJob')

  return (
    <div style={{ background: '#C35571'}}>
      <Container>
        <div
          className={styles.navbarWrapper}
        >
          <Link to={`${process.env.PUBLIC_URL}`}>
            <img src={logoW} width={`150`} height={`24`} alt='logo' />
          </Link>
          <Menu secondary>
            <Menu.Menu>

            </Menu.Menu>
          </Menu>
          <Menu style={{ margin: 0 }} secondary>
            <Menu.Menu>
              {links.map(option => (
                  <Menu.Item
                      header
                      {...option}
                      key={option.value}
                      className={styles.navbarText}
                  />
              ))}
            </Menu.Menu>
          </Menu>
        </div>
      </Container>
    </div>
  );
}

NavbarDesktop.propTypes = {
  minimal: PropTypes.bool,
  rightItems: PropTypes.arrayOf(PropTypes.object),
};

export default NavbarDesktop;

