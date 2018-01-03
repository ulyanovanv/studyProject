
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


export class ImagesContainer extends React.Component {
    constructor(props){
         super(props);
         this.clickAction = this.clickAction.bind(this);
         this.state = {
             selectedImages: []
         }
    }

    clickAction(picture) {
    	const isSelected = this.state.selectedImages.indexOf(picture) !== -1;
        let currentImages = this.state.selectedImages;
    	if (isSelected) {
            console.log(isSelected);
    		let index = currentImages.indexOf(picture);
    		if (index > -1) {
                currentImages.splice(index, 1);
                this.setState({selectedImages: currentImages});
			}
			return false;
    	}
        currentImages.push(picture);
        this.setState({selectedImages: currentImages});
        if(currentImages.length > 2) {
            this.props.pushIngridients(currentImages);
        }
    }



    renderList() {
        return images.map(picture => {
            const isSelected = this.state.selectedImages.indexOf(picture) !== -1;
            return <OneIngredient key={ picture }
                                  src={ picture }
                                  isSelected={ isSelected }
                                  onClick={ () => { return this.clickAction(picture) } }
            />;
        });
    }

    render() {
        return (
            <div className="func-center">
                <p className="span-decor">Please, select 3 ingredients for Receipe</p>
                <div className="img-flex-container">{this.renderList()}</div>
            </div>
      );
    }
}

