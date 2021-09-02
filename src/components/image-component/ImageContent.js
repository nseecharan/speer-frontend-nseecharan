import React, { useEffect } from 'react';
import "./imageContent.css";

const ImageContent = () => {

    useEffect(() => {

        //circle that follows the mouse
        document.querySelector('.imageBg').onmousemove = function (e) {
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            var eleWidth = document.querySelector('.imageBg').clientWidth;
            var eleheight = document.querySelector('.imageBg').clientHeight;
            e.target.style.setProperty('--x', (x - (eleWidth / 2)) + 'px');
            e.target.style.setProperty('--y', (y - (eleheight / 2)) + 'px');
        };

        var posList = "";
        var circleList = "";
        document.querySelector('.imageBg').onclick = function (e) {

            var circle = "radial-gradient(circle closest-side, black 50%, transparent 50.5%)";
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            var eleWidth = document.querySelector('.imageBg').clientWidth;
            var eleheight = document.querySelector('.imageBg').clientHeight;
            var xStaticPos = (x - (eleWidth / 2)) + 'px';
            var yStaticPos = (y - (eleheight / 2)) + 'px';

            posList = posList === "" ? posList + xStaticPos + " " + yStaticPos : posList + ", " + xStaticPos + " " + yStaticPos;
            circleList = circleList === "" ? circleList + circle : circleList + ", " + circle;

            e.target.style.setProperty('--masks', circleList);
            e.target.style.setProperty('--masksPositions', posList)
        };



    })





    return (
        <div>

            <div className="imageBg"></div>


        </div>
    );

}

export default ImageContent;