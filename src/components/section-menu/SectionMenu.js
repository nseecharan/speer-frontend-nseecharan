import React from 'react';
import './sectionMenu.css'
import '../componentText.css';
import '../../views/views.css';
import AppButton from '../../buttons/AppButton';
import { useState } from 'react';
import { useHistory } from 'react-router';

const SectionMenu = (props) => {

    const history = useHistory();
    const defaultTextColor = props.defaultTextColor ? props.defaultTextColor : "whiteText";

    //using state management to track what css animation classes are applied to the elements
    //with the sectionMenu, menuCircle, and menuOptions classes

    const [circleAnimation, setCircleAnimation] = useState("none");
    const [textAnimation, setTextAnimation] = useState("none");
    const [scaleHeight, setScaleHeight] = useState("none");
    const [menuColors, setMenuColors] = useState({ text: defaultTextColor, background: props.menuBackground })

    function clickMenu() {

        if (circleAnimation === "closeMenu" || circleAnimation === "none") {
            setCircleAnimation(current => current = "openMenu");
            setTextAnimation(current => current = "slideIn");
            setMenuColors(current => current = { text: props.menuTextColor, background: props.menuBackground })
            setScaleHeight(current => current = "scale")
        }
        else {
            setCircleAnimation(current => current = "closeMenu");
            setTextAnimation(current => current = "slideOut");
            setScaleHeight(current => current = "shrink")
            setMenuColors(current => current = { text: defaultTextColor, background: props.menuBackground })
        }
    }

    return (
        <>
            {
                props.button &&
                <div className="tryNowButton">
                    <AppButton
                        buttonId={props.buttonId}
                        button={props.button}
                        buttonText={props.buttonText}
                        redirect="/pricing"
                    ></AppButton>
                </div>
            }
            <div className={"sectionMenu " + scaleHeight}>
                <div className="expConMenu">
                    <div id="menuCircle" className={"circle " + menuColors.background + " " + circleAnimation}>
                    </div>
                    <button onClick={clickMenu}>
                        <i className={"bi bi-list " + menuColors.text + "Text"}></i>
                    </button>
                    <span className={menuColors.text + "Text"}>EXP|CON</span>
                    <div className={"menuOptions " + textAnimation}>
                        <p className={menuColors.text + "Text"}>WHAT IS IT</p>
                        <p className={props.disablePerks ? "disabled" : "menuItem"} onClick={e => {
                            if (!props.disablePerks) {
                                history.push("/pricing")
                            }
                        }}>PERKS</p>
                        <p className="menuItem" onClick={e => { history.push("/pricing") }}>PRICING</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionMenu;