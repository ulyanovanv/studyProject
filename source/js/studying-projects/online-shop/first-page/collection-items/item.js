import React from "react";


export class Item extends React.Component {

  render() {

    return (
      <div className="first-page-collection__article"
           style={{
             backgroundImage: `url('${this.props.image}')`,
             filter: this.props.filter
           }}
           onClick={this.props.onClick}>

        {this.props.discount &&
        <div className="first-page-collection__article_reduction">
          <p className="first-page-collection__article_reduction_persentage">
            {this.props.discount}
            <span style={{fontSize: "0.5rem"}}>%</span>
          </p>
        </div>}


        <div className="first-page-collection__article_for-add-button">
          <div className="first-page-collection__article_add" style={{color: this.props.color}}>
            {this.props.isAdded}
          </div>
          <div className="first-page-collection__article_trapezium" style={{borderBottom: this.props.borderBottom}} >
          </div>
        </div>
      </div>
    )
  }
}

