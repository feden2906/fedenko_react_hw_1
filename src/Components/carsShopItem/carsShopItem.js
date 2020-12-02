import React, {Component} from 'react';
import './carsShopItem.css'

class CarsShopItem extends Component {
    render() {
        const {car:{model, madeYear, place, power}} = this.props
        return (
            <div className='itemCar'>
                {<h3>Модель <b>{model}</b></h3>}
                {<h4>Потужність - {power}</h4>}
                {<h4>Рік виготовлення - {madeYear}</h4>}
                {<h4>Місто розташування - {place}</h4>}
            </div>
        );
    }
}

export default CarsShopItem;