import React from "react";

import {connect} from "react-redux";

import {ProductVertical} from "./ProductVertical";
import ProductHorizontal from "./ProductHorizontal";


class Product extends React.Component {
  constructor(props){
    super(props);
    this.state ={isZoomed: false};
    this.changeZoom = this.changeZoom.bind(this);
  }
  changeZoom() {
    this.setState({isZoomed: !this.state.isZoomed});
  }
  render() {
    console.log(this.props.layoutType);
    let layout = this.props.layoutType;
    if (layout === "vertical") {
      return (<ProductVertical src={this.props.src}
                               title={this.props.title}
                               name={this.props.name}
                               price={this.props.price}
                               previousPrice={this.props.previousPrice}
                               changeBasketList={this.props.changeBasketList}
                               isSelected={this.props.isSelected}
                               isZoomed={this.state.isZoomed}
                               changeZoom={this.changeZoom}/>)}


  }

}
export default connect(state => ({store:state}))(Product);