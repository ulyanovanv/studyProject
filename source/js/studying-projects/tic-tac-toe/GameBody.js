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
      isAnyWinner: false,
    };
    this.restartFunction = this.restartFunction.bind(this);
    this.updateCellsValue = this.updateCellsValue.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.zeroingOfState = this.zeroingOfState.bind(this);
  }

  componentDidMount(){
    this.zeroingOfState();
  }

  zeroingOfState(){
    let arrayOfCells = [];
    for (let i=0; i<9; i++){
      arrayOfCells.push(' ');
    }
    this.setState({cellsState: arrayOfCells});
  }

  checkForWin() {
    let cells = this.state.cellsState;
    for (let i in WinnerCombinations) {
      let w = WinnerCombinations[i];
      if (cells[w[0]] === this.state.currentPlayerIs && cells[w[0]] === cells[w[1]] && cells[w[0]] === cells[w[2]]) {
        let key = 'winner' + this.state.currentPlayerIs;
        let newState = {};
        newState[key] = this.state[key] + 1;
        this.setState(newState);
        return;
      }
    }
    if (!this.state.cellsState.includes(' ')) {
      this.setState({noOne: this.state.noOne + 1});
    }
  }

  updateCellsValue(number){
    let cells = this.state.cellsState;
    if (cells[number] === ' ') {
      cells.splice(number, 1, this.state.currentPlayerIs);
      this.setState({cellsState: cells});
      this.checkForWin();
      this.setState({ currentPlayerIs: this.state.currentPlayerIs === 'X' ? 'O' : 'X'});
    }
  }

  restartFunction(){
    this.zeroingOfState();
    this.setState({currentPlayerIs: 'X'});
  }

  render() {
    return (
      <div className='row tic-tac-toe_game'>
        <div className='col-sm-6'>
          <span>Next Player is: {this.state.currentPlayerIs}</span>
          <GameTable
            updateCellsValue={this.updateCellsValue}
            currentPlayerIs={this.state.currentPlayerIs}
            cellsState={this.state.cellsState}
          />
          <RestartButton restartFunction={this.restartFunction} />
        </div>
        <div className='col-sm-6'>
          <ResultsBoard winnerX={this.state.winnerX} winnerO={this.state.winnerO} noOne={this.state.noOne}/>
        </div>
      </div>
    );
  }
}