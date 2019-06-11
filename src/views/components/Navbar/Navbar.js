import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';

import NavbarChildren from './NavbarChildren';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

class NavBar extends Component {
  state = {
    visible: false,
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, rightItems, minimal } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavbarMobile
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            {children}
          </NavbarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavbarDesktop minimal={minimal} rightItems={rightItems} />
          {children}
        </Responsive>
      </div>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.node,
  rightItems: PropTypes.arrayOf(PropTypes.object),
  minimal: PropTypes.bool,
};

export default NavBar;
