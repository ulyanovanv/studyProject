import React from "react";


export class Item extends React.Component {
  render() {
    return (
    <div className="first-page-collection__article"
         style={{
           backgroundImage: `url('${this.props.image}')`
         }} >
      <div className="first-page-collection__article_for-add-button">

        <div className="first-page-collection__article_trapezium"></div>
        <div className="first-page-collection__article_add">
          +add to cart
        </div>

      </div>
    </div>
    )
  }
}