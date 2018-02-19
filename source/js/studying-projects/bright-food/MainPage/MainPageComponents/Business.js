import React from "react";

export class Business extends React.Component {
  render() {
    return (
      <section className="business">
        <div className="about-us">
          <div className="business_width">
            <div className="about-us__organic-farm">

              <div className="about-us__organic-farm_heading">
                <span>we are&nbsp;</span>
                <span>organic food</span>
              </div>
              <div className="about-us__organic-farm_inbetween">
                <div className="about-us__organic-farm_inbetween_lines"></div>
                <span>About the natural farmfood</span>
                <div className="about-us__organic-farm_inbetween_lines"></div>
              </div>
              <div className="about-us__organic-farm_text"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
            </div>

            <div className="about-us__qualities">
              <div className="about-us__qualities_each">
                <div className="about-us__qualities_each_image green"></div>
                <div className="about-us__qualities_each_heading">
                  <span>fresh from&nbsp;</span>
                  <span>natural farm</span>
                </div>
                <div className="about-us__qualities_each_description" >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                </div>
                <button className="about-us__qualities_each_button" >
                  Read more
                </button>
              </div>
              <div className="about-us__qualities_each">
                <div className="about-us__qualities_each_image red"></div>
                <div className="about-us__qualities_each_heading">
                  <span>100%&nbsp;</span>
                  <span>organic food</span>
                </div>
                <div className="about-us__qualities_each_description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                </div>
                <button className="about-us__qualities_each_button">
                  Read more
                </button>
              </div>
              <div className="about-us__qualities_each">
                <div className="about-us__qualities_each_image yellow"></div>
                <div className="about-us__qualities_each_heading">
                  <span>premium&nbsp;</span>
                  <span>quality</span>
                </div>
                <div className="about-us__qualities_each_description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                </div>
                <button className="about-us__qualities_each_button">
                  Read more
                </button>
              </div>
              <div className="about-us__qualities_each">
                <div className="about-us__qualities_each_image braun"></div>
                <div className="about-us__qualities_each_heading">
                  <span>fresh from&nbsp;</span>
                  <span>natural farm</span>
                </div>
                <div className="about-us__qualities_each_description">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                </div>
                <button className="about-us__qualities_each_button">
                  Read more
                </button>
              </div>
            </div>

            <div className="about-us__fruit">
              <div className="about-us__fruit_first"></div>
              <div className="about-us__fruit_second"></div>
            </div>

          </div>

          <div id="leaf-left">
            <img src="/images/bright-food/business/leaf-left.png"/>
          </div>

          <div id="leaf-right">
            <img src="/images/bright-food/business/leaf-right.png"/>
          </div>

        </div>

        <div className="information">
          <div className="business_width"></div>
        </div>

      </section>
    );
  }
}