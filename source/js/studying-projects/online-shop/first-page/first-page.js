import React from "react";

import {PageHeader} from "./first-page-content/page-header";
import {Slider} from "./first-page-content/slider";

export class FirstPage extends React.Component {
  render(){
    return ( <div className="centrelaze">
        <PageHeader/>
        <Slider/>
      </div>
    );
  }
}