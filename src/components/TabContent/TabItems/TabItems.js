import React from 'react';
import styles from './TabItems.css';
import TabItem from './TabItem/TabItem';

const tabItems = (props) => (
    <div className={styles.TabItems}>
        { props.items.map((item, index) => (
            <TabItem item={item} key={index}/>
        ))}
    </div>
);

export default tabItems;