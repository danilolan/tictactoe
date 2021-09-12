import React from 'react';
import './scoreboard.css'

function Scoreboard(props) {
    return ( 
        <div className="scoreboard">
            <h1>Placar</h1>
            <h2>X: {props.x}</h2>
            <h2>O: {props.o}</h2>
        </div>
     );
}

export default Scoreboard;