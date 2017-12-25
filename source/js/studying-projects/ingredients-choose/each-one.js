/**
 * Created by Anastasiia on 12/23/17.
 */

import React from 'react';
const colors = {

    white: "#eee",
    red: "#993333",
    blue: "#333399"
}

export class OneIngredient extends React.Component {
    render(){

        const color = this.props.isSelected ? colors.red : colors.white;
        return (

                <div className="img-cell" style={{'boxShadow': '0px 0px 12px 5px ' + color}} onClick={this.props.onClick}>
                    <img  src={this.props.src} />
                </div>

            );
    }
}
