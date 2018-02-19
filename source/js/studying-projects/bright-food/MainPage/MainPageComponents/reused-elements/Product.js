import React from "react";

import {connect} from "react-redux";

class Product extends React.Component {
  constructor(props){
    super(props);
    this.state ={isZoomed: false};
    this.changeZoom = this.changeZoom.bind(this);
  }
  changeZoom() {
    this.setState({isZoomed: !this.state.isZoomed});
    // console.log(this.state.isZoomed);
  }
  render(){
    return (
      <div className="products_background"
           style={{boxShadow: ((this.props.isSelected || this.state.isZoomed) ? "0px 0px 10px 2px #F7F6F2" : ""),
                  transition: "transform 1s",
                  transform: (this.state.isZoomed ? "scale(1.1)" : "scale(1.0)")
           }}>

        <div className="products_image" style={{backgroundImage: 'url(' + this.props.src + ')'}} >

          <div className={"products__shop-navigation " + (this.props.isSelected ? 'active' : '')}>
            <div className="products__shop-navigation_png">
              <img id="like" src="/images/bright-food/products/smallPNG/like.png"/>
            </div>

            <div className="products__shop-navigation_png"
                 onClick={this.props.changeBasketList}
                 style={{transform: (this.props.isSelected ? "scale(0.7)" : "scale(1.0)")}}>
              <img id="basket-on-product" src="/images/bright-food/products/smallPNG/basket.png"/>
            </div>

            <div className="products__shop-navigation_png"
                 onClick={ this.changeZoom}
                 style={{transform: (this.state.isZoomed ? "scale(0.7)" : "scale(1.0)")}}>
              <img id="zoom" src="/images/bright-food/products/smallPNG/zoom.png" />
            </div>
          </div>

          <div className="products__product-description">
            <p className="products__product-description_name">
              organic&nbsp;
              <span>{this.props.name}</span>
            </p>
            <p className="products__product-description_price">
              <span> ${this.props.price}&nbsp; </span>
              <span> {this.props.previousPrice != 0 && `$ ${this.props.previousPrice}`} </span>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(state => ({store:state}))(Product);