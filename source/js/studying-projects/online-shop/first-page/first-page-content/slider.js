import React from "react";
import ImageGallery from 'react-image-gallery';

const images = Array(4).fill({ original: '/images/online-shop/center/first-center.jpg'});

export class Slider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfActiveImage: 0
    };
    this.renderRombs = this.renderRombs.bind(this);
  }

  renderRombs() {
    let rombs = [];
    for (let i = 0; i < images.length; i++) {
      let activeClass = i === this.state.numberOfActiveImage ? " first-page-slider__slider-changer_black" : "";
      rombs.push(<div key={i} className={"first-page-slider__slider-changer_romb" + activeClass}></div>);
    }
    return rombs;
  }

  render() {
    return (
      <section className="first-page-slider text-uppercase pb-2">
        <div className="first-page-slider_central-message mx-auto my-0 w-100 d-flex flex-column
        justify-content-between align-items-center position-absolute">

          <div className="d-none d-sm-flex flex-row justify-content-center align-items-center">
            <div className="first-page-slider__discounts d-flex flex-column justify-content-around mt-5 mt-lg-0">
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
              <div className="discounts-number mb-3">50% off</div>
            </div>
          </div>

          <a className="btn btn-default first-page-slider__shop-button">
              Shop now
          </a>

          <div className="d-none d-sm-flex first-page-slider__slider-changer flex-row justify-content-around mb-xl-5">
            { this.renderRombs() }
          </div>
        </div>

        <div className="first-page-slider__image-container content-restraint position-relative px-sm-2">
          <ImageGallery
            items={images}
            infinite={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            onSlide={
              (currentIndex) => {
                this.setState({numberOfActiveImage: currentIndex});
              }
            }
          />
        </div>
      </section>
    );
  }
}