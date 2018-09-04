import React from 'react';
import GameTable from './components/GameTable';
import RestartButton from './components/RestartButton';
import ResultsBoard from './components/ResultsBoard';
import History from './components/History';

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

const defineCellPosition = number => {
  let row = Math.ceil(number/3);
  let column =  number%3 + 1;
  return `in row ${row}, in column ${column}`;
};

export default class GameBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayerIs: 'X',
      winnerX: 0,
      winnerO: 0,
      noOne: 0,
      history: [],
      // cellsState: [],
      haveAnyWinner: false,
      winnerCombination: null,
    };
    this.restartFunction = this.restartFunction.bind(this);
    this.updateCellsValue = this.updateCellsValue.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.zeroingOfState = this.zeroingOfState.bind(this);
    this.updateHistory = this.updateHistory.bind(this);
    this.travelInHistory = this.travelInHistory.bind(this);
  }

  componentDidMount() {
    this.zeroingOfState();
  }

  zeroingOfState() {
    let arrayOfCells = [];
    for (let i=0; i<9; i++){
      arrayOfCells.push(null);
    }
    let firstState = [{turnState: arrayOfCells, label: ''}];
    this.setState({history: firstState});
  }

  checkForWin(cells) {
    for (let i in WinnerCombinations) {
      let [first, second, third] = WinnerCombinations[i];
      if (cells[first] === this.state.currentPlayerIs && cells[first] === cells[second] && cells[first] === cells[third]) {
        let key = 'winner' + this.state.currentPlayerIs;
        let newState = {};
        newState[key] = this.state[key] + 1;
        this.setState(newState);
        this.setState({haveAnyWinner: !this.state.haveAnyWinner, winnerCombination: WinnerCombinations[i]});
        return;
      }
    }
    if (!cells.includes(null)) {
      this.setState({noOne: this.state.noOne + 1});
      this.setState({haveAnyWinner: !this.state.haveAnyWinner});
    }
  }

  updateCellsValue(number) {
    if (!this.state.haveAnyWinner){
      let cells = this.state.history[this.state.history.length - 1].turnState.slice();
      if (cells[number] === null) {
        cells.splice(number, 1, this.state.currentPlayerIs);
        this.checkForWin(cells);
        let winnerLabel =  'Game is over!';
        let turnLabel = `Now ${this.state.currentPlayerIs} playerd ${defineCellPosition(number)}`;
        let Label = (this.state.haveAnyWinner || !cells.includes(null)) ? winnerLabel : turnLabel;
        this.updateHistory(cells, Label);
        let stepCounter = this.state.stepNumber + 1;
        this.setState({ currentPlayerIs: this.state.currentPlayerIs === 'X' ? 'O' : 'X', stepNumber: stepCounter});
      }
    }
  }

  updateHistory(cellsState, label) {
    let history = this.state.history.slice();
    let newHistory = history.concat({turnState: cellsState, label: label});
    this.setState({history: newHistory});
  }

  travelInHistory(stepNumber) {
    let newHistoryState = this.state.history.slice(0, stepNumber + 1);
    let currentPlayer = stepNumber%2 === 0 ? 'X' : 'O';
    this.setState({
      history: newHistoryState,
      currentPlayerIs: currentPlayer,
      winnerCombination: null,
      haveAnyWinner: false,
    });
  }

  restartFunction() {
    this.zeroingOfState();
    let newHistory = [{turnState: Array(9).fill(null), label: ''}];
    this.setState({
      currentPlayerIs: 'X',
      haveAnyWinner: !this.state.haveAnyWinner,
      winnerCombination: null,
      history: newHistory,
    });
  }

  render() {
    let {history} = this.state;
    let cellsState, playerWonText;
    if (history.length > 0) {
      cellsState = history[history.length - 1].turnState;
      let currentLabelCondition = !cellsState.includes(null);
      playerWonText = currentLabelCondition ? 'Noone won' : `Player ${this.state.currentPlayerIs === 'X' ? 'O' : 'X'} won`
    } else {
      cellsState = Array(9).fill(null);
      playerWonText = '';
    }

    return (
      <div className='row tic-tac-toe_game'>
        <div className='tic-tac-toe_column'>
          <span>{(this.state.haveAnyWinner || !cellsState.includes(null)) ? playerWonText : `Next Player is: ${this.state.currentPlayerIs}`}</span>
          <GameTable
            updateCellsValue={this.updateCellsValue}
            currentPlayerIs={this.state.currentPlayerIs}
            cellsState={cellsState}
            winnerCombination={this.state.haveAnyWinner ? this.state.winnerCombination : ''}
          />
          <RestartButton restartFunction={this.restartFunction} />
        </div>
        <div className='tic-tac-toe_column'>
          <ResultsBoard winnerX={this.state.winnerX} winnerO={this.state.winnerO} noOne={this.state.noOne}/>
          <History
            history={history}
            travelInHistory={this.travelInHistory}
          />
        </div>
      </div>
    );
  }
}
