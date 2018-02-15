import React from 'react';

import {PageHeader} from "./PageInherent/PageHeader";
import {ProductsRandomized} from "./MainPageComponents/ProductsRandomized";



export class MainPage extends React.Component {
  render() {
    return (<div className="main-page">
      <PageHeader/>
      <ProductsRandomized/>
      {/*<History/>*/}
      {/*<ProcuctsCategorized/>*/}
      {/*<GrowthPeriod/>*/}
      {/*<ProductsCategorizedNowelty/>*/}
      {/*<PageFooter/>*/}
    </div>)

  }
}
