import React, { useEffect } from 'react';
import "./imageContent.css";

const ImageContent = () => {


    useEffect(() => {

        document.querySelector('.imageBg').onmousemove = function (e) {
            var x = e.pageX - e.target.offsetLeft;
            var y = e.pageY - e.target.offsetTop;
            var eleWidth = document.querySelector('.imageBg').clientWidth;
            var eleheight = document.querySelector('.imageBg').clientHeight;
            e.target.style.setProperty('--x', (x - (eleWidth/2)) + 'px');
            e.target.style.setProperty('--y', (y - (eleheight/2)) + 'px');
        };
    })


    return (
        <div>

            <div className="imageBg"></div>


        </div>
    );

}

export default ImageContent;