import React from 'react';
import './bubble_effect.css'
import './ionicons.min.css'
function bubble_effect(props){
    const bg_clr = {
        background: props.bg_color,
        color: props.color,
        "font-size": props.font,
        border: props.border
     }
    return (
        <div className="App">
            <div class='button'>
                <input id='button' type='checkbox' />
                <label for='button'>
                    <div class='button_inner q' name={props.name} onClick={props.handleClick} style={bg_clr}> 
                    <i class='l ion-log-in'></i>
                    <span class='t'>{props.label}</span>
                    <span>
                        <i class='tick ion-checkmark-round'></i>
                    </span>
                    <div class='b_l_quad'>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                        <div class='button_spots'></div>
                    </div>
                    </div>
                </label>
                </div>

        </div>
    )
 }

 export default bubble_effect;