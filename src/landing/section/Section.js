import React from 'react';
import SectionMenu from '../landing-components/section-menu/SectionMenu';
import './section.css';

const Section = (props) => {
    
    const buttonStyle = props.buttonTopRight;

    console.log(props.color)
    
    return (
        <div className = {props.color + " sectionArea"}>
            <SectionMenu buttonStyle={buttonStyle}></SectionMenu>
            <div>TEST</div>
            <div>TEST</div>
            <div>TEST</div>
        </div>
    );
}

export default Section;