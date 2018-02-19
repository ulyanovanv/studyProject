import React from 'react';

import PageHeader from "./PageInherent/PageHeader";
import ProductsRandomized from "./MainPageComponents/ProductsRandomized";
import {Business} from "./MainPageComponents/Business";



export class MainPage extends React.Component {
  render() {
    return (<div className="main-page">
      <PageHeader basketShow={ ()=>this.props.changeOutlook(false)}/>
      <ProductsRandomized/>
      <Business/>
      {/*<ProcuctsCategorized/>*/}
      {/*<GrowthPeriod/>*/}
      {/*<ProductsCategorizedNowelty/>*/}
      {/*<PageFooter/>*/}
    </div>)

  }
}
