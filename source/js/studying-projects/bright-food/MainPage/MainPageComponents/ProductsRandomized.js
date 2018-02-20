import React from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import Product from "./reused-elements/Product";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

products = shuffle(products);

class ProductsRandomized extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: null,
      selectedItems: []
    };
    this.renderProducts = this.renderProducts.bind(this);
    this.changeBasketList = this.changeBasketList.bind(this);
  }

  changeBasketList(item) {
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
  renderProducts(category) {
    return products.map((item) => {
        let price = item.price.toFixed(2);
        let previousPrice = item.previousPrice.toFixed(2);
        let layoutType = "vertical";
        if (this.state.category === null || item.category === category) {
          return (
            <div key={item.id}>
              <Product src={item.src}
                       title={item.name}
                       name={item.name}
                       price={price}
                       previousPrice={previousPrice}
                       changeBasketList={() => { return this.changeBasketList(item)}} //передача функции
                       isSelected = { this.isSelected(item) }  //результат функции
                       layoutType = {layoutType}
                         />
            </div>);
        }
    })
  }

  render() {
    let settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: false,
      speed: 500,
      customPaging(){return <button>{"hello"}</button>;},
      responsive: [
        {breakpoint: 2550, settings: {slidesToShow: 7, slidesToScroll: 7}},
        {breakpoint: 2350, settings: {slidesToShow: 6, slidesToScroll: 6}},
        {breakpoint: 1900, settings: {slidesToShow: 5, slidesToScroll: 5}},
        {breakpoint: 1500, settings: {slidesToShow: 4, slidesToScroll: 4}},
        {breakpoint: 1250, settings: {slidesToShow: 3, slidesToScroll: 3}},
        {breakpoint: 850, settings: {slidesToShow: 2, slidesToScroll: 2}}
      ]
    };

    return (
      <section className="products-randomized">
        <div className='products-randomized_padding'>

          <div className="products-randomized__navigation">
            <div className="products-randomized__navigation_button" id="vegetables" onClick={() => {this.setState({category: "vegetables"});}}>
              organic &nbsp;
              <span>vegetables</span>
            </div>
            <div className="products-randomized__navigation_button" id="fruits" onClick={() => {this.setState({category: "fruit"});}}>
              organic &nbsp;
              <span>fruits</span>
            </div>
            <div className="products-randomized__navigation_organic">
              <img id="fruit" src="/images/bright-food/products/grapefruit.png"/>
              <img id="organic" src="/images/bright-food/products/organic.png"/>
            </div>
            <div className="products-randomized__navigation_button" onClick={() => {this.setState({category: null});}}>
              organic &nbsp;
              <span>fruits juices</span>
            </div>
            <div className="products-randomized__navigation_button" onClick={() => {this.setState({category: null});}}>
              organic &nbsp;
              <span>dried fruits</span>
            </div>
          </div>

          <div className="products">
            <Slider {...settings}>
              {this.renderProducts(this.state.category)}
            </Slider>
          </div>

        </div>
      </section>
    )
  }
}
export default connect(state => ({store:state}))(ProductsRandomized);