import React from "react";

export class ProductVertical extends React.Component {

  render(){
    let BoxShadow;
    if (this.props.isSelected) {
      BoxShadow = "0px 0px 10px 2px #86bf0a";
    } else if (this.props.isZoomed) {
      BoxShadow = "0px 0px 10px 2px #B5B5B5";
    } else {
      BoxShadow = "";
    }
    return (
      <div className="products-vertical"
           style={{boxShadow: BoxShadow,
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
                 onClick={this.props.changeBasketList}>
              <img id="basket-on-product" src="/images/bright-food/products/smallPNG/basket.png"
                   style={{transform: (this.props.isSelected ? "scale(0.7)" : "scale(1.0)")}}/>
            </div>

            <div className="products-vertical__shop-navigation_png"
                 onClick={ this.props.changeZoom}>
              <img id="zoom" src="/images/bright-food/products/smallPNG/zoom.png"
                   style={{transform: (this.props.isZoomed ? "scale(0.7)" : "scale(1.0)")}} />
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
