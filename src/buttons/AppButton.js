import React, { useEffect } from 'react';
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

    useEffect(()=>{

        document.querySelector('.standard').onmousemove = function (e) {

            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
        
            e.target.style.setProperty('--x', x + 'px');
            e.target.style.setProperty('--y', y + 'px');

            console.log( e.target)
        };
    })

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