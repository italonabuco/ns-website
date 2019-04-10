import React, {Component} from 'react';
import styles from './Button.css';
import scrollToElement from 'scroll-to-element';

class button extends Component{

    scrollHandler = (element) =>{
        scrollToElement(element, {
            offset: -70,
            ease: 'out-circ',
            duration: 1000
        });
    }

    render(){
        let type = [styles.Green];
        if (this.props.type==="transparent") type = [styles.Transparent];

        if(this.props.disabled) type.push(styles.Disabled);

        let scrollElement = "#contact";
        if(this.props.scrollElement) scrollElement = this.props.scrollElement;

        return(
            <div className={type.join(' ')}>
                <button disabled={this.props.disabled} style={this.props.style} onClick={() => this.scrollHandler(scrollElement)}>{this.props.name}</button>
            </div>
        );
    }
};

export default button;