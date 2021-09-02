import React, { useEffect } from 'react';
import './appButtons.scss';
import { useHistory } from 'react-router-dom';

const AppButton = (props) => {

    const history = useHistory();
    const redirect = props.redirect ? props.redirect : '/';
    const { background, textColor } = props.button;
    const text = props.buttonText;
    const buttonId = props.buttonId ? props.buttonId : "buttonId";

    function routeClick() {
        history.push(redirect);
    }

    //updates the properties in the element, but the properties does not update the position css variables
   // /*
    useEffect(() => {
        document.querySelector("#" + buttonId).onmousemove = function (e) {
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            e.target.style.setProperty('--x', x + 'px');
            e.target.style.setProperty('--y', y + 'px');
        };

        console.log(buttonId)
    })
   // */
    
    return (
        <button id={buttonId}
            className={background !== 'special' ? "standard " + background + " " + textColor + "Text" : 'btn-mix'}
            data-text={text}
            onClick={routeClick}  
        >
        </button>
    )
}

export default AppButton;