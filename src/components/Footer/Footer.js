import React, {Component} from 'react';
import styles from './Footer.css';
import Logo from '../Logo/Logo';

import logoWhite from '../../assets/logos/logoWhite.png';
import {withRouter} from 'react-router-dom';
import scrollToElement from 'scroll-to-element';


class Footer extends Component{

    goToHomeTab = () =>{
        let hash = "#tab";
        
        if(this.props.location.hash == hash && this.props.location.pathname == "/"){
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }else{
            this.props.history.push({pathname:"/", hash: hash});
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }
    }

    goToEmpresaTab = () =>{
        let hash = "#tab";
        if(this.props.location.hash == hash && this.props.location.pathname == "/empresa"){
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }else{
            this.props.history.push({pathname:"/empresa", hash: hash});
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }
    }

    render(){
        return(
            <div className={styles.Footer}>
                <div className={styles.FooterInfo}>
                    <div className={styles.FooterInfoItem} onClick={this.goToHomeTab}>
                        <h3>Serviços</h3>
                        <p>Aplicações Móveis</p>
                        <p>Desenvolvimento Web</p>
                        <p>Consultoria e Inovação em TI</p>
                    </div>
                    <div className={styles.FooterInfoItem} onClick={this.goToHomeTab}>
                        <h3>Vantagens</h3>
                        <p>UI/UX Design</p>
                        <p>Compromisso</p>
                        <p>Desenvolvimento ágil</p>
                    </div>
                    <div className={styles.FooterInfoItem} onClick={this.goToEmpresaTab}>
                        <h3>Empresa</h3>
                        <p>Visão</p>
                        <p>Missão</p>
                        <p>Valores</p>
                    </div>
                    <div className={styles.FooterInfoItem}>
                        <h3>Contato</h3>
                        <p className={styles.NumberNone}>(99) 98189-4692</p>
                        <p className={styles.TextNone}>info@nabucosoftware.com</p>
                    </div>
                </div>
                <div className={styles.FooterDivider}></div>
                <p className={styles.FooterCopyRight}>Copyright © 2019 Nabuco Software. Todos os Direitos Reservados. </p>
            </div>
        );
    }
} 

export default withRouter(Footer);