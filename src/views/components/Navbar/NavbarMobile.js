import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Item } from 'semantic-ui-react';
import logo from './../../../assets/logo.svg';
import closeIcon from './../../../assets/close.svg';
import hamburgerIcon from './../../../assets/hamburger.svg';
import { navbarLinks } from './../../../utils/navbarLinks';
import * as styles from './NavbarMobile.less';

const NavbarMobile = ({ children, onToggle, visible }) => (
  <Fragment>
    <div className={styles.logoWrapper}>
      <Link to={`${process.env.PUBLIC_URL}`}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <img
        alt="hamburger"
        onClick={() => onToggle()}
        src={!visible ? hamburgerIcon : closeIcon }
        style={{ width: '28px' }}
        className={styles.navbarIcon}
      />
    </div>
    {!visible ? children : (
      <Menu
        text
        vertical
        className={styles.navbarLinks}
      >
        {navbarLinks.map(option => (
          <Item
            {...option}
            key={option.value}
            className={styles.navbarItem}
          />
        ))}
      </Menu>
    )}
  </Fragment>
);

NavbarMobile.propTypes = {
  children: PropTypes.node,
  onToggle: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default NavbarMobile;
