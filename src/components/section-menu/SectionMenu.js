import React from 'react';
import './sectionMenu.css'
import AppButton from '../../buttons/AppButton';

const SectionMenu = (props) => {
    return (
        <div className="sectionMenu">
            <div className="expConMenu">
                <button>
                    <i className="bi bi-list"></i>
                </button>
                <span>EXP|CON</span>
            </div>
            {
                props.buttonStyle &&
                <div className="tryNowButton">
                    <AppButton
                        buttonStyle={props.buttonStyle}
                        buttonText={props.buttonText}
                        textColor={props.textColor}
                        redirect="/pricing"
                    ></AppButton>
                </div>
            }
        </div>
    );
}

export default SectionMenu;