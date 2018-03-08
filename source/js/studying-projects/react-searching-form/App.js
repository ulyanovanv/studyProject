import React, { Component } from 'react';
import {FirstLine} from './js/FirstLine';
import {SecondLine} from './js/SecondLine';
import axios from 'axios';


class App extends Component {
  constructor(props){
      super(props);
      this.state = {nameOfObject: "",
                    distance: "",
                    marketingType: "",
                    price: {},
                    rooms: {},
                    space: {},
                    typeOfLiving: 'Wohnen',
                    optgroup: "Mieten"};
      this.changeType = this.changeType.bind(this);
      this.setNameOfObject = this.setNameOfObject.bind(this);
      this.setDistance = this.setDistance.bind(this);
      this.setMarketingType = this.setMarketingType.bind(this);
      this.setFilterValue = this.setFilterValue.bind(this);
      this.setOptgroup = this.setOptgroup.bind(this);
      this.postFormToFindMatches = this.postFormToFindMatches.bind(this);
  }
  changeType() {
      this.setState({typeOfLiving: this.state.typeOfLiving === 'Wohnen' ? 'Gewerbe' : 'Wohnen'});
    }
  setNameOfObject(info) {
    this.setState({nameOfObject: info});
  }
  setDistance(info) {
    this.setState({distance: info});
  }
  setMarketingType(info){
    let [category, optgroup] = info.split('|');
    this.setState({marketingType: category, price: {}, rooms: {}, space: {}, optgroup: optgroup});
  }
  setFilterValue(info,type){
    this.setState({[type]: info});
  }
  setOptgroup(key){
    this.setState({optgroup:key});
  }

  //axios is used to send the form based on promise state
  postFormToFindMatches(event){
    event.preventDefault();
    let formInfo = {
      project_id: "clm_iima",
      area_ids:["at.wien"],
      price: this.state.price,
      rooms: this.state.rooms,
      space: this.state.space,
      marketing_type: this.state.optgroup,
      property_type: this.state.marketingType,
      pagination: {
        sort: "relevance",
        page_size: 10,
        page_number: 1
      }
    };
    console.log(formInfo);
    axios.post('http://88.99.15.27/search', formInfo).then(function (response) {
                                                      console.log(response);
                                                    })
                                                    .catch(function (error) {
                                                      console.log(error);
                                                    });
  }

  render() {
    return (
      <div id="application">
          <form action="http://88.99.15.27/search"
                method="post"
                onSubmit={(event) => this.postFormToFindMatches(event)}>
                  <FirstLine setNameOfObject={this.setNameOfObject}
                             setDistance={this.setDistance}
                             setMarketingType={this.setMarketingType}
                             changeType={this.changeType}
                             typeOfLiving={this.state.typeOfLiving}
                             marketingType={this.state.marketingType}
                             setOptgroup={this.setOptgroup}/>

                  <SecondLine setFilterValue={this.setFilterValue}
                              price={this.state.price}
                              rooms={this.state.rooms}
                              space={this.state.space}
                              optgroup={this.state.optgroup}/>
          </form>

      </div>
    );
  }
}
export default App;
