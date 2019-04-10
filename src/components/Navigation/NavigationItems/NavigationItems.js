import React, {Component} from 'react';
import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () =>{
    return(
        <ul className={styles.NavigationItems}>
            <NavigationItem title="HOME" to="/"/>
            <NavigationItem title="EMPRESA" to={{pathname: '/empresa', hash: '#'}}/>
            <NavigationItem title="SERVIÇOS" href="#tab" path="/"/>
            <NavigationItem title="VANTAGENS" href="#tab" path="/"/>
        </ul>
    );
}

export default navigationItems;