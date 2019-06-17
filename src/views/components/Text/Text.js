import React from 'react';
import PropTypes from 'prop-types';

const Text  = ({ color, children }) => {
    const style = {
        color
    };
    return (
        <span style={style}>{children}</span>
    );
}

Text.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string
};

export default Text;