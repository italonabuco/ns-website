import React, {Component} from 'react';
import styles from './Toolbar.css';
import logoWhite from '../../../assets/logos/logoWhite.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Button from '../../UI/Button/Button';
import MenuIcon from '../../UI/MenuIcon/MenuIcon';
import {withRouter} from 'react-router-dom';

class Toolbar extends Component{

    render(){

        let classes = [styles.toolbar];
        
        const bgOr = this.props.location.pathname !== "/";

        if(this.props.bg || bgOr) classes.push(styles.background);
    
        return(
            <header className={classes.join(' ')}>
                <div className={styles.content}>
                    <Logo srcLogo={logoWhite} style={{height: '70%'}}/>
                    <div className={styles.menuRight}>
                        <nav className={styles.DesktopOnly} style={{float: 'left'}}>
                            <NavigationItems/>
                        </nav>
                        <div className={styles.menuAction}>
                            <div className={styles.menuButton}>
                                <Button name="CONTATO" type="green" style={{float: 'left'}}/>
                            </div>
                            <div className={styles.menuIcon}>
                                <MenuIcon style={{float: 'right', maxWidth: '34px', position: 'sticky'}} clicked={this.props.openSideDrawer}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}



export default withRouter(Toolbar);