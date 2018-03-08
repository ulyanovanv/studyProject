import React from 'react';

let Wohnenlist = {'Mieten': ['Wohnung mieten','Haus Mieten','Grundstuck pachten','WG/Zimmer Mieten',"Garage mieten","Sonstige mieten"],
  'Kaufen':['Wohnung kaufen','Haus kaufen','Grundstuck kaufen','Feriienhaus kaufen','Garage kaufen','Renditespropbe kaufen','sonstiges kaufen']};
let Gewerbelist= {'Mieten': ['Alle gewerblichen Mietobjekte','Buro/Praxis mieten','Halle mieten','Land-/Firtwirtscht mieten','Ladenflache mieten','Gastro/Immobilien pachten','Sonstiges mieten'],
  'Kaufen':['Alle gewerblichen Kaufobjekte','Buro/Praxis kaufen','Halle kaufen','freizeitimmobolien kaufen','Land-/Firtwirtscht kaufen','Ladenflache kaufen','Gastro/Immobilien kaufen','Sonstiges kaufen']};
let Umkreis = ['beliebig', '1 km', '2 km', '5 km', '10 km', '15 km', '20 km', '25 km', '50 km', '75 km', '100 km', '150 km', '200 km'];


export class FirstLine extends React.Component {
    constructor(props){
        super(props);
        this.state ={};
        this.renderAccomodationOptions = this.renderAccomodationOptions.bind(this);
        this.renderUmkreis = this.renderUmkreis.bind(this);
    }

    handleNameOfObject(value){
        this.props.setNameOfObject(value);
    }
    handleDistance(value){
        this.props.setDistance(value);
    }
    handleCategory(value){
        this.props.setMarketingType(value);
    }
    renderUmkreis(){
      return Umkreis.map((distance,index) => {
        return <option key={index}>{distance}</option>
      })
    }
    renderAccomodationOptions() {
      let list = this.props.typeOfLiving === 'Wohnen' ? Wohnenlist : Gewerbelist;
      let optgr = [];
      for (let key in list){
        optgr.push(<optgroup label={key} key={key}>{
          list[key].map((category, index) => {
            return <option value={`${category}|${key}`} key={index}>{category}</option>
          })
        }</optgroup>);
      }
      return optgr;
    }

    render() {
        return (<div className='first-line'>
            <div className='category'>
                <div className='category-choose'
                     style={{backgroundColor: this.props.typeOfLiving === 'Wohnen' ? '#0077cc' : 'white', color: this.props.typeOfLiving === 'Wohnen' ? 'white' : '#0077cc'}}
                     onClick={() => {this.props.changeType(), this.handleCategory(Wohnenlist.Mieten[0])}}>Wohnen</div>

                <div className='category-choose'
                     style={{backgroundColor: this.props.typeOfLiving === 'Wohnen' ? 'white' : '#0077cc', color: this.props.typeOfLiving === 'Wohnen' ? '#0077cc' : 'white'}}
                     onClick={() => {this.props.changeType(), this.handleCategory(Gewerbelist.Mieten[0])}}>Gewerbe</div>
            </div>
            <div className='wohnung'>
                <div className="wohnung-object">
                    <input type='search' name='serach'  id='wohnung-object' placeholder='Stadt(teil), PLZ oder Objekt-ID'
                           onChange={(event) => this.handleNameOfObject(event.target.value)}/>
                </div>
                <div className="wohnung-distance">
                    <select name='destination' id="wohnung-distance" onChange={(event) => this.handleDistance(event.target.value)}>
                        {this.renderUmkreis()}
                    </select>
                </div>
                <div className='wohnung-category'>
                    <select value={this.props.marketingType} name='livingsTypes' id="wohnung-category"  onChange={(event) => {this.handleCategory(event.target.value)}}>
                        {this.renderAccomodationOptions()}
                    </select>
                </div>
            </div>
        </div>)
    }
}

