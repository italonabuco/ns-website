import React from 'react';
import styles from '../Texts.css';


const sectionTitle = (props) => (
    <h2 className={styles.SectionTitle}>{props.children}</h2>
);

export default sectionTitle;