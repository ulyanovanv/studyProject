import React from "react";
import PropTypes from 'prop-types';



export default class GameTable extends React.Component {
  constructor(props){
    super(props);
    this.updateCellValue = this.updateCellValue.bind(this);
  }

  updateCellValue(number){
    console.log(number);
  }

  renderEachCell(number) {
    return <div className='col-sm-4 cell'
                id={'cel_' + number} onClick={() => this.updateCellValue(number)}>{this.props.currentPlayerIs}</div>;
  }

  render() {
    return (<div className='tic-tac-toe-game-table'>
      <div className='row'>{this.renderEachCell(0)} {this.renderEachCell(1)} {this.renderEachCell(2)}</div>
      <div className='row'>{this.renderEachCell(3)} {this.renderEachCell(4)} {this.renderEachCell(5)}</div>
      <div className='row'>{this.renderEachCell(6)} {this.renderEachCell(7)} {this.renderEachCell(8)}</div>
    </div>)
  }
}

GameTable.propTypes = {
  currentPlayerIs: PropTypes.string.isRequired,
};