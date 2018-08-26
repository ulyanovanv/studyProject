import React from "react";
import PropTypes from 'prop-types';

export default function ResultsBoard(props) {
  return (<div>
    <p>X wins: {props.winnerX}</p><br/>
    <p>O wins: {props.winnerO}</p><br/>
    <p>No one wins: {props.noOne}</p>
  </div>);
}

ResultsBoard.propTypes = {
  winnerX: PropTypes.number.isRequired,
  winnerO: PropTypes.number.isRequired,
  noOne: PropTypes.number.isRequired,
};