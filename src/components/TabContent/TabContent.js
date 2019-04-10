import React from 'react';
import styles from './TabContent.css';

import TabItems from './TabItems/TabItems';
import TabMenu from './TabMenu/TabMenu';

const tabContent = (props) =>(
    <div className={styles.TabContent}>
        { props.tabMenu ? <TabMenu items={props.tabMenu} menuItemClicked={props.tabMenuItemClicked} active={props.active}/> : null}
        { props.tabItems.map((item, index) => {
            return props.active === index ? <TabItems key={index} items={item}/> : null
        })}
    </div>
);

export default tabContent;