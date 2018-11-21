import React from "react";

import {PageHeader} from "./first-page-content/page-header";
import {Slider} from "./first-page-content/slider";
import Support from "./first-page-content/support";
import Collection from "./first-page-content/collection";
import Brands from "./first-page-content/brands";
import Customers from "./first-page-content/customer-reviews";
import {PageFooter} from "./first-page-content/page-footer";

export class FirstPage extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {isClicked: false};
  // }
  // changeStatusOfClick(){
  //   // this.setState({isClicked: !this.state.isClicked});
  //   this.props.changeOutlook(this.state.isClicked);
  // }

  render(){
    return ( <div className="centrelaze">
        <PageHeader onClick={()=> this.props.changeOutlook(false)}/>
        <Slider/>
        <Support/>
        <Collection/>
        <Brands/>
        <Customers/>
        <PageFooter/>
      </div>
    );
  }
}