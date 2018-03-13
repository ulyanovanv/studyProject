import React from "react";

import {Item} from "./../first-page/collection-items/item";
import {Headings} from "./../first-page/first-page-content/headings";
import {connect} from "react-redux";


class ChosenItems extends React.Component {
  constructor(props){
    super(props);
    this.renderFunction = this.renderFunction.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
  }
  deleteFromList(item) {
      this.props.dispatch({type: "DELETE_ITEM", item});
  }

  renderFunction(){
    let itemsToDisplay = this.props.store.basket.items;
    return itemsToDisplay.map((item,i) => {
      return <Item key={"image_"+i}
                          image={ item.image }
                          discount={item.discount}
                          onClick={() => { return this.deleteFromList(item) }}
                          color='white'
                          borderBottom='40px solid black'
                          filter="drop-shadow(0px 0px 4px #333)"
                          isAdded="added"
      />;
    });
  }

  render(){
    console.log(this.props.store);
    const alternative = <div> Your have not chosen any product. </div>;
    return (
      <section className="first-page-collection">
        <Headings headerName="Your Basket"/>
        <div className="first-page-collection_container">
          <div className="first-page-collection_padding">
            {this.props.store.basket.items.length !== 0 && this.renderFunction()}
            {this.props.store.basket.items.length === 0 && alternative}
          </div>
        </div>
      </section>);
  }
}
export default connect(state => ({store:state}))(ChosenItems);
