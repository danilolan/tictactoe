import React from 'react';
import './scoreboard.css'

function Scoreboard(props) {
    var classes = 'scoreboard '
    props.type ? classes += 'x' : classes += 'o'

    return ( 
        <div className={classes}>
            <t>{props.icon}</t>
        </div>
     );
}

export default Scoreboard;