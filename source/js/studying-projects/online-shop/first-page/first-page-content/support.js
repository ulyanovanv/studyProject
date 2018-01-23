import React from "react";

export class Support extends React.Component {
  render() {
    return (
      <section className="first-page-support">
        <div className="first-page-support_container">
          <div className="first-page-support__services first-page-support__services_beige shipping">
            <p className="first-page-support__services_name">free sheeping</p>
            <p className="first-page-support__services_undertext">In order min 200$</p>
          </div>

          <div className="first-page-support__services_triangle-beige-left"></div>


          <div className="first-page-support__services first-page-support__services_black ">
            <div className="first-page-support__services_triangle-white-left"></div>
            <div className="first-page-support__services_black_text-container return">
              <p className="first-page-support__services_name">30-days return</p>
              <p className="first-page-support__services_undertext">Money back guarantee</p>
            </div>
            <div className="first-page-support__services_triangle-white-right"></div>
          </div>

          <div className="first-page-support__services_triangle-beige-right"></div>

          <div className="first-page-support__services first-page-support__services_beige support">
            <p className="first-page-support__services_name">24/7 support</p>
            <p className="first-page-support__services_undertext">Lifestime support</p>
          </div>
        </div>

      </section>

    );
  }
}