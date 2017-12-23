/**
 * Created by Anastasiia on 12/23/17.
 */

import React from 'react';

export class OneIngredient extends React.Component {
    render(){
        return (
            <div className="img-cell" style={{'backgroundColor': this.props.style}} onClick={this.props.onClick}>
                <img src={this.props.src} />
            </div>
            );
    }
}
