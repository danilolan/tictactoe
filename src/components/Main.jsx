import React from 'react';
import './main.css'

import Button from './Button'
import Line from './Line';

class Main extends React.Component {
    render() { 
        return <div className="Main">
            <div className='line'>
                <Button icon='X'></Button>
                <Line vertical='true' size='100'/>
                <Button icon='X'></Button>
                <Line vertical='true' size='100'/>
                <Button icon='O'></Button>
            </div>

            <Line horizontal='true' size='300'/>

            <div className='line'>
                <Button icon='X'></Button>
                <Line vertical='true' size='100'/>
                <Button icon='X'></Button>
                <Line vertical='true' size='100'/>
                <Button icon='O'></Button>
            </div>

            <Line horizontal='true' size='300'/>

            <div className='line'>
                <Button icon='X'></Button>
                <Line vertical='true' size='100'/>
                <Button icon='X'></Button>
                <Line vertical='true' size='100'/>
                <Button icon='O'></Button>
            </div>

        </div>;
    }
}
 
export default Main;