import React from "react";
import PropTypes from 'prop-types';



export default function RestartButton(props) {
  return <button className="btn btn-default" onClick={props.restartFunction()}>Start game again</button>;
}

RestartButton.propTypes = {
  restartFunction: PropTypes.func.isRequired,
};