import React from 'react';
import styles from './Logo.css';

const logo = (props) =>{
    return (
        <div className={styles.logo} style={props.style}>
            <img src={props.srcLogo} alt={"Logo Nabuco Software"}/>
        </div>
    );
};

export default logo;