import React, {Component} from 'react';
import styles from './NavigationItem.css';
import {NavLink, Link, withRouter} from 'react-router-dom';
import scrollToElement from 'scroll-to-element';

class NavigationItem extends Component{

    goToPath = (path, hash) =>{
        
        if(this.props.location.hash == hash && this.props.location.pathname == path){
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }else{
            this.props.history.push({pathname:path, hash: hash});
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }
    }

    render(){
        return(
            <li className={styles.NavigationItem}>
                {
                    this.props.href ?
                    <a onClick={() => this.goToPath(this.props.path, this.props.href)}>{this.props.title}</a>:
                    <NavLink exact to={this.props.to} activeClassName={styles.active}>{this.props.title}</NavLink>
                }
            </li>
        );
    }
}

export default withRouter(NavigationItem);