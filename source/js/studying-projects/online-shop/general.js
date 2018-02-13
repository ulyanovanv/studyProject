 import React from "react";
 import ReactDOM from "react-dom";

 import {createStore} from 'redux';
 import myreducer from './reducers';
 import {Provider} from 'react-redux';

// import {Child} from './shop-child';
 import {FirstPage} from './first-page/first-page';
 import {ProductPage} from './product-page/product-page';
 import {BasketPage} from './basket-page/basket-page';

 const styles = {
     textAlign: "center"
 }

 let store = createStore(myreducer);

 class Parent extends React.Component {
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
           <div className="centralization" style={styles}>
             <Provider store={store}>
               <div>
                 {this.state.isFirstPage && <FirstPage changeOutlook={this.changeOutlook} />}
                 {!this.state.isFirstPage && <BasketPage changeOutlook={this.changeOutlook} />}
               </div>

             </Provider>
         </div>)
     }
 }

 let main = document.getElementsByClassName("shop")[0];

 ReactDOM.render(
     <Parent/>,
     main
 )






























// constructor(props){
//     super(props);
//     this.state = {
//         name: "Anastasiia"
//     }
//     this.changeName = this.changeName.bind(this);
// }
//
// changeName(){
//     let newName = this.state.name === "Anastasiia" ? "Ilya" : "Anastasiia";
//     this.setState({name: newName})
// }
//
// <Child name={this.state.name} onClick={this.changeName}/>