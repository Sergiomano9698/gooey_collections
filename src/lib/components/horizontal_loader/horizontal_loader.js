import React from 'react';
import './horizontal_loader.css'
function horizontal_loader(){
    return (
        <div className="App">
            <div id="menu">
                <svg class="menu__item"></svg>
                <svg class="menu__item"></svg>
                <svg class="menu__item"></svg>
                <svg class="menu__item"></svg>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
            </svg>
        </div>
    );   
 }

 export default horizontal_loader;