import React from 'react';
import styles from './TabMenu.css';

import TabMenuItem from './TabMenuItem/TabMenuItem';

const tabMenu = (props) =>(
    <div className={styles.TabMenu}>
        {props.items.map((item, index) =>(
            <TabMenuItem key={index} title={item} active={props.active === index} clicked={() =>props.menuItemClicked(index)}/>
        ))}
    </div>
);

export default tabMenu;