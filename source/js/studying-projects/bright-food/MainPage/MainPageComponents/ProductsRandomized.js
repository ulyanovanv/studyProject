import React from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import Product from "./reused-elements/Product";



class ProductsRandomized extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: null,
      selectedItems: []
    };
    this.renderProductsVertical = this.renderProductsVertical.bind(this);
    this.renderProductsHorizontal = this.renderProductsHorizontal.bind(this);
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
  renderProductsVertical(category) {
    return this.props.products.map((item) => {
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
  renderProductsHorizontal() {
    return this.props.products.map((item) => {
      let price = item.price.toFixed(2);
      let previousPrice = item.previousPrice.toFixed(2);
      let layoutType = "horizontal";
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
    })
  }

  render() {
    if (this.props.classForRender === "products-randomized") {
      let settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: false,
        speed: 500,
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
                {this.renderProductsVertical(this.state.category)}
              </Slider>
            </div>

          </div>
        </section>
      )
    } else if (this.props.classForRender === "products-all") {
      let counter = 0;
      let settings = {
        dots: true,
        dotsClass: 'slick-dots',
        infinite: false,
        speed: 500,
        customPaging: function(counter) {
          counter +=1;
          return (
            <button> {counter}</button>);
        },
        responsive: [
          {breakpoint: 2550, settings: {slidesToShow: 2, slidesToScroll: 2}},
        ]
      };
      return (<section className="products-all">
        <div className="products-all_width">

          <header className="products-all__header">
            <div className="products-all__header_left">
              <p>natural deal of the day</p>
              <p>organic foods <span>50%</span>off</p>
            </div>
            <div className="products-all__header_image">
              <img src="/images/bright-food/products/tomatoes.png"/>
            </div>
            <div className="products-all__header_right">
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </span>
            </div>
          </header>

          <div className="products-all__time-left">
            <div className="products-all__time-left_gradient-container">
              <div className="products-all__time-left_text">
                <span>28</span><br/>
                <span>days</span>
              </div>
            </div>
            <div className="products-all__time-left_gradient-container">
              <div className="products-all__time-left_text">
                <span>25</span><br/>
                <span>hours</span>
              </div>
            </div>
            <div className="products-all__time-left_gradient-container">
              <div className="products-all__time-left_text">
                <span>57</span><br/>
                <span>mins</span>
              </div>
            </div>
            <div className="products-all__time-left_gradient-container">
              <div className="products-all__time-left_text">
                <span>36</span><br/>
                <span>secs</span>
              </div>
            </div>
          </div>

          <div className="products-all__products products">
            <Slider {...settings}>
             {this.renderProductsHorizontal()}
            </Slider>
          </div>

          <div id="leaf-left-second">
            <img src="/images/bright-food/business/leaf-left-second.png"/>
          </div>

          <div id="leaf-right-second">
            <img src="/images/bright-food/business/leaf-right-second.png"/>
          </div>

          <div className="white-path">
            <img src="/images/bright-food/business/path.png"/>
          </div>

        </div>
      </section>);
    }


  }
}
export default connect(state => ({store:state}))(ProductsRandomized);