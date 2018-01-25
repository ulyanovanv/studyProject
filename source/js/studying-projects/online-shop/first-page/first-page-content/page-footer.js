import React from "react";

let columnShops = {header: "shops",
  items: ["New in","Women","Men","Shoes","Bags & Accesories", "Top Brands", "Sale & Special Offers", "Lookbook"]};
let columnInformation = {header: "information",
  items: ["About us","Cutomer Service", "New Collection","Best Sellers","Manufactures","Privacy policy","terms & condition","Blog"]};
let columnCustomerService = {header: "customer service",
  items: ["Search Terms","Advanced Search","Orders and Returns","Contact us","RSS","Help &FAQs","Consultant","Store Locations"]};

export class PageFooter extends React.Component {
  constructor(props){
    super(props);
    this.renderTheList = this.renderTheList.bind(this);
  }
  renderTheList(list){
    let forReturn = list.items.map(itemName => {
      return <a className="items" href="/online-shop"> { itemName } </a>;
    });
    return  (<div className="page-footer__upper_navigation_column">
      <p className="headings">
        { list.header }
      </p>
      { forReturn }
    </div>);
  }


  render(){
    return (
      <footer className="page-footer">
        <div className="page-footer__upper">
          <div className="page-footer__upper_navigation">
            {this.renderTheList(columnShops)}
            {this.renderTheList(columnInformation)}
            {this.renderTheList(columnCustomerService)}
          </div>
          <div className="page-footer__upper_stay-connected">

            <div className="page-footer__upper_stay-connected_sub">
              <p className="headings">
                stay connected
              </p>
              <div className="icons">
                <a className="icons_facebook" href="/online-shop"></a>
                <a className="icons_twitter" href="/online-shop"></a>
                <a className="icons_instagram" href="/online-shop"></a>
                <a className="icons_pinterest" href="/online-shop"></a>
                <a className="icons_wifi" href="/online-shop"></a>
              </div>
            </div>

            <div className="page-footer__upper_stay-connected_sub">
              <p className="headings">
                subscribe <i>in</i> our new letters
              </p>
              <form id="subscribe" className="page-footer__upper_stay-connected_form" method="post" target="_blank" action="">
                <div className="page-footer__upper_stay-connected_form_container">
                  <input type="email" name="email-for-subscription" id="subscribe_email" placeholder="Enter Your Email Address"/>
                  <input type="submit" name="submit-for-subscription" id="subscribe_submit" value="SUBSCRIBE"/>
                </div>
              </form>
            </div>

          </div>
        </div>
        <div className="page-footer__lower">
          <div className="page-footer__lower_border-top">

          </div>
        </div>
      </footer>
    )
  }
}