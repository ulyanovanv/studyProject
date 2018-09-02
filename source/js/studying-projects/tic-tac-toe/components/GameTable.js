import React from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function GameTable(props) {
  let {updateCellsValue, cellsState, winnerCombination} = props;

  let renderEachCell = (number) => {
    let winnerStyling = '';
    if (winnerCombination !== null){
      winnerStyling =  (winnerCombination.includes(number) ? 'winnerCell' : '');
    }
    return <div className={'cell ' + winnerStyling}
                key={shortid.generate()}
                id={'cel_' + number}
                onClick={() => updateCellsValue(number)}>{cellsState[number]}</div>;
  };

  return (<div className='tic-tac-toe-game-table'>
    {renderEachCell(0)} {renderEachCell(1)} {renderEachCell(2)}
    {renderEachCell(3)} {renderEachCell(4)} {renderEachCell(5)}
    {renderEachCell(6)} {renderEachCell(7)} {renderEachCell(8)}
  </div>)
}

GameTable.propTypes = {
  updateCellsValue:PropTypes.func.isRequired,
  cellsState: PropTypes.array.isRequired,
  winnerCombination: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};
