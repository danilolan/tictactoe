import React from 'react';
import './main.css'

import Button from './Button'
import Line from './Line';

const initialState = {
    icons: ['','','','','','','','',''],
    currentPlayer: true
}

class Main extends React.Component {

    state = {...initialState}

    constructor(props){
        super(props)

        this.clearBoard = this.clearBoard.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    clearBoard(){
        this.setState({...initialState})
    }

    onClick(id){
        var icons = this.state.icons
        if(this.state.currentPlayer){
            icons[id] = 'X'
            this.setState({icons})
            this.setState({currentPlayer: false})

        } else{
            icons[id] = 'O'
            this.setState({icons})
            this.setState({currentPlayer: true})
        }
    }


    render() { 
        return <div className="Main">
            <div className='line'>
                <Button icon={this.state.icons[0]} click={() => this.onClick(0)}></Button>
                <Line vertical='true' size='100'/>
                <Button icon={this.state.icons[1]} click={() => this.onClick(1)}></Button>
                <Line vertical='true' size='100'/>
                <Button icon={this.state.icons[2]} click={() => this.onClick(2)}></Button>
            </div>

            <Line horizontal='true' size='300'/>

            <div className='line'>
                <Button icon={this.state.icons[3]} click={() => this.onClick(3)}></Button>
                <Line vertical='true' size='100'/>
                <Button icon={this.state.icons[4]} click={() => this.onClick(4)}></Button>
                <Line vertical='true' size='100'/>
                <Button icon={this.state.icons[5]} click={() => this.onClick(5)}></Button>
            </div>

            <Line horizontal='true' size='300'/>

            <div className='line'>
                <Button icon={this.state.icons[6]} click={() => this.onClick(6)}></Button>
                <Line vertical='true' size='100'/>
                <Button icon={this.state.icons[7]} click={() => this.onClick(7)}></Button>
                <Line vertical='true' size='100'/>
                <Button icon={this.state.icons[8]} click={() => this.onClick(8)}></Button>
            </div>

        </div>;
    }
}
 
export default Main;