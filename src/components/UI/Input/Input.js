import React from 'react';
import styles from './Input.css';

const input = (props) =>{

    let inputElement = null;

    let inputClasses = [styles.Field];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(styles.Invalid);
    }

    switch(props.elementType){
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>;
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}/>
            break;
    }

    return(
        <>
            {inputElement}
        </>
    );
}

export default input;