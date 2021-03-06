import React from "react";

import {connect} from "react-redux";
import Product from "../../MainPage/MainPageComponents/reused-elements/Product.js";


class ChosenProducts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zoomedItemId: false
    };
    this.renderProducts = this.renderProducts.bind(this);
    this.changeZoom = this.changeZoom.bind(this);
  }
  changeBasketList(item) {
    this.props.dispatch({type: "DELETE_ITEM", item});
  }
  changeZoom(newId) {
    if (newId === this.state.zoomedItemId){
      this.setState({zoomedItemId: false})
    } else {
      this.setState({zoomedItemId: newId});
    }
  }
  renderProducts(){
    if (this.props.store.basket.items.length === 0){
      return <div style={{fontFamily: "'Dancing Script', cursive", fontSize: "2rem", margin: "auto"}}>You still haven't chosen any product</div>
    } else {
      return this.props.store.basket.items.map((item) => {
        let price = item.price.toFixed(2);
        let previousPrice = item.previousPrice.toFixed(2);

        return (
          <div key={item.id} className="products">
            <Product src={item.src}
                     title={item.name}
                     name={item.name}
                     price={price}
                     previousPrice={previousPrice}
                     changeBasketList={() => { return this.changeBasketList(item)}}
                     layoutType="vertical"
                     changeZoom = { () => { return this.changeZoom(item.id)}}
                     isZoomed = {this.state.zoomedItemId === item.id}
              // isSelected = { this.isSelected(item) }
            />
          </div>);

      })
    }

  }
  render(){
    return (
      <section className="chosen-products">
        <div className='chosen-products_padding'>
          <div className="chosen-products__products">
              {this.renderProducts()}
          </div>
        </div>
      </section>);
  }
}
export default connect(state => ({store:state}))(ChosenProducts);