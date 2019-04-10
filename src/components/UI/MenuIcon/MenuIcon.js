import React from 'react';
import icon from '../../../assets/icons/menuIcon.png';

const menuIcon = (props) => (
    <>
        <img src={icon} style={props.style} onClick={props.clicked}/>
    </>
);

export default menuIcon;