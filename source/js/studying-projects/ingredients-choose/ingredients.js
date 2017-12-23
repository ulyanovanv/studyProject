
import React from 'react';
import ReactDOM from 'react-dom';
import {OneIngredient} from './each-one';
const images = [
    "/images/reactIngredients/mushrooms.jpg",
    "/images/reactIngredients/beans.jpg",
    "/images/reactIngredients/corn.jpg",
    "/images/reactIngredients/lentils.jpg",
    "/images/reactIngredients/peanuts.jpg",
    "/images/reactIngredients/potatoes.jpg",
    "/images/reactIngredients/sunflower.jpg",
    "/images/reactIngredients/walnuts.jpg",
    "/images/reactIngredients/white-beans.jpg",
];
const styles = {
    color: "Red"
}

class MainBody extends React.Component {
    constructor(props){
         super(props);
         this.clickAction = this.clickAction.bind(this);
         this.state = {
             backgroundColor: "white"
         }

    }
    clickAction(){
        let newColor = styles.color;
        this.setState({backgroundColor: newColor});
    }
    renderList() {
        return images.map(picture => <OneIngredient key={picture}
                                                    src={picture}
                                                    style={this.state.backgroundColor}
                                                    onClick={this.clickAction} />);
    }

    render() {
        return (
             <div className="img-flex-container">{this.renderList()}</div>
      );
    }
}

ReactDOM.render(<MainBody />, document.getElementById("app"));
