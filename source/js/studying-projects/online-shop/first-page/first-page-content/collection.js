import React from "react";
import {connect} from "react-redux";

import Headings from "./headings";
import {Item} from "./../collection-items/item";

let products = [
  {id:0, image:"/images/online-shop/collection/collection_1.jpg", discount:"10"},
  {id:1, image:"/images/online-shop/collection/collection_2.jpg"},
  {id:2, image:"/images/online-shop/collection/collection_3.jpg", discount: "20"},
  {id:3, image:"/images/online-shop/collection/collection_4.jpg", discount: "20"},
  {id:4, image:"/images/online-shop/collection/collection_5.jpg"},
  {id:5, image:"/images/online-shop/collection/collection_6.jpg"},
  {id:6, image:"/images/online-shop/collection/collection_7.jpg"},
  {id:7, image:"/images/online-shop/collection/collection_8.jpg", discount: "10"},
];


class Collection extends React.Component {
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
      this.props.dispatch({type: "ADD_ITEM", item});
    } else {
      this.props.dispatch({type: "DELETE_ITEM", item});
    }

     this.setState({selectedItems: currentItems});
  }

  isSelected(item) {
    for (let key in this.props.store.basket.items) {
      if (this.props.store.basket.items[key].id === item.id) return true;
    }

    return false;
  }

  renderFunction(){
    return products.map((item,i) => {

      return (<div className='flex-grow-1 additional-wrapper-for-image m-1'>
        <Item key={"image_"+i}
                   image={ item.image }
                   discount={item.discount}
                   onClick={() => { return this.addToList(item) }}
                   color={this.isSelected(item) ? 'white' : 'black'}
                   borderBottom={this.isSelected(item) ? '40px solid black' : '40px solid #f09d66'}
                   filter={this.isSelected(item) ? "drop-shadow(0px 0px 4px #333)" : "none"}
                   isAdded={this.isSelected(item) ? "added" : "+add to cart"}/>
      </div>);
    });
  }

  render() {
    return (
      <section className="first-page-collection">
        <div className='content-restraint p-2'>
          <Headings headerName="Summer Collection"/>
          <div className="first-page-collection_padding d-flex flex-row flex-wrap justify-content-center align-items-center p-0">
            {this.renderFunction()}
          </div>
        </div>
      </section>
    );
  }
}
export default connect(state => ({store:state}))(Collection);