import React from 'react';
import styles from './TabMenuItem.css';

const tabMenuItem = (props) =>{
    
    let classesLine = [styles.TabMenuLine];
    let classesTitle = [styles.TabMenuItemTitle];
    if(props.active){
        classesLine.push(styles.Active);
        classesTitle.push(styles.Active);
    }
    return(
        <div className={styles.TabMenuItem}>
            <div className={classesTitle.join(' ')} onClick={(key) => props.clicked(props.key)}>
                {props.title}
            </div>
            <div className={classesLine.join(' ')}></div>
        </div>
    );
}

export default tabMenuItem;