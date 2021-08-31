import React from 'react';
import '../componentText.css';
import OptionContent from './option-component/OptionContent';
import './optionsContent.css';

const OptionsContent = (props) => {

    return (
        <div className="optionDisplay">
            <div className="optionTitle">
                <h3 className="whiteText s74">{props.optionData.title}</h3>
                {props.optionData.subTitle !== undefined &&
                    <h6 className="whiteText s51-80">{props.optionData.subTitle}</h6>
                }
            </div>
            <div className="options">
                {props.optionData.options.map((option, index) => {

                    return (
                        <OptionContent
                            key={index}
                            option={option}
                            headingColor={props.headingColors[index]}
                            detailsColor={props.detailsColor}
                            textFormat={props.textFormat}
                            button={props.buttons !== undefined ? props.buttons[index] : undefined}
                            buttonText={props.buttonText}
                            redirect={props.redirect}
                        />
                    )
                })}
            </div>
        </div>
    );

}

export default OptionsContent;