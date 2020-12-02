import React, {Component} from 'react';
import './citiesShopItem.css'

class CitiesShopItem extends Component {
    render() {
        const {city:{population, country, region}} = this.props;
        return (
            <div className='itemCity'>
                {<h3>Місто <b>{region}</b></h3>}
                {<h4>Населення - {population}</h4>}
                {<h4>Країна - {country}</h4>}
            </div>
        );
    }
}

export default CitiesShopItem;