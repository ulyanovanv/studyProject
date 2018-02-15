import React from "react";

const products = [
  {id: 1, src: "/images/bright-food/products/cherries.png", name:"cherries", category: "fruit", price: "30", previousPrice: "40"},
  {id: 2, src: "/images/bright-food/products/cole.png", name:"cole", category: "vegetables", price: "25"},
  {id: 3, src: "/images/bright-food/products/ginger.png", name:"ginger", category: "vegetables", price: "20", previousPrice: "23"},
  {id: 4, src: "/images/bright-food/products/grapefruit.png", name:"grapefruits", category: "fruit", price: "30" },
  {id: 5, src: "/images/bright-food/products/mushrooms.png", name:"mushrooms", category: "vegetables", price: "30", previousPrice: "40"},
  {id: 6, src: "/images/bright-food/products/olive.png", name:"olive", category: "vegetables", price: "33"},
  {id: 7, src: "/images/bright-food/products/onion.png", name:"onion", category: "vegetables", price: "15", previousPrice: "16"},
  {id: 8, src: "/images/bright-food/products/paprika.png", name:"paprika", category: "vegetables", price: "30"},
  {id: 9, src: "/images/bright-food/products/peaches.png", name:"peaches", category: "fruit", price: "23", previousPrice: "28"},
  {id: 10, src: "/images/bright-food/products/pineapple.png", name:"pineapple", category: "fruit", price: "50", previousPrice: "55"},
  {id: 11, src: "/images/bright-food/products/tomatoes.png", name:"tomatoes", category: "vegetables", price: "34"}
]

import {Product} from "./reused-elements/Product";

export class ProductsRandomized extends React.Component {
  constructor(props){
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
  }
  renderProducts() {
    return products.map((item) => {
      return <Product src={item.src} title={item.name}/>
    })
  }


  render() {
    return (
      <section className="products-randomized">
        <div className='products-randomized_padding'>

          <div className="products-randomized__navigation">
            <div className="products-randomized__navigation_button">
              organic &nbsp;
              <span>vegetables</span>
            </div>
            <div className="products-randomized__navigation_button">
              organic &nbsp;
              <span>fruits</span>
            </div>
            <div className="products-randomized__navigation_organic">
              <img id="fruit" src="/images/bright-food/products/grapefruit.png"/>
              <img id="organic" src="/images/bright-food/products/organic.png"/>
            </div>
            <div className="products-randomized__navigation_button">
              organic &nbsp;
              <span>fruits juices</span>
            </div>
            <div className="products-randomized__navigation_button">
              organic &nbsp;
              <span>dried fruits</span>
            </div>
          </div>

          <div className="products">
            {this.renderProducts()}
          </div>

        </div>
      </section>
    )
  }
}