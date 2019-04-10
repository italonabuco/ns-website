import React from 'react';
import styles from './TabItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt, faStar, faLightbulb, faFlag, faChartLine, faLaptopCode, faDesktop, faCode, faHatWizard, faHandshake} from '@fortawesome/free-solid-svg-icons';

import TabItemTitle from '../../../UI/Texts/TabItemTitle/TabItemTitle';
import TabItemDescription from '../../../UI/Texts/TabItemDescription/TabItemDescription';


const tabItem = (props) => {

    let icon = null;
    switch(props.item.icon){
        case 'code': 
            icon = faCode;
            break;
        case 'mobile':
            icon = faMobileAlt;
            break;
        case 'lamp':
            icon = faLightbulb;
            break;
        case 'flag':
            icon = faFlag;
            break;
        case 'chart':
            icon = faChartLine;
            break;
        case 'star':
            icon = faStar;
            break;
        case 'design':
            icon = faLaptopCode;
            break;
        case 'agil':
            icon = faHatWizard;
            break;
        case 'compromisso':
            icon = faHandshake;
            break;
        default:
            icon = faDesktop;
            break;
    }

    return (<div className={styles.TabItem} style={props.style}>
        <div className={styles.ItemContent}>
            <div className={styles.ItemIcon}>
                <FontAwesomeIcon icon={icon} fixedWidth size="3x" color="#666"/>
            </div>
            <div className={styles.ItemText}>
                <TabItemTitle>{props.item.title}</TabItemTitle>
                <TabItemDescription >{props.item.description}</TabItemDescription>
            </div>
        </div>
    </div>);
};

export default tabItem;