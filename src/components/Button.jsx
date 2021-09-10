import React from 'react';
import './button.css'

function Button(props) {
    return ( 
        <button className="Button" onClick={props.click}>
            {props.icon}
        </button>
     );
}

export default Button;