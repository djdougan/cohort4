import React, {Component} from 'react';
import CityCard from './CityCard';

class CommunityApp extends Component{
    constructor(){
        super();
        this.state = {
            Communities: [],
        };
    }

    render(){
        return(
            <div>
                <h1>Communities Application</h1>
                <div>
                {this.state.Communities.map(city=>{
                    return(
                    <CityCard key={city.key}
                        city={city}
                    />)
                })}
                </div>
            </div>
        )
    }
}

export default CommunityApp;