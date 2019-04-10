import React from 'react';
import styles from '../Texts.css';

const sectionDescription = (props) =>(
    <p className={styles.SectionDescription}>{props.children}</p>
);

export default sectionDescription;