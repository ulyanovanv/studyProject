import React from "react";

import {connect} from "react-redux";

let NavigationNames = ["home","about us","shop","blog","contact us"];

class PageHeader extends React.Component {
  constructor(props){
    super(props);
    this.renderNavigation = this.renderNavigation.bind(this);
  }

  renderNavigation(){
    return NavigationNames.map((item) => {
      return (
        <div className="page-header__menu_right-side_navigation_name" key={item}>
          <a href="/bright-food">{item}</a>
          <div className="page-header__menu_right-side_navigation_name_green-circle"></div>
        </div>)
    })
  }
  render(){
    return (<section className="page-header">
      <div className="page-header_image-container">
        <div className='page-header_padding'>
          <div className="page-header__menu">

            <div className="page-header__menu_left-side">
              <span id="logo">Logo</span>
              <img id="leaf" src="/images/bright-food/main-image/small-leaf.png"/>
              <span> Type</span>
            </div>

            <div className="page-header__menu_right-side">

              <div className="page-header__menu_right-side_navigation">
                {this.renderNavigation()}
              </div>

              <div className="page-header__menu_right-side_basket">
                <div className="page-header__menu_right-side_basket_combine"
                     onClick={ this.props.basketShow}>
                  <img id="basket" src="/images/bright-food/main-image/basket.png"/>
                  <div id="number-of-chosen-items">{this.props.store.basket.basketLength}</div>
                </div>
                <div className="page-header__menu_right-side_basket_price">
                  <span>$</span>
                  <span id="cost">{this.props.store.basket.totalPrice}</span>
                </div>
              </div>

              <div className="page-header__menu_right-side_toggle-menu">
                <img id="toggle-menu" src="/images/bright-food/main-image/toggle-menu.png"/>
              </div>

            </div>

          </div>

          <div className="page-header__heading">
            <div className="page-header__heading_web-site-heading ">
              <span>Organic</span>
              <span className="bold"> Healthy Food </span>
            </div>
            <div className="page-header__heading_addition-text">
              Organic food, vegetables and more to your door
            </div>
            <div className="page-header__heading_button-to-start">
              <div className="page-header__heading_button-to-start_gradient">
                <div id="shopping-button">Shopping</div>
              </div>
            </div>
          </div>

          <aside className="page-header__social-media">
            <div className="page-header__social-media_each">
              <b>f</b>
            </div>
            {/*<div className="page-header__social-media_each">*/}
              {/*<img src="/images/bright-food/main-image/twitter.png"/>*/}
            {/*</div>*/}
            <div className="page-header__social-media_each">
              <i>g<span style={{fontSize:"8px"}}>+</span></i>
            </div>
            <div className="page-header__social-media_each">
              <b>in</b>
            </div>
          </aside>

        </div>
      </div>
    </section>);
  }
}
export default connect(state => ({store:state}))(PageHeader);