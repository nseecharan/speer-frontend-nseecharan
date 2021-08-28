import React from 'react';
import './appButtons.scss';

const AppButton = (props) => {

    return (
        <button 
        className={props.buttonStyle === 'white' ? props.buttonStyle : 'btn-mix'}
        data-text={!props.buttonText? "TRY IT NOW" : props.buttonText}
        >
        </button>
    )

}

export default AppButton