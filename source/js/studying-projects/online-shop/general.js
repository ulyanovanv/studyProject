 import React from "react";
 import ReactDOM from "react-dom";

// import {Child} from './shop-child';
 import {FirstPage} from './first-page/first-page';
 import {ProductPage} from './product-page/product-page';
 import {BasketPage} from './basket-page/basket-page';

 const styles = {
     textAlign: "center"
 }

 class Parent extends React.Component {

     render(){
         return (<div className="centralization" style={styles}>
             <FirstPage/>
         {false && <ProductPage/>}
         {false && <BasketPage/>}
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