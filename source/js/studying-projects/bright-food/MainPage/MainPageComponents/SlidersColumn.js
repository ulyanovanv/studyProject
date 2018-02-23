import React from "react";
import Slider from "react-slick";
import {SmallProduct} from "./reused-elements/SmallProduct";

function reschufle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  let b = a;
  return b;
}


export class SlidersColumn extends React.Component {
  constructor(props){
    super(props);
    this.renderProducts = this.renderProducts.bind(this);

  }
  renderProducts() {
    let products = this.props.products.slice(0);
    reschufle(products);
    let arr = [];
    (function smth() {
      for (let i=0; i<3; i++){
        arr.push(products[i]);
      }
      return arr;
    })();

    return arr.map((item,i) => {
      let price = item.price.toFixed(2);
      return (

          <SmallProduct src={item.src}
                   title={item.name}
                   name={item.name}
                   price={price}
                   key={i}
          />);

    })
  }
  render() {
    return (
      <div className="ads__products_column">
        <div className="ads__products_category">{this.props.category}</div>
        <div className="ads__products_header">
          <span>organic&nbsp;</span>
          <span>{this.props.header}</span>
        </div>
        <div className="slider-container">
            {this.renderProducts()}
        </div>

      </div>)
  }
}