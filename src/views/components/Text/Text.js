import React from 'react';
import PropTypes from 'prop-types';

const Text  = ({ color, fontSize, children }) => {
    const style = {
        color,
        fontSize
    };
    return (
        <span style={style}>{children}</span>
    );
}

Text.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    fontSize: PropTypes.string
};

export default Text;