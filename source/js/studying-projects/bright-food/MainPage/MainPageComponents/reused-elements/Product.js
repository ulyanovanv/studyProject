import React from "react";

export class Product extends React.Component {
  render(){
    return (
      <div className="products_background">
        <div className="products_image">
          <img src={this.props.src}/>
        </div>
      </div>
    );
  }
}