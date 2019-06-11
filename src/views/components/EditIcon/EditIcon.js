import React from 'react';
import { Image } from 'semantic-ui-react';
import editIcon from './../../../assets/pencilorange.svg';
import styles from './EditIcon.less';

const EditIcon = () => (
  <div
    className={styles.editWrapper}
  >
    <Image className={styles.editIcon} src={editIcon} />
    <span className={styles.editLabel}>Edit</span>
  </div>
);

export default EditIcon;