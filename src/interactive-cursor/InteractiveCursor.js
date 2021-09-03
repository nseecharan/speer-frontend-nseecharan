import React, { useEffect } from 'react';
import "./interactiveCursor.css";
import '../components/componentText.css';

const InteractiveCursor = (props) => {

    const sectionClass = props.sectionClass;
    const cursorClass = props.cursorClass;

    useEffect(() => {

        const curStyle = document.querySelector("." + cursorClass).style;

        curStyle.textAlign = "center";
        curStyle.fontSize = "2em";
        curStyle.border = "4px solid";
        curStyle.color = props.color;
        curStyle.zIndex = "1000";
        curStyle.margin = "-80px auto 0 auto";
        curStyle.width = "max-content";
        curStyle.height = "max-content";
        curStyle.borderRadius = "50%";
        curStyle.pointerEvents = "none";
        curStyle.padding = props.paddingOffset;
        curStyle.position = "relative";
        curStyle.top = props.yOffset;
        curStyle.left = props.xOffset;
        curStyle.transition = "opacity 0.3s ease, transform 0.3s ease-out";

        document.querySelector("." + sectionClass).onmousemove = function (e) {
            //track mouse movements within the element, only needed for tracking
            //mouse movements as it will also return any nested elements
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;

            //get height and width of element to help with centering the cursor
            var eleWidth = document.querySelector("." + sectionClass).clientWidth;
            var eleheight = document.querySelector("." + sectionClass).clientHeight;

            //update css properties related to the cursor
            document.querySelector("." + cursorClass).style.transform = "translate(" + (x - (eleWidth / 2)) + "px ," + (y - (eleheight / 2)) + "px)";
            document.querySelector("." + cursorClass).style.opacity = "1";
        };
        document.querySelector("." + sectionClass).onmouseout = function () {
            document.querySelector("." + cursorClass).style.opacity = "0";
        }
    })

    return (
        <div className={cursorClass}>
            <p className="cursorText">{props.cursorText}</p>
        </div>
    );

}

export default InteractiveCursor;