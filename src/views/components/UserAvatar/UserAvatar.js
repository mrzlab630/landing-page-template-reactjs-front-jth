import PropTypes from 'prop-types';
import React from 'react';
import Dot from '../Dot';
import * as styles from './UserAvatar.less';

const UserAvatar = ({ src, badge, customStyle }) => (
    <div style={{
        margin: 'auto',
        maxWidth: '64px',
        maxHeight: '64px',
        position: 'relative'
    }}>
        <img
            src={src}
            style={customStyle}
            className={styles.avatar}
        />
        <Dot
            color={badge}
            customStyle={{
                position: 'absolute',
                top: '5px',
                right: '-5px',
            }}
        />
    </div>
);


UserAvatar.propTypes = {
    url: PropTypes.string,
    badge: PropTypes.string
};

export default UserAvatar;
