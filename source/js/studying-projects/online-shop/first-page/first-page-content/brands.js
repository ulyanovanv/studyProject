import React from "react";

import {Headings} from "./headings";


export class Brands extends React.Component {
    render() {
    return (
      <section className="first-page-brands">
        <Headings headerName="Brands"/>
        <div className="first-page-brands_container">
          <div className="first-page-brands_padding">
            <a href="/online-shop">
              <div className="first-page-brands__name bakery"></div>
            </a>
            <a href="/online-shop">
              <div className="first-page-brands__name harvest"></div>
            </a>
            <a href="/online-shop">
              <div className="first-page-brands__name lavalier"></div>
            </a>
            <a href="/online-shop">
              <div className="first-page-brands__name landlock"></div>
            </a>
            <a href="/online-shop">
              <div className="first-page-brands__name spectrum"></div>
            </a>
            <a href="/online-shop">
              <div className="first-page-brands__name home-energy"></div>
            </a>
          </div>
        </div>
      </section>
    )
  }
}