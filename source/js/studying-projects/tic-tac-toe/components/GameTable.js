import React from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function GameTable(props) {
  let renderEachCell = (number) => {
    return <div className='cell' key={shortid.generate()}
                id={'cel_' + number} onClick={() => props.updateCellsValue(number)}>{props.cellsState[number]}</div>;
  };

  return (<div className='tic-tac-toe-game-table'>
    {renderEachCell(0)} {renderEachCell(1)} {renderEachCell(2)}
    {renderEachCell(3)} {renderEachCell(4)} {renderEachCell(5)}
    {renderEachCell(6)} {renderEachCell(7)} {renderEachCell(8)}
  </div>)
}

GameTable.propTypes = {
  currentPlayerIs: PropTypes.string.isRequired,
  updateCellsValue:PropTypes.func.isRequired,
  cellsState: PropTypes.array.isRequired,
};