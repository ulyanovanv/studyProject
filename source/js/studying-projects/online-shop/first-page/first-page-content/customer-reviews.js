import React from "react";
import Headings from "./headings";

export default function Customers() {
  return (
    <section className="d-none d-lg-block first-page-customer-reviews">
      <div className='content-restraint p-2'>
        <Headings headerName="Customers says"/>
      </div>

      <div className="first-page-customer-reviews_container">
        <div className='content-restraint px-2'>
          <div className="first-page-customer-reviews_triangle"></div>

          <div className="d-flex flex-row justify-content-center align-items-center py-3">
            <div className="d-flex flex-row justify-content-start align-items-end flex-grow-1">
              <img className='img-fluid' src="/images/online-shop/customers/sandra.png"/>
              <div className="first-page-customer-reviews_description d-flex flex-column justify-content-around align-items-start text-left">
                <p className="opinion">
                  Satisfied with the quality of goods,<br/>
                  it seems to be the best online shop
                </p>
                <p className="customer-name">Sandra Dehli</p>
                <p className="occupation">Sales manager</p>
              </div>
            </div>

            <div className="d-flex justify-content-start align-items-end flex-grow-1 flex-row-reverse">
              <img className='img-fluid' src="/images/online-shop/customers/peter.png"/>
              <div className="first-page-customer-reviews_description d-flex flex-column justify-content-around align-items-end text-right">
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
      </div>
    </section>
  );
}