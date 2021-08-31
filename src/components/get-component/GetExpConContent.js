import React from 'react';
import AppButton from '../../buttons/AppButton';
import './getExpConContent.css';
import '../componentText.css';
import buttonStyles from '../../data/buttonStyles';

const GetExpConContent = () => {

    return (

        <div>
            <div className="buyNow">
                <div className="buyNowText">
                    <h4 className="redText s74">GET EXP|CON NOW</h4>
                    <h6 className="whiteText s51-61">Purchase and download the app.</h6>
                </div>
                <div className="buyButton">
                    <AppButton
                        button={buttonStyles.special}
                        buttonText={buttonStyles.text.tryNow}
                        redirect="/pricing" />
                </div>
            </div>
        </div>
    );
}

export default GetExpConContent;