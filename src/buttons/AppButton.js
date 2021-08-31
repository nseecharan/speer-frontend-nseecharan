import React from 'react';
import './appButtons.scss';
import { useHistory } from 'react-router-dom';

const AppButton = (props) => {

    const history = useHistory();
    const redirect = props.redirect ? props.redirect : '/';
    const {background, textColor} = props.button;
    const text = props.buttonText;

    function routeClick() {
        history.push(redirect);
    }

    return (
        <button
            className={background !== 'special' ? background + " standard " + textColor + "Text" : 'btn-mix'}
            data-text={text}
            onClick={routeClick}
        >
        </button>
    )
}

export default AppButton;