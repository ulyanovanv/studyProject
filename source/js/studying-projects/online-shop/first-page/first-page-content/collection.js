import React from "react";

import {Headings} from "./headings";
import {Item} from "./../collection-items/item";

let products = [
  {image:"/images/online-shop/collection/collection_1.jpg", isSelected: false, color: "black", discount:"10"},
  {image:"/images/online-shop/collection/collection_2.jpg", isSelected: false, color: "black"},
  {image:"/images/online-shop/collection/collection_3.jpg", isSelected: false, color: "black", discount: "20"},
  {image:"/images/online-shop/collection/collection_4.jpg", isSelected: false, color: "black", discount: "20"},
  {image:"/images/online-shop/collection/collection_5.jpg", isSelected: false, color: "black"},
  {image:"/images/online-shop/collection/collection_6.jpg", isSelected: false, color: "black"},
  {image:"/images/online-shop/collection/collection_7.jpg", isSelected: false, color: "black"},
  {image:"/images/online-shop/collection/collection_8.jpg", isSelected: false, color: "black", discount: "10"},
];


export class Collection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItems: []
      // color: "black"
    }
    this.addToList = this.addToList.bind(this);
  }

  addToList(item) {
    let currentItems = this.state.selectedItems;

    item.isSelected = !item.isSelected;
    if (item.isSelected === true){
      currentItems.push(item.image);
      item.color = "white";
      // this.setState({color:"white"});
    } else {
      for (let i = 0; i<currentItems.length; i++){
        if (item.image === currentItems[i]){
          currentItems.splice(i,1);
        }
      }
      item.color = "black";
      // this.setState({color:"black"});
    }

    // this.setState({selectedItems: currentItems});
    // let toggleColor = "black" ? "white" : "black";
    // this.setState({color: toggleColor});
    console.log(item.color);
    console.log(this.state.selectedItems);
  }
  renderFunction(){
    return products.map((item,i) => {
      return <Item key={"image_"+i} image={ item.image } discount={item.discount} onClick={() => { return this.addToList(item) }} color={item.color}/>;
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