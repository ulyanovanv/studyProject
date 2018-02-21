import React from 'react';

import PageHeader from "./PageInherent/PageHeader";
import ProductsRandomized from "./MainPageComponents/ProductsRandomized";
import {Business} from "./MainPageComponents/Business";
// import {ProductsAll} from "./MainPageComponents/ProductsAll";

let products = [
  {id: 1, src: "/images/bright-food/products/cherries.png", name:"cherries", category: "fruit", price: 30, previousPrice: 40},
  {id: 2, src: "/images/bright-food/products/cole.png", name:"cole", category: "vegetables", price: 25, previousPrice: 0},
  {id: 3, src: "/images/bright-food/products/ginger.png", name:"ginger", category: "vegetables", price: 20, previousPrice: 23},
  {id: 4, src: "/images/bright-food/products/grapefruit.png", name:"grapefruits", category: "fruit", price: 30, previousPrice: 0},
  {id: 5, src: "/images/bright-food/products/mushrooms.png", name:"mushrooms", category: "vegetables", price: 30, previousPrice: 40},
  {id: 6, src: "/images/bright-food/products/olive.png", name:"olive", category: "vegetables", price: 33, previousPrice: 0},
  {id: 7, src: "/images/bright-food/products/onion.png", name:"onion", category: "vegetables", price: 15, previousPrice: 16},
  {id: 8, src: "/images/bright-food/products/paprika.png", name:"paprika", category: "vegetables", price: 30, previousPrice: 0},
  {id: 9, src: "/images/bright-food/products/peaches.png", name:"peaches", category: "fruit", price: 23, previousPrice: 28},
  {id: 10, src: "/images/bright-food/products/pineapple.png", name:"pineapple", category: "fruit", price: 50, previousPrice: 55},
  {id: 11, src: "/images/bright-food/products/tomatoes.png", name:"tomatoes", category: "vegetables", price: 34, previousPrice: 0}
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

products = shuffle(products);


export class MainPage extends React.Component {
  render() {
    return (<div className="main-page">
      <PageHeader basketShow={ ()=>this.props.changeOutlook(false)}/>
      <ProductsRandomized classForRender="products-randomized" products={products}/>
      <Business/>
      <ProductsRandomized classForRender="products-all" products={products}/>
      {/*<ProductsCategorizedNowelty/>*/}
      {/*<PageFooter/>*/}
    </div>)

  }
}
