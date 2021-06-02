import React from 'react';
const Button = (props) => {
   const bg_color = {
      background: props.bg_clr
   }
   return (
      <button className={`btn btn--${props.kind} CTA`}
        data-id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        onClick={props.handleClick} style={bg_color}> 
           <h4>{props.label}</h4>
      </button>
   )
}
export default Button;