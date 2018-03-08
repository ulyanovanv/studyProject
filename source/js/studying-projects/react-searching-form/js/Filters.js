import React from 'react';
import {Options} from "./Options";

export class Filters extends React.Component {
    constructor(props){
        super(props);
        this.renderOption = this.renderOption.bind(this);
        this.setValue = this.setValue.bind(this);
    }
    getCurrentValues(){
        let objectMinMax = this.props.values;
        if (!this.props.values.hasOwnProperty('min')) {
          objectMinMax.min = "";
        }
        if (!this.props.values.hasOwnProperty('max')) {
            objectMinMax.max = "";
        }
        return objectMinMax;
    }
    isChecked(value) {
        let objectMinMax = this.getCurrentValues();
        if (this.props.name === "price") {
            if(objectMinMax.max === value){
                return true;
            }
        } else if (this.props.name === "rooms" || this.props.name === "space") {
          if (objectMinMax.min === value){
            return true;
          }
        }
        return false;
    }

    setValue(value, itemValue, name){
        let objectMinMax = this.getCurrentValues();
        if( name === "price"){
          objectMinMax.max = itemValue;
        } else {
          objectMinMax.min = itemValue;
        }
        this.props.setFilterValue(objectMinMax);
    }
    setMinValueFromOptionValue(min){
        let objectMinMax = this.getCurrentValues();
        objectMinMax.min = parseInt(min);
        this.props.setFilterValue(objectMinMax);
    }
    setMaxValueFromOptionValue(max){
        let objectMinMax = this.getCurrentValues();
        objectMinMax.max =  parseInt(max);
        this.props.setFilterValue(objectMinMax);
    }


    renderValue(){
        let objectMinMax = this.getCurrentValues();
        let valuesForDisplay = "";
        if (objectMinMax.min === "" && objectMinMax.max ===""){
          valuesForDisplay = "---";
        } else if (objectMinMax.min === "" && objectMinMax.max !== "") {
          valuesForDisplay = "bis " + objectMinMax.max;
        } else if (objectMinMax.min !== "" && objectMinMax.max === "") {
          valuesForDisplay = "ab " + objectMinMax.min;
        } else {
          valuesForDisplay = objectMinMax.min + " - " + objectMinMax.max;
        }
        return valuesForDisplay;
    }
    renderMinValue(){
      let objectMinMax = this.getCurrentValues();
      if (objectMinMax.min !== "") {
          return objectMinMax.min;
      } else {
          return "";
      }
    }
    renderMaxValue(){
      let objectMinMax = this.getCurrentValues();
      if (objectMinMax.max !== "") {
        return objectMinMax.max;
      } else {
        return "";
      }
    }
    renderOption(){
      return this.props.filter.map((item,index) => {
        let itemSecond = item;
        if (typeof item === 'number') {
          if (this.props.name === 'price') {
            itemSecond = 'bis ' + item + ' euro';
          } else if (this.props.name === 'rooms') {
            itemSecond = 'ab ' + item + ' Zimmer';
          } else if (this.props.name === 'space') {
            itemSecond = 'ab ' + item + ' m2';
          }
        }
        return <Options labelText = {itemSecond}
                        originValue = {item}
                        callback = {(event) => {this.setValue(event.target.value, item, this.props.name)}}
                        name = {this.props.name}
                        key = {index}
                        isChecked={this.isChecked(item)}/>
      })
    }


    render() {
            return (<div className='filter'
                         onClick={() => this.props.showList(this.props.name)}>

                <label>{this.props.name}</label>
                <input name={this.props.name} type='text' value={this.renderValue()} readOnly/>
                <div className='filter_container'
                     style={{display: this.props.isFocused ? 'flex' : 'none'}}>

                    <div className="filter_options">
                      {this.renderOption()}
                    </div>
                    <div className="filter_selfwriting">
                        <input id="min" type="number"
                               min="0" step="1"
                               placeholder="ab"
                               onChange={(event) => {this.setMinValueFromOptionValue(event.target.value)}}
                               value={this.renderMinValue()}/>
                        <input id="max" type="number"
                               min="0" step="1"
                               placeholder="bis"
                               onChange={(event) => {this.setMaxValueFromOptionValue(event.target.value)}}
                               value={this.renderMaxValue()}/>
                    </div>
                    <div className="filter_nehmen">
                        <input type="button" value="Ubernehmen"
                               onClick={(event) => {
                                 event.stopPropagation();
                                 this.props.showList("");
                               }}/>
                    </div>

                </div>
            </div>)
        }
}