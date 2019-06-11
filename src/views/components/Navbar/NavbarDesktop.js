import PropTypes from 'prop-types';
import React from 'react';
import { Menu, Dropdown, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as styles from './NavbarDesktop.less';
import { navbarLinks } from './../../../utils/navbarLinks';
import logo from './../../../assets/logo.svg';
import notificationIcon from './../../../assets/notification.svg';

const NavbarDesktop = ({ minimal = true }) => {

  const links = navbarLinks.filter(link => link.key === 'Projects' || link.key === 'Reports' || link.key === 'Messages')

  return (
    <div style={{ background: '#fff' }}>
      <Container>
        <div
          className={styles.navbarWrapper}
        >
          <Link to={`${process.env.PUBLIC_URL}`}>
            <img src={logo} alt='logo' />
          </Link>
          <Menu secondary>
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
          <Menu style={{ margin: 0 }} secondary>
            <Menu.Menu>
              <Menu.Item>
                <img src={notificationIcon} alt='notification' style={{ width: '14px' }} />
              </Menu.Item>
              <Menu.Item>
                <Dropdown text='Roman'>
                  <Dropdown.Menu>
                    <Dropdown.Item >
                      <Link className={styles.link} to={`${process.env.PUBLIC_URL}/account`}>Account</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link className={styles.link} to={`${process.env.PUBLIC_URL}/billing`}>Billing</Link>
                    </Dropdown.Item>
                    <Dropdown.Item text='Logout' />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
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

