import React from "react";

import {Headings} from "./headings";


export class Brands extends React.Component {
    render() {
    return (
      <section className="first-page-brands">
        <Headings headerName="Brands"/>
        <div className="first-page-brands_container">
          <div className="first-page-brands_padding">
            <div className="first-page-brands__name bakery"></div>
            <div className="first-page-brands__name harvest"></div>
            <div className="first-page-brands__name lavalier"></div>
            <div className="first-page-brands__name landlock"></div>
            <div className="first-page-brands__name spectrum"></div>
            <div className="first-page-brands__name home-energy"></div>
          </div>
        </div>
      </section>
    )
  }
}