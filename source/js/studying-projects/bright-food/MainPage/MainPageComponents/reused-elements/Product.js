import React from "react";

export class Product extends React.Component {
  render(){
    return (
      <div className="products_background">
        <div className="products_image" style={{backgroundImage: 'url(' + this.props.src + ')'}} >

          <div className="products__shop-navigation">
            <div className="products__shop-navigation_png">
              <img id="like" src="/images/bright-food/products/smallPNG/like.png"/>
            </div>
            <div className="products__shop-navigation_png">
              <img id="basket-on-product" src="/images/bright-food/products/smallPNG/basket.png"/>
            </div>
            <div className="products__shop-navigation_png">
              <img id="zoom" src="/images/bright-food/products/smallPNG/zoom.png"/>
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