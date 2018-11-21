import React from "react";

let columnShops = {header: "shops",
  items: ["New in","Women","Men","Shoes","Bags & Accesories", "Top Brands", "Sale & Special Offers", "Lookbook"]};
let columnInformation = {header: "information",
  items: ["About us","Cutomer Service", "New Collection","Best Sellers","Manufactures","Privacy policy","terms & condition","Blog"]};
let columnCustomerService = {header: "customer service",
  items: ["Search Terms","Advanced Search","Orders and Returns","Contact us","RSS","Help &FAQs","Consultant","Store Locations"]};
// TODO: create json file and router

export class PageFooter extends React.Component {
  constructor(props){
    super(props);

    this.renderTheList = this.renderTheList.bind(this);
  }
  renderTheList(list){
    let forReturn = list.items.map(itemName => {
      return <a className="items font-weight-bold" href="/online-shop"> { itemName } </a>;
    });

    return  (<div className="columns d-flex flex-column justify-content-start align-items-start flex-grow-1 p-2">
      <p className="headings text-uppercase py-md-2 text-left">
        {list.header}
      </p>
      { forReturn }
    </div>);
  }


  render(){
    return (
      <footer className="page-footer">
        <div className='content-restraint px-2'>
          <div className="py-2 d-flex flex-column flex-md-row justify-content-around">
            <div className="page-footer_navigation d-flex flex-row flex-wrap w-75 mb-2">
              {this.renderTheList(columnShops)}
              {this.renderTheList(columnInformation)}
              {this.renderTheList(columnCustomerService)}
            </div>

            <div className="page-footer_stay-connected d-flex flex-column py-2">
              <p className="headings text-uppercase text-left py-2">
                stay connected
              </p>

              <div className="icons d-flex flex-row pb-3">
                <a className="mr-2 icons_facebook" href="/online-shop"></a>
                <a className="mr-2 icons_twitter" href="/online-shop"></a>
                <a className="mr-2 icons_instagram" href="/online-shop"></a>
                <a className="mr-2 icons_pinterest" href="/online-shop"></a>
                <a className="mr-2 icons_wifi" href="/online-shop"></a>
              </div>

              <p className="headings text-uppercase text-left">
                subscribe <i>in</i> our new letters
              </p>

              <div className="input-group input-group-sm mb-2">
                <input type="email" className="form-control" name="email-for-subscription" placeholder="Enter Your Email Address"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit"  name="submit-for-subscription">SUBSCRIBE</button>
                </div>
              </div>

              <p className="requisites_text text-left">
                @2018 Anastasiia fashion <br/>
                Designed by Anastasiia
              </p>

              <div className="requisites_payments text-left">
                <img className='pr-1' src="./images/online-shop/svg/visa.png" title="visa"/>
                <img className='pr-1' src="./images/online-shop/svg/master.png" title="mastercard"/>
                <img className='pr-1' src="./images/online-shop/svg/amex.png" title="american express"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}