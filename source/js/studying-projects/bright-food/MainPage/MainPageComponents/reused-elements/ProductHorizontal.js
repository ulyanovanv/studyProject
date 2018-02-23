import React from "react";

export class ProductHorizontal extends React.Component {

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
      <div className="products-horizontal"
           style={{boxShadow: BoxShadow,
                  transition: "transform 1s, bozShadow 1s",
                  transform: (this.props.isZoomed ? "scale(1.06)" : "scale(1.0)")  }}>

        <div className={"products-horizontal__shop-navigation "}>
          <div className="products-horizontal__shop-navigation_png">
              <img id="like" src="/images/bright-food/products/smallPNG/like.png"/>
          </div>

          <div className="products-horizontal__shop-navigation_png"
               onClick={this.props.changeBasketList}
               style={{boxShadow: (this.props.isSelected ? "inset 0px 0px 20px #f7f6f2" : "")}}>
              <img id="basket-on-product" src="/images/bright-food/products/smallPNG/basket.png"
                   style={{transform: (this.props.isSelected ? "scale(0.7)" : "scale(1.0)")}}/>
          </div>

          <div className="products-horizontal__shop-navigation_png"
               onClick={ this.props.changeZoom}
               style={{boxShadow: (this.props.isZoomed ? "inset 0px 0px 20px #f7f6f2" : "")}}>
              <img id="zoom" src="/images/bright-food/products/smallPNG/zoom.png"
                   style={{transform: (this.props.isZoomed ? "scale(0.7)" : "scale(1.0)")}} />
          </div>
        </div>

        <div className="products-horizontal__product-description">
          <p className="products-horizontal__product-description_organic-food">organic food</p>
          <p className="products-horizontal__product-description_name">
            organic&nbsp;
            <span>{this.props.name}</span>
          </p>
          <p className="products-horizontal__product-description_some-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...
          </p>
          <p className="products-horizontal__product-description_price">
            <span> ${this.props.price}&nbsp; </span>
            <span> {this.props.previousPrice != 0 && `$ ${this.props.previousPrice}`} </span>
          </p>

          <div className="products-horizontal__product-description_buttons">
            <button className="products-horizontal__product-description_buttons_new">New</button>
            <button className="products-horizontal__product-description_buttons_sale">Sale</button>
          </div>
          <div style={{backgroundImage: 'url(' + this.props.src + ')'}}
               className="products-horizontal__product-description_src"
               title={this.props.title}></div>
        </div>



      </div>
    );
  }
}