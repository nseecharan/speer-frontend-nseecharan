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
                props.button &&
                <div className="tryNowButton">
                    <AppButton
                        button = {props.button}
                        buttonText={props.buttonText}
                        redirect="/pricing"
                    ></AppButton>
                </div>
            }
        </div>
    );
}

export default SectionMenu;