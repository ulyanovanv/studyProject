import React from "react";

import {connect} from "react-redux";

import {ProductVertical} from "./ProductVertical";
import {ProductHorizontal} from "./ProductHorizontal";

class Product extends React.Component {
  render() {
    let layout = this.props.layoutType;
    if (layout === "vertical") {
      // console.log(this.props.layoutType);
      return (<ProductVertical src={this.props.src}
                               title={this.props.title}
                               name={this.props.name}
                               price={this.props.price}
                               previousPrice={this.props.previousPrice}
                               changeBasketList={this.props.changeBasketList}
                               isSelected={this.props.isSelected}
                               // isZoomed={this.state.isZoomed}
                               // changeZoom={this.changeZoom}
                               isZoomed={this.props.isZoomed}
                               changeZoom={this.props.changeZoom}
      />);
    } else if (layout === "horizontal") {
      // console.log(this.props.layoutType);
      return (<ProductHorizontal src={this.props.src}
                               title={this.props.title}
                               name={this.props.name}
                               price={this.props.price}
                               previousPrice={this.props.previousPrice}
                               changeBasketList={this.props.changeBasketList}
                               isSelected={this.props.isSelected}
                               // isZoomed={this.state.isZoomed}
                               // changeZoom={this.changeZoom}
                               isZoomed={this.props.isZoomed}
                               changeZoom={this.props.changeZoom}
      />)
    }
  }
}
export default connect(state => ({store:state}))(Product);