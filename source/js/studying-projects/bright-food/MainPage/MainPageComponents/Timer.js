import React from "react";

export class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state ={timeLeft: (28*24*60*60)+(15*60*60)+(57*60)+12};
    this.getDays = this.getDays.bind(this);
    this.getHours = this.getHours.bind(this);
    this.getMinutes = this.getMinutes.bind(this);
    this.getSeconds = this.getSeconds.bind(this);
  }
  getDays() {
    return Math.floor(this.state.timeLeft/(24*60*60));
  }
  getHours() {
    return Math.floor(this.state.timeLeft/(60*60)) - (this.getDays() * 24);
  }
  getMinutes() {
    return Math.floor(this.state.timeLeft/60) -(this.getDays() * 24 * 60) - (this.getHours() * 60 );
  }
  getSeconds() {
    return Math.floor(this.state.timeLeft) -(this.getDays() * 24 * 60 * 60) - (this.getHours() * 60 * 60 ) - (this.getMinutes() * 60);
  }
  convertWithZeros(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }
  componentWillMount(){
    setInterval(() => this.setState({timeLeft: this.state.timeLeft - 1 }),1000);
  }
  render() {
    return (<div className="products-all__time-left">
      <div className="products-all__time-left_gradient-container">
        <div className="products-all__time-left_text">
          <span>{this.getDays()}</span><br/>
          <span>days</span>
        </div>
      </div>
      <div className="products-all__time-left_gradient-container">
        <div className="products-all__time-left_text">
          <span>{this.convertWithZeros(this.getHours())}</span><br/>
          <span>hours</span>
        </div>
      </div>
      <div className="products-all__time-left_gradient-container">
        <div className="products-all__time-left_text">
          <span>{this.convertWithZeros(this.getMinutes())}</span><br/>
          <span>mins</span>
        </div>
      </div>
      <div className="products-all__time-left_gradient-container">
        <div className="products-all__time-left_text">
          <span>{this.convertWithZeros(this.getSeconds())}</span><br/>
          <span>secs</span>
        </div>
      </div>
    </div>);
  }
}

