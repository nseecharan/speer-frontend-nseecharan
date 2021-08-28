import React from 'react';
import AppButton from '../../../buttons/AppButton';
import './heroContent.css';
import '../componentText.css';

const HeroContent = () => {
    return (
        <div>
            <div className="heroText">
                <h4 className="whiteText s65">INTERACTIVE CONCERT EXPERIENCE</h4>
                <h6 className="whiteText s32"> Experience your favourite artists like never before and from the comfort of your own home.</h6>
                <AppButton buttonStyle="special"></AppButton>
            </div>
        </div>
    );
}

export default HeroContent;