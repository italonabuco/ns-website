import React from 'react';
import styles from './SectionBox.css';

import SectionTitle from '../UI/Texts/SectionTitle/SectionTitle';
import SectionDescription from '../UI/Texts/SectionDescription/SectionDescription';
import LineDivider from '../UI/LineDivider/LineDivider';

const sectionBox = (props) => {

    let description = null;
    if(props.description){
        description = props.description.map((item, index) => (
            <SectionDescription key={index}>{item}</SectionDescription>
        ));
    }

    let styleInline = {backgroundColor: ''+props.bgColor};
    if(props.image){
        styleInline = { background: `#fff url('${props.image}') no-repeat center center`, backgroundSize: 'cover'};
    }

    return (
        <section className={styles.SectionBox} style={styleInline} id={props.id}>
            {props.space ? <div style={{paddingTop: '80px'}}></div> : null}
            <SectionTitle>
                {props.title}
            </SectionTitle>
            {props.divider ? <LineDivider/> : null}
            {description}
            {props.children}
        </section>
    );
};

export default sectionBox;