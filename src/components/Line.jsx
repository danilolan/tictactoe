import React from 'react';
import './line.css'

function Line(props) {
    let classes = 'line '
    classes += props.horizontal ? 'horizontal ' : ''
    classes += props.vertical ? 'vertical ' : ''

    return ( <div className={classes} style={props.horizontal ? {width: props.size} : {height: props.size}}></div> );
}

export default Line;