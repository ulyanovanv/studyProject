import React from "react";


export class Item extends React.Component {
  render() {
    // let displayDiscount = this.props.discount ? "block" : "none";
    // console.log(displayDiscount);
    return (
      <div className="first-page-collection__article"
           style={{
             backgroundImage: `url('${this.props.image}')`
           }} >

        {this.props.discount &&
        <div className="first-page-collection__article_reduction">
          <p className="first-page-collection__article_reduction_persentage">
            {this.props.discount}
            <span style={{fontSize: "0.5rem"}}>%</span>
          </p>
        </div>}


        <div className="first-page-collection__article_for-add-button">
          <div className="first-page-collection__article_add">
            +add to cart
          </div>
          <div className="first-page-collection__article_trapezium">
          </div>
        </div>
      </div>
    )
  }
}

// {this.props.discount && <p> {this.props.discount} </p> }