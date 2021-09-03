import React, { useEffect } from 'react';
import "./imageContent.css";
import '../componentText.css';
import buttonStyles from '../../data/buttonStyles';
import AppButton from "../../buttons/AppButton";
import InteractiveCursor from '../../interactive-cursor/InteractiveCursor';


const ImageContent = () => {

    const maskClass = "imageBg";
    useEffect(() => {

        //will adds a circle cutout based on where the section was clicked
        var posList = "";
        var circleList = "";
        document.querySelector("." + maskClass).onclick = function (e) {
            var circle = "radial-gradient(circle closest-side, black 30%, transparent 30.2%)";
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            var eleWidth = document.querySelector("." + maskClass).clientWidth;
            var eleheight = document.querySelector("." + maskClass).clientHeight;
            var xStaticPos = (x - (eleWidth / 2)) + 'px';
            var yStaticPos = (y - (eleheight / 2)) + 'px';
            posList = posList === "" ? posList + xStaticPos + " " + yStaticPos : posList + ", " + xStaticPos + " " + yStaticPos;
            circleList = circleList === "" ? circleList + circle : circleList + ", " + circle;
            if (e.target.className === maskClass) {
                e.target.style.setProperty('--masks', circleList);
                e.target.style.setProperty('--masksPositions', posList)
            }
        };
    })

    return (
        <div>
            <InteractiveCursor
                sectionClass={maskClass}
                cursorText="REVEAL"
                cursorClass="imageCursor"
                paddingOffset="0.5em"
                xOffset=""
                yOffset="465px"
                color="black"
            />
            <div className={maskClass}>
                <div className="blueHiddenText">
                    <h4 className="blueText s74">FRONT ROW SEATS</h4>
                    <h6 className="blueText s51-61">Experience concerts up close and personal.</h6>
                </div>
            </div>
            <div>
                <div className="demoBtn">
                    <div className="imageText">
                        <h4 className="whiteText s74">FRONT ROW SEATS</h4>
                        <h6 className="blackText s51-61">Experience concerts up close and personal.</h6>
                    </div>
                    <AppButton
                        buttonId={"imageSeeDemoBtn"}
                        button={buttonStyles.yellowOnWhite}
                        buttonText="SEE DEMO"
                    />
                </div>
            </div>

        </div>
    );

}

export default ImageContent;