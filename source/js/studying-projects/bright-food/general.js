import React from "react";
import ReactDOM from "react-dom";

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

import {MainPage} from "./MainPage/MainPage";
import {BasketPage} from "./BasketPage/BasketPage";

let store = createStore(reducers);

class GeneralParent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isFirstPage: true};
    this.changeOutlook = this.changeOutlook.bind(this);
  }

  changeOutlook(result) {
    this.setState({isFirstPage: result})
  }
  render() {
    return (
    <div className="centre">
      <Provider store={store}>
        <div>
          {this.state.isFirstPage && <MainPage changeOutlook={this.changeOutlook} />}
          {!this.state.isFirstPage && <BasketPage changeOutlook={this.changeOutlook} />}
        </div>
      </Provider>
    </div>)
  }
}
let containerForRendering = document.getElementById("application");
// console.log(containerForRendering);

ReactDOM.render(
  <GeneralParent/>,
  containerForRendering
);

