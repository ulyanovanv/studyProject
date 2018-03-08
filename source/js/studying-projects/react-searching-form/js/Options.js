import React from 'react';

export class Options extends React.Component {
  render(){
    return (
    <label>
      <input type='radio'
             value={this.props.labelText}
             name={this.props.name}
             onChange={this.props.callback}
             checked={this.props.isChecked}/>
      {this.props.labelText}
    </label>);
  }
}