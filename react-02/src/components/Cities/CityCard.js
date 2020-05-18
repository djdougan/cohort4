import React, {Component} from 'react';




class CityCard extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <h3 className="city-name">{this.props.City.name}</h3>
                <div className='group-data'>
                    <h3>latitude</h3><p className="city-latitude">{this.props.City.latitude}</p>
                </div>
                <div className='group-data'>
                    <h3>latitude</h3><p className="city-longitude">{this.props.City.longitude}</p>
                </div>
                <div className='group-data'>
                    <h3>latitude</h3><p className="city-population">{this.props.City.population}</p>
                </div>
            </div>
        )
    }
}

export default CityCard;