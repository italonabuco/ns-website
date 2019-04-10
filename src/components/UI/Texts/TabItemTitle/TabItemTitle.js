import React from 'react';
import styles from '../TabItemText.css';

const tabItemTitle = (props) => (
    <h3 className={styles.TabItemTitle}>{props.children}</h3>
);

export default tabItemTitle;