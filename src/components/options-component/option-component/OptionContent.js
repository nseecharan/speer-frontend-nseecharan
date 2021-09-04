import React from 'react';
import '../../componentText.css';
import AppButton from '../../../buttons/AppButton';
import '../optionsContent.css';
import '../../componentText.css';

const OptionContent = (props) => {

    const { optionHeading, optionSubHeading, eyeCatchHeading, optionDetails, rating } = props.option;
    const { styleHeding, styleSubHeding, styleEyeCatch, styleDetails } = props.textFormat;

    return (
        <div className="option">
            <h3 className={styleHeding + " " + props.headingColor + "Text"}>{optionHeading}</h3>
            <h3 className={(rating ? "rating " : ("underline " + props.headingColor + "Text ")) + styleSubHeding}>{rating ? rating : ""}</h3>
            <h3 className={styleSubHeding + " " + props.headingColor + "Text"}>{optionSubHeading}</h3>
            <h1 className={styleEyeCatch + " " + props.headingColor + "Text"}>{eyeCatchHeading}</h1>
            {
                optionDetails.map((detail, index) => {
                    return (<p key={index} className={props.detailsColor + "Text " + styleDetails}>{detail}</p>)
                })
            }
            {props.button !== undefined &&
                <AppButton
                    buttonId={props.buttonId}
                    button={props.button}
                    buttonText={props.buttonText}
                    redirect={props.redirect}
                />
            }
        </div>
    )
}

export default OptionContent;