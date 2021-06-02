import React from 'react';
import './collapse_loader.css'


function collapse_loader(props){
    <style>
  {`.Loader-blob::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${props.bg_color};
    border-radius: 50%;
    position: absolute;
    animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64) 2.5s;
}`}
</style>

    const loader_clr = {
        bg_clr:{
            background: props.bg_color,
            ':before':{
                background: props.bg_color
            },
            ':after':{
                background: props.bg_color
            }
        }
    }

    
    return (
        <div className="App">
           <div class="Loader">
            <div class="Loader-circle" style={loader_clr.bg_clr}></div>
            <div className="Loader-blob"></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" styles="display: none;">
            <defs>
                <filter id="tooltip-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </defs>
            </svg>
        </div>
    );   
 }

 export default collapse_loader;