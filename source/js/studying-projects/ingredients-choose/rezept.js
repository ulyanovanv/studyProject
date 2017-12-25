/**
 * Created by Anastasiia on 12/25/17.
 */
import React from 'react';
import {OneIngredient} from './each-one';

const textDescription = ["Sukower welsfilet mit Ofenkartoffeln",
                         "Exotishes Haenchen-Kokos-Curry",
                         "Saftiges schweinfilet mit Sengkruste",
                         "Herhafter Gemuese-Flammkuchen",
                         "Haenchenbrust in Cranberrrysosse",
                         "Vietnamesisches Rindfleisch",
                         "Gelbes Thai-Curry",
                         "Putenbrust mit Schrfem Brokkolini",
                         "Schweinelachsstreifen auf Basmatireis"
];

export class Rezept extends React.Component {
    constructor(props){
        super(props);
        //this.randomTextDescription = this.randomTextDescription.bind(this);
    }

    randomTextDescription(){
        let randomNumber = Math.ceil(Math.random()*8);
        console.log(randomNumber);
        return textDescription[randomNumber];
    }


    renderNewList(threeIngredients) {
        return threeIngredients.map(chosenElements => {
            return (<OneIngredient key={ chosenElements }
                                    src={ chosenElements } />);
        });
    }

    render() {
        return (
            <div className="func-center">
                <div className="img-flex-container">{this.renderNewList(this.props.chosenInredientsImages)}</div>
                <p className="span-decor">
                    <span>With these ingredients you can cook&nbsp;</span>
                    <span className="menu"> {this.randomTextDescription()}</span>
                </p>
                <span className="span-decor"> or </span>
                <a className="span-decor click-button" onClick={this.props.turnToFirstPage}>Choose new ingredients</a>
            </div>
            );
    }
}
