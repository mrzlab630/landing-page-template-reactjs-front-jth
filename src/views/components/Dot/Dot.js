import PropTypes from 'prop-types';
import React from 'react';
import * as styles from './Dot.less';

const style = {
    orange: { backgroundColor: '#EF6722', border: '2px solid #fff' },
    yellow: { backgroundColor: '#EDCF56', border: '2px solid #fff'  },
    green: { backgroundColor: '#6CC93E', border: '2px solid #fff'  },
    greyOutline: { border: '2px solid #C5C6C7', backgroundColor: '#fff' },    
    orangeOutline: { border: '2px solid #EF6722', backgroundColor: '#fff' },
    violetOutline: { border: '2px solid #6647F2', backgroundColor: '#fff' },
    yellowOutline: { border: '2px solid #FC9E30', backgroundColor: '#fff' },
    blueOutline: { border: '2px solid #30A6FC', backgroundColor: '#fff' }
}

const Dot = ({ color, customStyle }) => {
    const dotStyle = { ...customStyle, ...style[color] }
    return (
        <div
            style={dotStyle}
            className={styles.Dot}
        />
    );
}

export default Dot;