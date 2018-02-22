import React from "react";

import PageHeader from "../MainPage/PageInherent/PageHeader";
import ChosenProducts from "./ChosenProducts/ChosenProducts"
import {PageFooter} from "../MainPage/PageInherent/PageFooter";


export class BasketPage extends React.Component {
  render(){
    return (
      <div className="main-page">
        <PageHeader basketShow={ ()=>this.props.changeOutlook(true)}/>
        <ChosenProducts/>
        <PageFooter/>
      </div>
    )
  }
}