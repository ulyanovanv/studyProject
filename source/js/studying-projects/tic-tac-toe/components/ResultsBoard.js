import React from "react";
import PropTypes from 'prop-types';

export default function ResultsBoard(props) {
  let {winnerX, winnerO, noOne} = props;
  return (<div className='tic-tac-toe_reuslts-board'>
    <p>X wins: {winnerX}</p><br/>
    <p>O wins: {winnerO}</p><br/>
    <p>No one wins: {noOne}</p>
  </div>);
}

ResultsBoard.propTypes = {
  winnerX: PropTypes.number.isRequired,
  winnerO: PropTypes.number.isRequired,
  noOne: PropTypes.number.isRequired,
};