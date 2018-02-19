import React from "react";

import {connect} from "react-redux";
import Product from "../../MainPage/MainPageComponents/reused-elements/Product.js";


class ChosenProducts extends React.Component {
  constructor(props){
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
  }
  changeBasketList(item) {
    this.props.dispatch({type: "DELETE_ITEM", item});
  }
  renderProducts(){
    if (this.props.store.basket.items.length === 0){
      return <div>You still haven't chosen any product</div>
    } else {
      return this.props.store.basket.items.map((item) => {
        let price = item.price.toFixed(2);
        let previousPrice = item.previousPrice.toFixed(2);

        return (
          <div key={item.id}>
            <Product src={item.src}
                     title={item.name}
                     name={item.name}
                     price={price}
                     previousPrice={previousPrice}
                     changeBasketList={() => { return this.changeBasketList(item)}}
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