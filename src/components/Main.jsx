import React from 'react';
import './main.css'

import Button from './Button'
import Line from './Line';
import Scoreboard from './Scoreboard';

/*------------------------------------------
    FAZER LOGICA PARA QUANDO DAR VELHA
-------------------------------------------*/

class Main extends React.Component {

    state = {icons: ['','','','','','','','',''],
            currentPlayer: true,
            scoreboard: [0,0]}

    constructor(props){
        super(props)

        this.clearBoard = this.clearBoard.bind(this)
        this.onClick = this.onClick.bind(this)
        this.gameLogic = this.gameLogic.bind(this)
    }

    clearBoard(){
        this.setState({icons: ['','','','','','','','',''],currentPlayer: true})
        console.log("Limpar")
    }

    gameLogic(){
        var icons = this.state.icons
        var scoreboard = this.state.scoreboard
        var cont = 0
        for(var i in icons){   
            if(icons[i] !== ''){
                cont++
            }
        }
        if(cont === 9){
            console.log("Velha")
            this.clearBoard()
        }
        cont = 0
        if(icons[0] === icons[1] && icons[1] === icons[2]){
            if(icons[0] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()

                console.log("venceu")
            }
            else if(icons[0] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[3] === icons[4] && icons[4] === icons[5]){
            if(icons[3] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[3] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[6] === icons[7] && icons[7] === icons[8]){
            if(icons[6] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[6] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[0] === icons[3] && icons[3] === icons[6]){
            if(icons[0] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[0] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[1] === icons[4] && icons[4] === icons[7]){
            if(icons[1] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[1] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[2] === icons[5] && icons[5] === icons[8]){
            if(icons[2] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[2] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[6] === icons[4] && icons[4] === icons[2]){
            if(icons[6] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[6] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        if(icons[0] === icons[4] && icons[4] === icons[8]){
            if(icons[0] === "X"){
                scoreboard[0] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
            else if(icons[0] === "O"){
                scoreboard[1] += 1
                this.setState({scoreboard})
                this.clearBoard()
            }
        }
        console.log(this.state.scoreboard)
    }

    onClick(id){
        var icons = this.state.icons
        if(icons[id] !== ''){
            return
        }
        if(this.state.currentPlayer){
            icons[id] = 'X'
            this.setState({icons})
            this.setState({currentPlayer: false})

        } else{
            icons[id] = 'O'
            this.setState({icons})
            this.setState({currentPlayer: true})
        }
        this.gameLogic()
    }


    render() { 
        return <div className="Main">
            <div className="board">
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
            </div>

            <Scoreboard classname="scoreboard" x={this.state.scoreboard[0]} o={this.state.scoreboard[1]}></Scoreboard>
        </div>;
    }
}
 
export default Main;