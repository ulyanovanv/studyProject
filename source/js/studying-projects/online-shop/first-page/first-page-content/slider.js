import React from "react";

export class Slider extends React.Component {
  render() {
    return (
      <section className="first-page-slider">

        <div className="first-page-slider__image-container">
          <img src="/images/online-shop/center/first-center.jpg"/>
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
            <div className="first-page-slider__slider-changer_romb first-page-slider__slider-changer_black"></div>
            <div className="first-page-slider__slider-changer_romb"></div>
            <div className="first-page-slider__slider-changer_romb"></div>
            <div className="first-page-slider__slider-changer_romb"></div>
          </div>

        </div>
      </section>
    );
  }
}