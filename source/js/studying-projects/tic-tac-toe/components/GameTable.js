import React from "react";
import PropTypes from 'prop-types';

export default function GameTable(props) {
  let renderEachCell = (number) => {
    return <div className='col-sm-4 cell'
                id={'cel_' + number} onClick={() => props.updateCellsValue(number)}>{props.cellsState[number]}</div>;
  };

  return (<div className='tic-tac-toe-game-table'>
    <div className='row'>{renderEachCell(0)} {renderEachCell(1)} {renderEachCell(2)}</div>
    <div className='row'>{renderEachCell(3)} {renderEachCell(4)} {renderEachCell(5)}</div>
    <div className='row'>{renderEachCell(6)} {renderEachCell(7)} {renderEachCell(8)}</div>
  </div>)
}

GameTable.propTypes = {
  currentPlayerIs: PropTypes.string.isRequired,
  updateCellsValue:PropTypes.func.isRequired,
  cellsState: PropTypes.array.isRequired,
};