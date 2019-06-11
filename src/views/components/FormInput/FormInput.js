import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {
    Form,
    Input
} from 'semantic-ui-react';
import TextareaAutosize from "react-textarea-autosize";

import * as styles from './FormInput.less';

const FormInput = props => {
    // const screenSize = window.innerWidth  || document.body.clientWidth;
	// const isMobile = screenSize < 420
    return (
        <Form.Field
            style={props.customStyle}
            className={props.edit ? styles.columnWrapper : styles.rowWrapper}
        >
            <span className={styles.fieldLabel}>{props.title}</span>
            {props.edit ? (
                <Fragment>
                    {props.type !== 'textarea' ? (
                        <Input placeholder={props.title} />
                    ) : (
                        <TextareaAutosize
                            minRows={3}
                            maxRows={6}
                            placeholder={props.title}
                            style={{ marginTop: '10px' }}
                        />
                    )}
                </Fragment>
            ) : (
                <div className={styles.textWrapper}>
                    <span className={styles.fieldText}>{props.value}</span>
                </div>
            )}
        </Form.Field>
    );
}


FormInput.propTypes = {
    edit: PropTypes.bool,
    customStyle: PropTypes.object,
    title: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string
};

export default FormInput;
