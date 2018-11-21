import React from "react";
import Headings from "./headings";

const brands = ['bakery', 'harvest', 'lavalier', 'landlock', 'spectrum', 'home-energy'];

export default function Brands() {
  return (
    <section className="first-page-brands">
      <div className='content-restraint p-0 p-lg-2'>
        <Headings headerName="Brands"/>
        <div className="first-page-brands_container d-flex flex-row flex-wrap align-items-center">
          {brands.map(brand => ( <a href="/online-shop" className='flex-grow-1'>
            <div className={'mx-auto first-page-brands__name ' + brand}></div>
          </a>))}
        </div>
      </div>
    </section>
  )
}