import React from "react";

import {PageHeader} from "./first-page-content/page-header";
import {Slider} from "./first-page-content/slider";
import {Support} from "./first-page-content/support";
import {Collection} from "./first-page-content/collection";
import {Brands} from "./first-page-content/brands";

export class FirstPage extends React.Component {
  render(){
    return ( <div className="centrelaze">
        <PageHeader/>
        <Slider/>
        <Support/>
        <Collection/>
        <Brands/>
      </div>
    );
  }
}