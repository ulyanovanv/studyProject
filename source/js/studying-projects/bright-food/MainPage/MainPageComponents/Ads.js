import React from "react";

import Product from "./reused-elements/Product";

import {SlidersColumn} from "./SlidersColumn";

export class Ads extends React.Component {
  render() {
    return (<section className="ads">
      <div className="ads_width">
        <div className="ads__top">
          <div className="ads__top_image-container">
            <img src="/images/bright-food/products/grapefruit.png"/>
          </div>
          <div className="ads__top_header">
            <span>&nbsp;a taste of&nbsp;</span>
            <span>real food&nbsp;</span>
          </div>
        </div>
        {this.props.products.length > 0 && (<div className="ads__products">
          <SlidersColumn products={this.props.products} category="new from the farm" header="new arrivals"/>
          <SlidersColumn products={this.props.products} category="best seller" header="popular"/>
          <SlidersColumn products={this.props.products} category="customer needs"  header="random"/>
        </div>)}
        <div className="ads__adverts">
          <div className="ads__adverts_olive">
            <div className="ads__adverts_fixed-text">Fresh from our farm: <span>fresh olive</span></div>
            <div className="ads__adverts_olive_image"></div>
            <button className="ads__adverts_fixed-button">Shop now</button>
            <div className="ads__adverts_inner-div">
              <p className="text-curly">Vegatables</p>
              <p className="text-bigger">Green <span>olive</span></p>
              <p className="text-upper">35% off in june-july</p>
            </div>
          </div>
          <div className="ads__adverts_peach">
            <div className="ads__adverts_fixed-text">fresh summer <span>fruit</span></div>
            <div className="ads__adverts_peach_image"></div>
            <button className="ads__adverts_fixed-button">Shop now</button>
            <div className="ads__adverts_inner-div">
              <p className="text-curly">Fruits</p>
              <p className="text-bigger">all <span>summer</span></p>
              <p className="text-upper">35% off in june-july</p>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}