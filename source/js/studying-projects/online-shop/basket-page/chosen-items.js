import React from "react";
import {connect} from "react-redux";

import {Item} from "./..//first-page/collection-items/item";


class ChosenItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItems: []
    };
    this.renderFunction = this.renderFunction.bind(this);
  }

  renderFunction(){
    return this.props.store.basket.items.map((item,i) => {
      return <Item key={"image_"+i}
                          image={ item.image }
                          discount={item.discount}
                          onClick={() => { return this.addToList(item) }}
                          // color={this.isSelected(item) ? 'white' : 'black'}
                          // borderBottom={this.isSelected(item) ? '40px solid black' : '40px solid #f09d66'}
                          // filter={this.isSelected(item) ? "drop-shadow(0px 0px 4px #333)" : "none"}
                          // isAdded={this.isSelected(item) ? "added" : "+add to cart"}
      />;
    });
  }

  render(){
    return <div> {this.renderFunction()}</div>;
  }
}


export default connect(state => ({store:state}))(ChosenItems);