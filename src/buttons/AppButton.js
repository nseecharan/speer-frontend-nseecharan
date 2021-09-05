import React, { useEffect } from 'react';
import './appButtons.scss';
import { useHistory } from 'react-router-dom';

const AppButton = (props) => {

    const history = useHistory();
    const redirect = props.redirect ? props.redirect : '/';
    const { background, textColor } = props.button;
    const text = props.buttonText;
    const buttonId = props.buttonId ? props.buttonId : "buttonId";
    const buttonPosition = props.buttonPosition ? props.buttonPosition : "relative";
    
    function routeClick() {
        history.push(redirect);
    }

    useEffect(() => {
        document.querySelector("#" + buttonId).onmousemove = function (e) {
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            e.target.style.setProperty('--x', x + 'px');
            e.target.style.setProperty('--y', y + 'px');
        };
    })

    return (
        <button id={buttonId}
            className={background !== 'special' ? "standard " + background + " " + textColor + "Text " + buttonPosition : 'btn-mix ' + buttonPosition}

            data-text={text}
            onClick={routeClick}
        >
        </button>
    )
}

export default AppButton;