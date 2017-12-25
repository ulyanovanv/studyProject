/**
 * Created by Anastasiia on 12/25/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {ImagesContainer} from './ingredients';
import {Rezept} from './rezept';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            threeChosenElements: []
        }
        this.changeLayout = this.changeLayout.bind(this);
        this.setEmpty = this.setEmpty.bind(this);
    }
    changeLayout(ingredients){
      if (ingredients) {
          this.setState({threeChosenElements: ingredients})
      }
    }

    setEmpty() {
        this.changeLayout([]);
    }

    render(){
        if (this.state.threeChosenElements.length > 0) {
            return <Rezept chosenInredientsImages={this.state.threeChosenElements} turnToFirstPage={this.setEmpty}/>;
        }
        return (<ImagesContainer pushIngridients={this.changeLayout}/>);
    }
}


ReactDOM.render(<MainContainer />, document.getElementById("app"));