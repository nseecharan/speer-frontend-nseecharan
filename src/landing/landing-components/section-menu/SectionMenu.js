import React from 'react';
import './sectionMenu.css'
import AppButton from '../../../buttons/AppButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SectionMenu = (props) => {
    return (
        <div className="sectionMenu">
            <div>
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
                        ></AppButton>
                    </div>
            }
            </div>
        </div>
    );
}

export default SectionMenu;