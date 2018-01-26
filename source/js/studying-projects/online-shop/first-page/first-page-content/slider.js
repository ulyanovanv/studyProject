import React from "react";
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/images/online-shop/center/first-center.jpg',
  },
  {
    original: '/images/online-shop/center/first-center.jpg',
  },
  {
    original: '/images/online-shop/center/first-center.jpg',
  },
  {
    original: '/images/online-shop/center/first-center.jpg',
  }
]

export class Slider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfActiveImage: 0
    }
    this.renderRombs = this.renderRombs.bind(this);
  }
  renderRombs() {
    let rombs = [];
    for (let i=0; i<images.length; i++) {
      let activeClass = i === this.state.numberOfActiveImage ? " first-page-slider__slider-changer_black" : "";
      rombs.push(<div key={i} className={ "first-page-slider__slider-changer_romb" + activeClass }></div>);
    }
    return rombs;
  }


  render() {

    return (
      <section className="first-page-slider">

        <div className="first-page-slider__image-container">
          <ImageGallery items={images}
                        infinite={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showThumbnails={false}
                        onSlide={
                          (currentIndex) => {
                            this.setState({numberOfActiveImage: currentIndex});
                          }
                        }/>
          {/*<img src="/images/online-shop/center/first-center.jpg"/>*/}
        </div>

        <div className="first-page-slider_central-message">

          <div className="first-page-slider__discounts">
            <div className="first-page-slider__discounts_container">
              <div className="discounts-season">Mid-season</div>
              <div className="discounts-sale">Sale</div>
              <div className="discounts-third-line">
                <div className="discounts-third-line_bottom-line">
                  <div className="discounts-third-line_left"></div>
                </div>
                <p>Up to</p>
                <div className="discounts-third-line_bottom-line">
                  <div className="discounts-third-line_smaller-container"></div>
                </div>
              </div>
              <div className="discounts-number"> 50% off</div>
            </div>
          </div>

          <div className="first-page-slider__shop-button">

            <a href="/online-shop">Shop now</a>

          </div>

          <div className="first-page-slider__slider-changer">
            { this.renderRombs() }
          </div>

        </div>
      </section>
    );
  }
}