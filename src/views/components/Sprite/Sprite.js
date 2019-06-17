import React from 'react';
import PropTypes from 'prop-types';
import clip from '../../../assets/clip.svg';
import visa from './../../../assets/visa.svg';
import close from '../../../assets/close.svg';
import paypal from './../../../assets/paypal.svg';
import horizontaldots from './../../../assets/horizontaldots.svg';

const sprites = {
    visa,
    clip,
    close,
    paypal,
    horizontaldots
};

const Sprite  = ({ name, customStyle }) => {
    const image = sprites[name]
    return (
        <img src={image} style={customStyle} />
    );
}

Sprite.propTypes = {
    name: PropTypes.string,
    customStyle: PropTypes.string
};

export default Sprite;