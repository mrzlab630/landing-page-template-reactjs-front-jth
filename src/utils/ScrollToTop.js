import PropTypes from 'prop-types';
import { Component } from 'react';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    // if (this.props.location !== prevProps.location) {
    //   // never triggered
    //   window.scrollTo(0, 0);
    // }
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollToTop;
