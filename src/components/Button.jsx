import React from 'react';
import './button.css'

function Button(props) {
    var classes = 'Button '
    if(props.icon === 'X'){
        classes += 'x'
    }
    if(props.icon === 'O'){
        classes += 'o'
    }
    console.log(classes)
    return ( 
        <button className={classes}onClick={props.click}>
            {props.icon}
        </button>
     );
}

export default Button;