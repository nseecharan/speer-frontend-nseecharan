import React from 'react';
import leftSpeaker from '../../images/medium17.png';
import rightSpeaker from '../../images/medium27.png';
import AppButton from '../../buttons/AppButton';
import '../componentText.css';
import './soundContent.css';
import buttonStyles from '../../data/buttonStyles';

const SoundContent = () => {

    return (
        <div>
            <div className="soundText">
                <h4 className="whiteText s74">SUPERIOR SOUND</h4>
                <h6 className="blackText s51-61">Experience live versions of your favourite songs.</h6>
                <AppButton
                    buttonId="soundSeeDemoBtn"
                    button={buttonStyles.fuchsiaOnWhite}
                    buttonText="SEE DEMO"
                />
            </div>
            <div className="speakerDisplay">
            
                <img className="lSpeaker" src={leftSpeaker} alt="left speaker" />
                <img className="rSpeaker" src={rightSpeaker} alt="right speaker" />
                <button className="audioButton">CLICK</button>
            </div>
        </div>
    );
}

export default SoundContent;