import React from "react";
import ReactDOM from "react-dom";

import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';

import {MainPage} from "./MainPage/MainPage";
// import {BasketPage} from "./BasketPage/BasketPage";

let store = createStore(reducers);

class GeneralParent extends React.Component{
  render() {
    return (
    <div className="centre">
      <Provider store={store}>
        <div>
          {true && <MainPage/>}
          {/*{!this.state.isFirstPage && <BasketPage changeOutlook={this.changeOutlook} />}*/}
        </div>
      </Provider>
    </div>)
  }
}
let containerForRendering = document.getElementsByClassName("bright-food")[0];
console.log(containerForRendering);

ReactDOM.render(
  <GeneralParent/>,
  containerForRendering
);

