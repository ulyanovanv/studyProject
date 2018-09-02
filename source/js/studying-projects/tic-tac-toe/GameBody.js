import React from 'react';
import GameTable from './components/GameTable';
import RestartButton from './components/RestartButton';
import ResultsBoard from './components/ResultsBoard';

const WinnerCombinations = [
  [0,4,8],
  [2,4,6],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

export default class GameBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerIs: 'X',
      winnerX: 0,
      winnerO: 0,
      noOne: 0,
      cellsState: [],
      haveAnyWinner: false,
    };
    this.restartFunction = this.restartFunction.bind(this);
    this.updateCellsValue = this.updateCellsValue.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.zeroingOfState = this.zeroingOfState.bind(this);
  }

  componentDidMount() {
    this.zeroingOfState();
  }

  zeroingOfState() {
    let arrayOfCells = [];
    for (let i=0; i<9; i++){
      arrayOfCells.push(' ');
    }
    this.setState({cellsState: arrayOfCells});
  }

  checkForWin() {
    let cells = this.state.cellsState.slice();
    for (let i in WinnerCombinations) {
      let [first, second, third] = WinnerCombinations[i];
      if (cells[first] === this.state.currentPlayerIs && cells[first] === cells[second] && cells[first] === cells[third]) {
        let key = 'winner' + this.state.currentPlayerIs;
        let newState = {};
        newState[key] = this.state[key] + 1;
        this.setState(newState);
        this.setState({haveAnyWinner: !this.state.haveAnyWinner});
        return;
      }
    }
    if (!cells.includes(' ')) {
      this.setState({noOne: this.state.noOne + 1});
      this.setState({haveAnyWinner: !this.state.haveAnyWinner});
    }
  }

  updateCellsValue(number) {
    if (!this.state.haveAnyWinner){
      let cells = this.state.cellsState;
      if (cells[number] === ' ') {
        cells.splice(number, 1, this.state.currentPlayerIs);
        this.setState({cellsState: cells});
        this.checkForWin();
        this.setState({ currentPlayerIs: this.state.currentPlayerIs === 'X' ? 'O' : 'X'});
      }
    }
  }

  restartFunction() {
    this.zeroingOfState();
    this.setState({currentPlayerIs: 'X', haveAnyWinner: !this.state.haveAnyWinner});
  }

  render() {
    let playerWonText = !this.state.cellsState.includes(' ') ? 'Noone won' : `Player ${this.state.currentPlayerIs === 'X' ? 'O' : 'X'} won`;

    return (
      <div className='row tic-tac-toe_game'>
        <div className='tic-tac-toe_column'>
          <span>{(this.state.haveAnyWinner || !this.state.cellsState.includes(' ')) ? playerWonText : `Next Player is: ${this.state.currentPlayerIs}`}</span>
          <GameTable
            updateCellsValue={this.updateCellsValue}
            currentPlayerIs={this.state.currentPlayerIs}
            cellsState={this.state.cellsState}
          />
          <RestartButton restartFunction={this.restartFunction} />
        </div>
        <div className='tic-tac-toe_column'>
          <ResultsBoard winnerX={this.state.winnerX} winnerO={this.state.winnerO} noOne={this.state.noOne}/>
        </div>
      </div>
    );
  }
}