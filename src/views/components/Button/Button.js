import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './Button.less';

const jhButton = ({ text, color, customStyle }) => (
    <Button
        color={color}
        style={customStyle}
        className={styles.button}
    >{text}</Button>
)

export default jhButton;