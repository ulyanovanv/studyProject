import React from "react";

import {PageHeader} from "./../first-page/first-page-content/page-header";
import {ChosenItems} from "./chosen-items";
import {PageFooter} from "./../first-page/first-page-content/page-footer";

export class BasketPage extends React.Component {
  render(){
    return <div className="centrelaze">
      <PageHeader onClick={()=>this.props.changeOutlook(true)}/>
      {/*<ChosenItems />*/}
      <PageFooter/>
    </div>;
  }
}

