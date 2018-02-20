import React from "react";

let first = [
  {src: "/images/bright-food/business/red.jpg", name:"fruits", itemss: 52 },
  {src: "/images/bright-food/business/yellow.jpg", name: "vegetables", itemss: 35 },
  {src: "/images/bright-food/business/green.jpg", name: "breads", itemss: 23 }
];

let second = [
  {src: "/images/bright-food/business/blue.jpg", name:"juices", itemss: 26 },
  {src: "/images/bright-food/business/marina.jpg", name: "juices", itemss: 31 },
  {src: "/images/bright-food/business/brown.jpg", name: "tea", itemss: 17 }
]

export class Business extends React.Component {
  renderSmallCategories(array) {
    return array.map((item,key = 0) => {
      return <div className="information_categories_of-products" key={key+1}>
        <img src={item.src}/>
        <div className="information_categories_of-products_for-line"></div>
        <div className="information_categories_of-products_category">
          <span>organic&nbsp;</span>
          <span>{item.name}</span>
        </div>
        <div className="information_categories_of-products_quantity">
          {item.itemss} items
        </div>
      </div>
    })



  }
  render() {
    return (
      <section className="business">
        <div className="about-us">
          <div className="about-us_width">
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
          <div className="information_width">

            <div className="information_first-column">
              <div className="information_categories">
                {this.renderSmallCategories(first)}
              </div>
              <div className="information_text">
                <p className="information_text_above">fresh from our farm</p>
                <p className="information_text_middle">115+ <span>organic fruits</span> & <span>organic juices</span></p>
                <p className="information_text_below">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>

            <div className="information_second-column">
              <div className="information_categories">
                {this.renderSmallCategories(second)}
              </div>
              <div className="information_text">
                <p className="information_text_above">fresh from our farm</p>
                <p className="information_text_middle">220+ <span>fruits, vegetables</span> & <span>lot more</span></p>
                <p className="information_text_below">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
              </div>
            </div>

          </div>
        </div>

      </section>
    );
  }
}