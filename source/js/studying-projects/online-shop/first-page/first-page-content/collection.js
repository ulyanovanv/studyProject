import React from "react";

import {Headings} from "./headings";
import {Item} from "./../collection-items/item";

let products = [
  {image:"/images/online-shop/collection/collection_1.jpg", discount:"10"},
  {image:"/images/online-shop/collection/collection_2.jpg"},
  {image:"/images/online-shop/collection/collection_3.jpg", discount: "20"},
  {image:"/images/online-shop/collection/collection_4.jpg", discount: "20"},
  {image:"/images/online-shop/collection/collection_5.jpg"},
  {image:"/images/online-shop/collection/collection_6.jpg"},
  {image:"/images/online-shop/collection/collection_7.jpg"},
  {image:"/images/online-shop/collection/collection_8.jpg", discount: "10"},
];

export class Collection extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  renderFunction(){
    return products.map(item => {
      return <Item image={ item.image } discount={item.discount}/>;
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