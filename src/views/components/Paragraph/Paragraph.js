import React from 'react';
import PropTypes from 'prop-types';

const Paragraph  = ({ color, fontSize, customStyles = {}, children }) => {
    const style = {
        color,
        fontSize
    };
    const paragraphStyle = {
        ...style,
        ...customStyles
    }
    return (
        <p style={paragraphStyle}>{children}</p>
    );
}

Paragraph.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    customStyles: PropTypes.object
};

export default Paragraph;