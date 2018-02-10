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
  constructor(props){
    super(props);
    this.state = {
      selectedItems: []
    };
    this.addToList = this.addToList.bind(this);
    this.renderFunction = this.renderFunction.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  addToList(item) {
    let currentItems = this.state.selectedItems;

    if (!this.isSelected(item)){
      currentItems.push(item);
    } else {
      for (let i = 0; i < currentItems.length; i++){
        if (item === currentItems[i]){
          currentItems.splice(i,1);
        }
      }
    }

     this.setState({selectedItems: currentItems});
  }
  isSelected(item) {
    for (let key in this.state.selectedItems) {
      if (this.state.selectedItems[key] === item) return true;
    }
    return false;
  }
  renderFunction(){
    return products.map((item,i) => {
      return <Item key={"image_"+i}
                   image={ item.image }
                   discount={item.discount}
                   onClick={() => { return this.addToList(item) }}
                   color={this.isSelected(item) ? 'white' : 'black'}
                   borderBottom={this.isSelected(item) ? '40px solid black' : '40px solid #f09d66'}
                   filter={this.isSelected(item) ? "drop-shadow(0px 0px 4px #333)" : "none"}
                   isAdded={this.isSelected(item) ? "added" : "+add to cart"}/>;
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