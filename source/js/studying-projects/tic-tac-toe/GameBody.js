import React, { Component } from 'react';
import GameTable from './components/GameTable';
import RestartButton from './components/RestartButton';
import ResultsBoard from './components/ResultsBoard';

const WinnerCombinations = [[0,4,8], [2,4,6], [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8]];

export default class GameBody extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPlayerIs: 'X',
      winnerX: 0,
      winnerO: 0,
      noOne: 0,
      cellsState: [],
    }
    this.restartFunction = this.restartFunction.bind(this);
  }

  restartFunction(){

    //replace all values with empty string

    // let arrayOfCells = [];
    // for (let i=0; i<9; i++){
    //   arrayOfCells.push(' ');
    // }
  }

  componentDidMount(){
    let arrayOfCells = [];
    for (let i=0; i<9; i++){
      arrayOfCells.push(' ');
    }
    this.setState({cellsState: arrayOfCells})
  }

  render() {
    return (
      <div className='row tic-tac-toe_game'>

        <div className='col-sm-6'>
          <span>Next Player is: {this.state.currentPlayerIs === 'X' ? 'O' : 'X'}</span>
          <GameTable currentPlayerIs={this.state.nextPlayerIs}/>
          <RestartButton restartFunction={this.restartFunction}/>
        </div>

        <div className='col-sm-6'>
          <ResultsBoard winnerX={this.state.winnerX} winnerO={this.state.winnerO} noOne={this.state.noOne}/>
        </div>

      </div>);
  }
}