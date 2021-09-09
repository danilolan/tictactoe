import React from 'react';
import './button.css'

function Button(props) {
    return ( 
        <button className="Button">
            {props.icon}
        </button>
     );
}

export default Button;