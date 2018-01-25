import React from "react";

import {Headings} from "./headings";

export class Customers extends React.Component {

  render() {
    return (
      <section className="first-page-customer-reviews">
        <Headings headerName="Customers says"/>
        <div className="first-page-customer-reviews_container">
          <div className="first-page-customer-reviews_triangle"></div>
          <div className="first-page-customer-reviews__customers">

            <div className="first-page-customer-reviews__customers_content-left">

              <div className="first-page-customer-reviews__customers_content-picture">
                <img src="/images/online-shop/customers/sandra.png"/>
              </div>
              <div className="first-page-customer-reviews__customers_content-left_description">
                <p className="opinion">
                  Satisfied with the quality of goods,<br/>
                  it seems to be the best online shop
                </p>
                <p className="customer-name">Sandra Dehli</p>
                <p className="occupation">Sales manager</p>
              </div>

            </div>

            <div className=" first-page-customer-reviews__customers_content-right">

              <div className="first-page-customer-reviews__customers_content-picture">
                <img src="/images/online-shop/customers/peter.png"/>
              </div>
              <div className="first-page-customer-reviews__customers_content-right_description">
                <p className="opinion">
                  I have bought a T-Shirt,<br/>
                  never thought that it can be so soft.
                </p>
                <p className="customer-name">Peter Handington</p>
                <p className="occupation">Architector</p>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }
}