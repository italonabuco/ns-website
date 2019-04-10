import React from 'react';
import styles from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import MenuIcon from '../../UI/MenuIcon/MenuIcon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) =>{
    let sideDrawerClasses = [styles.SideDrawer, styles.Close];

    if(props.open) sideDrawerClasses = [styles.SideDrawer, styles.Open];

    return (
    <>
        <Backdrop show={props.open} clicked={props.closed}/>
        <header className={sideDrawerClasses.join(' ')}>
            <div className={styles.content}>
                <div>
                    <Button name="CONTATO" type="green" style={{float: 'left'}}/>
                    <div style={{float: 'right', maxWidth: '34px'}} onClick={props.closed}>
                        <FontAwesomeIcon icon={faTimes} fixedWidth size="2x" color="#375837"/>
                    </div>
                </div>
                <div style={{marginTop: '60px'}}>
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
            </div>
        </header>
    </>
    );
};

export default sideDrawer;