import React from "react";


export class Item extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: "black"
    }
  }

  componentWillReceiveProps(nextProps){
    let newColor = this.props.color;
    this.setState({color: newColor});
  }

  render() {

    return (
      <div className="first-page-collection__article"
           style={{
             backgroundImage: `url('${this.props.image}')`
           }}
           onClick={this.props.onClick}
      >

        {this.props.discount &&
        <div className="first-page-collection__article_reduction">
          <p className="first-page-collection__article_reduction_persentage">
            {this.props.discount}
            <span style={{fontSize: "0.5rem"}}>%</span>
          </p>
        </div>}


        <div className="first-page-collection__article_for-add-button">
          <div className="first-page-collection__article_add" style={{color: this.state.color}}>
            +add to cart
          </div>
          <div className="first-page-collection__article_trapezium" >
          </div>
        </div>
      </div>
    )
  }
}

