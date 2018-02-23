import React from "react";

export class SmallProduct extends React.Component {
  render(){
    return (
      <div className="ads__products_product" >
        <div className="ads__products_product_image"
             title={this.props.title}
             style={{backgroundImage: 'url(' + this.props.src + ')' }}>
        </div>
        <div className="ads__products_product_description">
          <div className="ads__products_product_description_name">
            <span>organic </span>
            <span>{this.props.name}</span>
          </div>
          <div className="ads__products_product_description_grey-line"></div>
          <div className="ads__products_product_description_price">{this.props.price}</div>

        </div>
      </div>)
  }
}