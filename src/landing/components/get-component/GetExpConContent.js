import React from 'react';
import AppButton from '../../../buttons/AppButton';
import './getExpConContent.css';
import '../componentText.css';

const GetExpConContent = () => {

    return (

        <div>
            <div className="buyNow">
                <div className="buyNowText">
                    <h4 className="redText s74">GET EXP|CON NOW</h4>
                    <h6 className="whiteText s51-61">Purchase and download the app.</h6>
                </div>
                <div className="buyButton">
                    <AppButton buttonStyle="special" textColor="red"></AppButton>
                </div>
            </div>
        </div>
    );
}

export default GetExpConContent;