import React from 'react';
import styles from '../TabItemText.css';

const tabItemDescription = (props) =>(
    <p className={styles.TabItemDescription}>{props.children}</p>
);

export default tabItemDescription;