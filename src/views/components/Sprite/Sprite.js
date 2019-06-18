import React from 'react';
import PropTypes from 'prop-types';
import send from '../../../assets/send.svg';
import clip from '../../../assets/clip.svg';
import visa from './../../../assets/visa.svg';
import close from '../../../assets/close.svg';
import paypal from './../../../assets/paypal.svg';
import messageIcon from '../../../assets/messages.svg';
import ellipsesIcon from '../../../assets/ellipses.svg';
import horizontaldots from './../../../assets/horizontaldots.svg';

const sprites = {
    visa,
    clip,
    send,
    close,
    paypal,
    messageIcon,
    ellipsesIcon,
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