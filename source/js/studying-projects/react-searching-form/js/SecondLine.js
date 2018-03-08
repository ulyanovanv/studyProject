import React from 'react';
import {Filters} from './Filters';

const priceMieten = ['beliebig',300,400,600,700,900,1200,1600];
const priceKaufen = ["beliebig", 30000, 50000, 70000, 90000, 120000, 175000, 250000];
const rooms = ['beliebig',1,2,3,4,5];
const space = ['beliebig',30,40,50,60,70,80,100,120];



export class SecondLine extends React.Component {
    constructor(props){
        super(props);
        this.state = {focusedList: ""};
        this.showList = this.showList.bind(this);
    }
    showList(item){
        this.setState({focusedList: item});
    }

    render() {
        return (
          <div className='second-line'>

            <Filters filter={this.props.optgroup === "Mieten" ? priceMieten : priceKaufen}
                     name='price'
                     isFocused={this.state.focusedList === "price"}
                     showList={this.showList}
                     setFilterValue={(value) => {this.props.setFilterValue(value,"price")}}
                     values={this.props.price}/>

            <Filters filter={rooms}
                     name='rooms'
                     isFocused={this.state.focusedList === "rooms"}
                     showList={this.showList}
                     setFilterValue={(value) => {this.props.setFilterValue(value,"rooms")}}
                     values={this.props.rooms}/>

            <Filters filter={space}
                     name='space'
                     isFocused={this.state.focusedList === "space"}
                     showList={this.showList}
                     setFilterValue={(value) => {this.props.setFilterValue(value,"space")}}
                     values={this.props.space}/>

            <div className='suchen'>
                <input type='submit' id='submit' value="Suchen"/>
            </div>
          </div>)
    }
}