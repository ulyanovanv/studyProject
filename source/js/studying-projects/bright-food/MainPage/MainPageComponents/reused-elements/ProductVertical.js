import React from "react";

export class ProductVertical extends React.Component {

  render(){
    return (
      <div className="products-vertical"
           style={{boxShadow: ((this.props.isSelected || this.props.isZoomed) ? "0px 0px 10px 2px #F7F6F2" : ""),
             transition: "transform 1s",
             transform: (this.props.isZoomed ? "scale(1.1)" : "scale(1.0)")
           }}
           title={this.props.title}>

        <div className="products-vertical_image" style={{backgroundImage: 'url(' + this.props.src + ')'}} >

          <div className={"products-vertical__shop-navigation " + (this.props.isSelected ? 'active' : '')}>
            <div className="products-vertical__shop-navigation_png">
              <img id="like" src="/images/bright-food/products/smallPNG/like.png"/>
            </div>

            <div className="products-vertical__shop-navigation_png"
                 onClick={this.props.changeBasketList}
                 style={{transform: (this.props.isSelected ? "scale(0.7)" : "scale(1.0)")}}>
              <img id="basket-on-product" src="/images/bright-food/products/smallPNG/basket.png"/>
            </div>

            <div className="products-vertical__shop-navigation_png"
                 onClick={ this.props.changeZoom}
                 style={{transform: (this.props.isZoomed ? "scale(0.7)" : "scale(1.0)")}}>
              <img id="zoom" src="/images/bright-food/products/smallPNG/zoom.png" />
            </div>
          </div>

          <div className="products-vertical__product-description">
            <p className="products-vertical__product-description_name">
              organic&nbsp;
              <span>{this.props.name}</span>
            </p>
            <p className="products-vertical__product-description_price">
              <span> ${this.props.price}&nbsp; </span>
              <span> {this.props.previousPrice != 0 && `$ ${this.props.previousPrice}`} </span>
            </p>
          </div>

        </div>
      </div>
    );
  }
}
