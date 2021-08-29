import React from 'react';
import './appButtons.scss';
import {useHistory } from 'react-router-dom';

const AppButton = (props) => {

    const history = useHistory();
    const redirect = props.redirect ? props.redirect : '/';

    function routeClick() {
        history.push(redirect);
    }

    return (
        <button
            className={props.buttonStyle === 'white' ? "whiteButton " + props.textColor + "Text" : 'btn-mix'}
            data-text={!props.buttonText ? "TRY IT NOW" : props.buttonText}
            onClick={routeClick}
        >
        </button>
    )
}

export default AppButton