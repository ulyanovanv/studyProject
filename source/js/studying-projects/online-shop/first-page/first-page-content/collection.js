import React from "react";

import {Headings} from "./headings";
import {Item} from "./../collection-items/item";

let products = [
  {image:"/images/online-shop/collection/collection_1.jpg", price: 300, discount:0},
  {image:"/images/online-shop/collection/collection_2.jpg", price: 300, discount:0},
  {image:"/images/online-shop/collection/collection_3.jpg", price: 300, discount:0},
  {image:"/images/online-shop/collection/collection_4.jpg", price: 300, discount:30},
  {image:"/images/online-shop/collection/collection_5.jpg", price: 300, discount:0},
  {image:"/images/online-shop/collection/collection_6.jpg", price: 300, discount:40},
  {image:"/images/online-shop/collection/collection_7.jpg", price: 300, discount:0},
  {image:"/images/online-shop/collection/collection_8.jpg", price: 300, discount:0},
];

export class Collection extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  renderFunction(){
    return products.map(item => {
      return <Item image={ item.image }/>;
    });
  }

  render() {
    return (
      <section className="first-page-collection">
        <Headings headerName="Summer Collection"/>
        <div className="first-page-collection_container">
          <div className="first-page-collection_padding">
            {this.renderFunction()}
          </div>
        </div>
      </section>
    );
  }
}